var chart={renderChart:function(t,e){var a=echarts.init(t);a.setOption(e),$(window).resize(function(){setTimeout(function(){a.resize()},500)})},data2opt:function(data,opt){var dataOpt=opt.dataOpt,myOpt=opt.myOpt,option={tooltip:{trigger:"axis"},legend:{data:$.map(dataOpt,function(t){return t.name})},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{show:!0,feature:{magicType:{show:!0,type:["line","bar","stack","tiled"]},restore:{show:!0},saveAsImage:{show:!0}}},xAxis:[{type:"category",boundaryGap:!1,data:$.map(data,function(t){return t.day})}],yAxis:[{type:"value"}],series:$.map(dataOpt,function(item){var obj=$.extend(!0,{type:"line",data:$.map(data,function(iitem){return eval("iitem['"+item.value.split(".").join("']['")+"']")},item)},item);return obj})};return $.extend(!0,option,myOpt),option}};