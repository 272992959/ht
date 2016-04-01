//table
function Table(opt){
    this.info = "显示 start ~ end 条，共 num 条记录 ";     //当前展示记录数量信息
    this.url = '';                                      //获取数据的地址（通过传参获得）
    this.pageSizes = [10,20,50,100];                    //可供分页的页码
    this.$ct = $('.content');                           //当前容器
    this.$el = $('<table class="table">');              //当前表格
    this.page = true;                                   //是否分页（默认分页）
    this.pageTotal = 0;                                 //总页数（ajax拿取数据后计算并更新）
    this.total = 0;                                     //总记录数（ajax拿取数据后更新）
    this.timeout_fv = 900;                              //搜索文本框的延时搜索
    this.time_fv = 0;                                   //搜索文本框的timeout记录
    this.delay_mask_time = 500;                         //响应时间过长显示mask等待框
    this.tip_content = "数据加载中。。。";                 //表格加载提示内容
    this.sendData = {
        page_size: 10,     //每页显示记录数
        cur_page: 1,       //当前页数
        sort: '',          //需要排序的字段
        sort_dir: 'asc',   //排序规则，正序(asc)或者倒序(desc)
        filter_key: '',    //需要检索的字段
        filter_val: ''     //检索的内容
    };                                                  //发送给后台的数据

    $.extend(true, this, opt);

    this.mask = new Mask({
        isShow: false,
        $ct: this.$ct,
        content: this.tip_content
    });                                                 //当前表格的遮罩

    this.init();
};
Table.prototype = (function(){
    var init = function(){
        if(!this.sendData.sort){
            this.sendData.sort = this.col[0].key
        }
        this.render();
        this.addEvent();
        this.$ct.append(this.renderFilter());
    },render = function(fn){
        var that = this;

        var maskTimeout = setTimeout(function(){
                            that.mask.show();
                        },that.delay_mask_time);
        $.ajax({
            url: this.url,
            dataType: "json",
            data: that.sendData
        }).done(function(data) {
            that.total = data.total;
            that.pageTotal = Math.ceil(data.total/that.sendData.page_size);
            that.renderTh(data);
            that.renderTd(data.data);

            that.$ct.find('table.table').remove();
            $('.table_filter',that.$ct).after(that.$el);
            fn && fn();
            if(that.page){
                var $foot = that.$ct.find('.table_foot');
                $foot.length ? $foot.replaceWith(that.renderFoot()) : that.$ct.append(that.renderFoot());
            }
            if(data.status !== 1){
                that.$el.operTip(data.msg || "数据异常",{dir:'bottom',theme: 'danger',timeout: 5000,css:{'white-space':'nowrap'}});
            }
        }).fail(function(){
            that.$ct.find(".table_filter").operTip("程序发生错误",{dir:'bottom',theme: 'danger',timeout: 5000,css:{'white-space':'nowrap'}});
        }).always(function(){
            clearTimeout(maskTimeout);
            that.mask.hide();
        });
    },renderFilter = function() {
        var filter_ct = $('<div class="table_filter">'
                        +'<div class="page_size">'
                            +'每页显示'
                            +'<select name="page_size">'
                            +'</select>'
                            +'条'
                        +'</div>'
                    +'</div>');
        base.renderOption($('[name="page_size"]',filter_ct),this.pageSizes);
        $('[name="page_size"]',filter_ct).find('option[value="'+this.sendData.page_size+'"]').prop("selected",true);
        var filterOpt = $.map(this.col, function(n) {
                            if (n.filter) {
                                return {
                                    key: n.key,
                                    val: n.title
                                };
                            }
                        });
        if(filterOpt.length){
            var filter_key = $('<div class="ct_2 filter_key">'
                                +'<select name="filter_key">'
                                +'</select>'
                            +'</div>');
            var filter_val = $('<div class="ct_2 filter_val">'
                                +'<input type="text" name="filter_val">'
                            +'</div>');
            base.renderOption($('[name="filter_key"]',filter_key),filterOpt);
            !this.sendData.filter_key && (this.sendData.filter_key = filterOpt[0].key);
            $('[name="filter_key"]',filter_key).find('option[value="'+this.sendData.filter_key+'"]').prop("selected",true);
            $('[name="filter_val"]',filter_val).val(this.sendData.filter_val);
            filter_ct.append(filter_key,filter_val);
        }
        return filter_ct;
    },renderTh = function(data) {
        var that = this;
        var tr = $("<tr>");
        var ths = $.map(this.col, function(n) {
            var th = $("<th>").html(n.title);
            if (n.sort) {
                if (n.key === that.sendData.sort) {
                    th.addClass("sort_" + that.sendData.sort_dir);
                } else {
                    th.addClass("sort");
                }
            }
            return th[0];
        });
        tr.append(ths);
        this.$el.html($("<thead>").append(tr));
    },renderTd = function(data) {
        var $this = this;
        var trs = $.map(data, function(m) {
            var tr = $("<tr>");
            var tds = $.map($this.col, function(n) {
                var td = $("<td>");
                if (n.render) {
                    n.render(td,m[n.key]);
                } else {
                    td.html(m[n.key]);
                }
                return td[0];
            });
            tr.append(tds);
            return tr;
        });
        this.$el.append($("<tbody>").append(trs));
    },renderFoot = function(){
        var foot = $("<div>").addClass("table_foot");

        var info = this.renderInfo();
        var buttons = this.renderButton(); 

        foot.append(info,buttons);

        return foot;
    },addEvent = function(){
        var that = this;
        this.$ct.on("click",".sort,.sort_asc,.sort_desc",function(){
            that.sendData.sort = $.grep(that.col,function(item){
                if(item.visible !== false){
                    return item
                }
            })[$(this).index()].key;
            that.sendData.sort_dir = $(this).is('.sort_asc') ? 'desc' : 'asc';
            that.render();
        }).on("change",'[name="page_size"]',function(){
            that.sendData.page_size = $(this).val();
            that.sendData.cur_page = 1;
            that.render();
        }).on("keyup",".cur_page",function(){
            var thisVal = $(this).val();
            var invalid = thisVal == that.sendData.cur_page || isNaN(thisVal) || thisVal < 1 || thisVal > that.pageTotal;
            $('.page_goto',that.$ct).toggleClass("active",invalid);
        }).on("keydown",".cur_page",function(e){
            if(e.keyCode === 13 && !$('.page_goto',that.$ct).is(".active")){
                $('.page_goto',that.$ct).trigger("click");
            }
        }).on("click",'.page_first,.page_last,.page_prev,.page_next,.page_goto',function(){
            if($(this).is('.active')){
                return false;
            }
            if($(this).is(".page_first")){
                that.sendData.cur_page = 1;   
            }else if($(this).is(".page_last")){
                that.sendData.cur_page = that.pageTotal;   
            }else if($(this).is(".page_prev")){
                that.sendData.cur_page -= 1;   
            }else if($(this).is(".page_next")){
                that.sendData.cur_page += 1;   
            }else if($(this).is(".page_goto")){
                that.sendData.cur_page = $('.cur_page',that.$ct).val();   
            }
            that.render();
        }).on("change",'[name="filter_key"]',function(){
            that.sendData.filter_key = $(this).val();
            if(that.sendData.filter_val !== ""){
                $('.page_first',that.$ct).trigger("click");
            }
        }).on("keyup",'[name="filter_val"]',function(){
            var thisVal = $(this).val();
            if(that.sendData.filter_val === thisVal){
                return;
            }
            that.time_fv && clearTimeout(that.time_fv);
            that.time_fv = setTimeout(function(){
                that.sendData.filter_val = thisVal;
                $('.page_first',that.$ct).trigger("click");
            },that.timeout_fv);
        });
    },renderInfo = function(){
        var start = (this.sendData.cur_page-1)*this.sendData.page_size+1;
        var end = Math.min(this.sendData.cur_page*this.sendData.page_size,this.total);
        var info = this.info.replace("start",start).replace("end",end).replace("num",this.total);
        return $("<div>").addClass("table_info ct_5-2").text(info);
    },renderButton = function(){
        var div = $("<div>").addClass("table_btns ct_5-3");
        var button = $("<button>").attr("type","button").addClass("btn btn_outline");
        var isFirst = this.sendData.cur_page === 1;
        var isLast = this.sendData.cur_page === this.pageTotal;
        var firstButton = button.clone().addClass("page_first").text("首页").toggleClass("active",isFirst);
        var lastButton = button.clone().addClass("page_last").text("末页").toggleClass("active",isLast);
        var prevButton = button.clone().addClass("page_prev").text("上一页").toggleClass("active",isFirst);
        var nextButton = button.clone().addClass("page_next").text("下一页").toggleClass("active",isLast);
        var gotoButton = button.clone().addClass("page_goto active").text("跳至");
        var cur_page = $('<label><input class="cur_page" data-validate="posInt" type="text" value="'+this.sendData.cur_page+'">页</label>');
        div.append([firstButton,prevButton,gotoButton,cur_page,nextButton,lastButton]);

        return div;
    };
    return {
        init: init,
        render: render,
        renderFilter: renderFilter,
        renderTh: renderTh,
        renderTd: renderTd,
        renderFoot: renderFoot,
        addEvent: addEvent,
        renderInfo: renderInfo,
        renderButton: renderButton,
    }
})();