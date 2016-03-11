//table
var table = {
    opt: {
        info: "显示 start ~ end 条，共 num 条记录 "
    },
    init: function(opt) {
        var $this = this;
        $.extend(true, this.opt, opt);
        $.ajax({
            url: this.opt.url,
            dataType: "json"
        }).always(function(data) {
            data = {
    "status": 1,
    "sort": "role",
    "sortDir": "desc",
    "pageNum": 93,
    "pageSize": 10,
    "num": 922,
    "data": [{
        "id": "11",
        "objectId": "79g953758d",
        "phone": "1321323",
        "money": "15.00",
        "role": "8",
        "username": "ad",
        "pid": "61",
        "discount": null,
        "name": "ad",
        "company": null,
        "token": null,
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "prole": null,
        "createdAt": "2015-11-22 05:24:19",
        "updatedAt": "2016-01-29 18:56:23",
        "pname": null,
        "frozen": null,
        "frozenname": null,
        "discount_charge": null,
        "bd_name": "bd",
        "price_all": null,
        "taskNum": null
    }, {
        "id": "64",
        "objectId": "",
        "phone": "15533441319",
        "money": "587.90",
        "role": "8",
        "username": "huangyuqi",
        "pid": "63",
        "discount": "70",
        "name": "黄钰淇",
        "company": "黄钰淇的公司",
        "token": "21ebd80cfeb0d1dd8a874c63d40046df",
        "password": "bd72f57a73e79e843d9efe6716052b55",
        "prole": "7",
        "createdAt": "2015-12-17 17:29:29",
        "updatedAt": "2016-01-28 15:07:22",
        "pname": "王尧",
        "frozen": null,
        "frozenname": null,
        "discount_charge": null,
        "bd_name": "王尧",
        "price_all": "4032.00",
        "taskNum": null
    }, {
        "id": "68",
        "objectId": "",
        "phone": "15247263478",
        "money": "3640.00",
        "role": "8",
        "username": "yinqiqi",
        "pid": "16",
        "discount": null,
        "name": "尹琪琪",
        "company": "北京上榜科技有限公司",
        "token": "e249689ee231566620292aad6906811e",
        "password": "da185dfba734d85f5d947235bcbfe475",
        "prole": "5",
        "createdAt": "2015-12-23 13:04:29",
        "updatedAt": "2016-02-12 22:06:06",
        "pname": null,
        "frozen": null,
        "frozenname": null,
        "discount_charge": null,
        "bd_name": null,
        "price_all": "29460.00",
        "taskNum": null
    }, {
        "id": "69",
        "objectId": "",
        "phone": "18810666265",
        "money": "44716.00",
        "role": "8",
        "username": "haojie888",
        "pid": "18",
        "discount": null,
        "name": "郝杰",
        "company": "郝杰公司",
        "token": "ceaeae06646e5ca9796e629c7289b788",
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "prole": "5",
        "createdAt": "2015-12-23 15:00:41",
        "updatedAt": "2016-02-12 11:47:57",
        "pname": "bdm_wyh",
        "frozen": null,
        "frozenname": null,
        "discount_charge": null,
        "bd_name": "bdm_wyh",
        "price_all": "269910.00",
        "taskNum": null
    }, {
        "id": "70",
        "objectId": "",
        "phone": "18500350412",
        "money": "0.00",
        "role": "8",
        "username": "gaofeifei",
        "pid": "16",
        "discount": null,
        "name": "高飞飞",
        "company": "七麦科技",
        "token": "7c9b16d582fe1b017e0134b38e211364",
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "prole": "5",
        "createdAt": "2015-12-24 16:14:51",
        "updatedAt": "2015-12-24 16:26:56",
        "pname": null,
        "frozen": null,
        "frozenname": null,
        "discount_charge": null,
        "bd_name": null,
        "price_all": null,
        "taskNum": null
    }, {
        "id": "72",
        "objectId": "",
        "phone": "13061683986",
        "money": "52271.00",
        "role": "8",
        "username": "jupeng",
        "pid": "16",
        "discount": null,
        "name": "邓张璎",
        "company": "上海聚鹏科技有限公司",
        "token": "24173d57cbccdf9bd2b2fdfe9c1cf225",
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "prole": "5",
        "createdAt": "2015-12-25 10:34:37",
        "updatedAt": "2016-02-14 10:58:49",
        "pname": null,
        "frozen": null,
        "frozenname": null,
        "discount_charge": null,
        "bd_name": null,
        "price_all": "313589.00",
        "taskNum": null
    }, {
        "id": "73",
        "objectId": "",
        "phone": "18675989594",
        "money": "8100.00",
        "role": "8",
        "username": "zhishang",
        "pid": "18",
        "discount": null,
        "name": "韩志强",
        "company": " 湛江市致尚网络科技有限公司 ",
        "token": "d2fc2b7cd5d442711733d4faccb193aa",
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "prole": "5",
        "createdAt": "2016-01-05 16:33:39",
        "updatedAt": "2016-01-06 17:47:35",
        "pname": "bdm_wyh",
        "frozen": null,
        "frozenname": null,
        "discount_charge": null,
        "bd_name": "bdm_wyh",
        "price_all": "1900.00",
        "taskNum": null
    }, {
        "id": "75",
        "objectId": "",
        "phone": "18611000259",
        "money": "6150.50",
        "role": "8",
        "username": "moxia",
        "pid": "18",
        "discount": null,
        "name": "墨侠",
        "company": "热酷",
        "token": "2fe4d6b849658b5d0df95d81c4894fe8",
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "prole": "5",
        "createdAt": "2016-01-08 13:43:07",
        "updatedAt": "2016-02-03 18:18:27",
        "pname": "bdm_wyh",
        "frozen": null,
        "frozenname": null,
        "discount_charge": null,
        "bd_name": "bdm_wyh",
        "price_all": "100034.50",
        "taskNum": null
    }, {
        "id": "78",
        "objectId": "",
        "phone": "185121552211",
        "money": "2000.00",
        "role": "8",
        "username": "Tangpin",
        "pid": "16",
        "discount": null,
        "name": "姚羽翔",
        "company": "唐品",
        "token": "fdc88277fcf8df03e2bdd3413114cacd",
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "prole": "5",
        "createdAt": "2016-01-18 14:30:54",
        "updatedAt": "2016-01-25 11:07:10",
        "pname": null,
        "frozen": null,
        "frozenname": null,
        "discount_charge": null,
        "bd_name": null,
        "price_all": "8000.00",
        "taskNum": null
    }, {
        "id": "79",
        "objectId": "",
        "phone": "18217715540",
        "money": "0.00",
        "role": "8",
        "username": "ailing",
        "pid": "16",
        "discount": null,
        "name": "王宇宾",
        "company": "爱凌（上海）健康科技有限公司",
        "token": "d8b55112638c5e9c286cae79b56b5175",
        "password": "47d17a27c0d19f255258e487e293b22b",
        "prole": "5",
        "createdAt": "2016-01-22 13:49:06",
        "updatedAt": "2016-01-28 14:24:13",
        "pname": null,
        "frozen": null,
        "frozenname": null,
        "discount_charge": null,
        "bd_name": null,
        "price_all": "15000.00",
        "taskNum": null
    }, {
        "id": "81",
        "objectId": "",
        "phone": "13825624640",
        "money": "0.00",
        "role": "8",
        "username": "shuaigougou",
        "pid": "76",
        "discount": null,
        "name": "陈宇浩",
        "company": " 帅狗狗科技有限公司",
        "token": null,
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "prole": "7",
        "createdAt": "2016-01-25 13:58:49",
        "updatedAt": "2016-01-25 13:58:49",
        "pname": "叶召霞",
        "frozen": null,
        "frozenname": null,
        "discount_charge": null,
        "bd_name": "叶召霞",
        "price_all": null,
        "taskNum": null
    }, {
        "id": "82",
        "objectId": "",
        "phone": "15810365871",
        "money": "0.00",
        "role": "8",
        "username": "wuyuminghe",
        "pid": "16",
        "discount": null,
        "name": "李金更",
        "company": "北京五域明和网络科技有限公司",
        "token": "42bf0eae9c8a98a7fefcde495e47b4aa",
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "prole": "5",
        "createdAt": "2016-01-25 20:51:02",
        "updatedAt": "2016-01-30 10:58:16",
        "pname": null,
        "frozen": null,
        "frozenname": null,
        "discount_charge": null,
        "bd_name": null,
        "price_all": "15400.00",
        "taskNum": null
    }, {
        "id": "83",
        "objectId": "",
        "phone": "15376609796",
        "money": "0.00",
        "role": "8",
        "username": "hengrui",
        "pid": "76",
        "discount": null,
        "name": "王斌",
        "company": "烟台恒瑞网络科技有限公司",
        "token": null,
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "prole": "7",
        "createdAt": "2016-01-26 15:25:25",
        "updatedAt": "2016-01-26 15:34:03",
        "pname": "叶召霞",
        "frozen": null,
        "frozenname": null,
        "discount_charge": null,
        "bd_name": "叶召霞",
        "price_all": null,
        "taskNum": null
    }, {
        "id": "84",
        "objectId": "",
        "phone": "15972190917",
        "money": "8200.00",
        "role": "8",
        "username": "wangjia",
        "pid": "16",
        "discount": null,
        "name": "汪佳",
        "company": "汪佳",
        "token": "f2f1ace0f3cc9b4bff8dec1dc403b76c",
        "password": "cc645e6e8de2d6d75eab195e3790bc8b",
        "prole": "5",
        "createdAt": "2016-01-27 12:03:53",
        "updatedAt": "2016-01-28 17:04:02",
        "pname": null,
        "frozen": null,
        "frozenname": null,
        "discount_charge": null,
        "bd_name": null,
        "price_all": "1800.00",
        "taskNum": null
    }, {
        "id": "85",
        "objectId": "",
        "phone": "13601058722",
        "money": "15000.00",
        "role": "8",
        "username": "xianyu",
        "pid": "18",
        "discount": null,
        "name": "杜小伟",
        "company": "咸鱼",
        "token": "c2c267f609f03026124b59c65182e8d6",
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "prole": "5",
        "createdAt": "2016-01-29 17:01:24",
        "updatedAt": "2016-02-02 14:16:11",
        "pname": "bdm_wyh",
        "frozen": null,
        "frozenname": null,
        "discount_charge": null,
        "bd_name": "bdm_wyh",
        "price_all": "40000.00",
        "taskNum": null
    }, {
        "id": "86",
        "objectId": "",
        "phone": "15011023033",
        "money": "4200.00",
        "role": "8",
        "username": "fanzhuo",
        "pid": "18",
        "discount": null,
        "name": "邱利",
        "company": "凡卓广告",
        "token": null,
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "prole": "5",
        "createdAt": "2016-01-31 14:50:05",
        "updatedAt": "2016-02-01 15:23:37",
        "pname": "bdm_wyh",
        "frozen": null,
        "frozenname": null,
        "discount_charge": null,
        "bd_name": "bdm_wyh",
        "price_all": "23300.00",
        "taskNum": null
    }],
    "msg": "操作成功"
};
            $this.render(data);
        });
        this.event();
    },
    render: function(data) {
        this.renderTh(data);
        this.renderTd(data.data);
        this.renderPage(data);
    },
    renderTh: function(data) {
        var tr = $("<tr>");
        var ths = $.map(this.opt.col, function(n) {
            var th = $("<th>").html(n.title);
            if (n.sort) {
                if (n.key === data.sort) {
                    th.addClass("sort_" + data.sortDir);
                } else {
                    th.addClass("sort");
                }
            }
            return th[0];
        });
        tr.append(ths);
        $(this.opt.sel).append($("<thead>").append(tr));
    },
    renderTd: function(data) {
        var $this = this;
        var trs = $.map(data, function(m) {
            var tr = $("<tr>");
            var tds = $.map($this.opt.col, function(n) {
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
        $(this.opt.sel).append($("<tbody>").append(trs));
    },
    renderPage: function(data){
        var pageNum = data.pageNum,pageSize = data.pageSize,num = data.num,div = $("<div>").addClass("page grid");

        var info = this.renderInfo(pageNum,pageSize,num);
        div.append(info);

        
        var buttons = this.renderButton(pageNum,pageSize,num); 
        div.append(buttons);

        $(this.opt.sel).after(div);
    },
    event: function(){
        $(this.opt.sel).on("click",".sort,.sort_asc,.sort_desc",function(){
            alert($(this).index());
        });
    },
    renderInfo: function(pageNum,pageSize,num){
        var start = (pageNum-1)*pageSize+1;
        var end = Math.min(pageNum*pageSize,num);
        this.opt.info = this.opt.info.replace("start",start).replace("end",end).replace("num",num);
        return $("<div>").addClass("table_info ct_5-2").text(this.opt.info);
    },
    renderButton: function(pageNum,pageSize,num){
        var div = $("<div>").addClass("table_btns ct_5-3");
        var allPage = Math.ceil(num/pageSize);
        var button = $("<button>").attr("type","button").addClass("btn btn_outline");
        var isFirst = pageNum === 1;
        var isLast = pageNum === allPage;
        var firstButton = button.clone().addClass("first").text("首页").toggleClass("active",isFirst);
        var lastButton = button.clone().addClass("last").text("末页").toggleClass("active",isLast);
        var prevButton = button.clone().addClass("prev").text("上一页").toggleClass("active",isFirst);
        var nextButton = button.clone().addClass("next").text("下一页").toggleClass("active",isLast);
        var gotoButton = button.clone().addClass("goto active").text("跳至");
        var curPage = $('<label><input class="curPage" type="text" value="'+pageNum+'">页</label>');
        div.append([firstButton,prevButton,gotoButton,curPage,nextButton,lastButton]);
        
        // 分页按钮事件
        div.on("keyup",".curPage",function(){
            var thisVal = $(this).val();
            var invalid = thisVal == pageNum || isNaN(thisVal) || thisVal < 1 || thisVal > allPage;
            gotoButton.toggleClass("active",invalid);
        }).on("keydown",".curPage",function(e){
            if(e.keyCode === 13 && !gotoButton.is(".active")){
                gotoButton.trigger("click");
            }
        }).on("click",".firstButton",function(e){
            
        }).on("click",".lastButton",function(e){
            
        }).on("click",".prevButton",function(e){
            
        }).on("click",".nextButton",function(e){
            
        }).on("click",".gotoButton",function(e){
            
        });
        return div;
    }
};
