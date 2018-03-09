(function ($) {
    'use strict';

    $(document).on(topJUI.eventType.initUI.echarts, function (e) {

        setTimeout(function () {

            if (getTabWindow().$('[data-toggle="topjui-echarts"]').length > 0) {
                getTabWindow().$('[data-toggle="topjui-echarts"]').each(function (i) {
                    var $element = $(this);
                    var options = getOptionsJson($element);

                    // 基于准备好的dom，初始化echarts实例
                    var divId = getTabWindow().document.getElementById($element[0].id);
                    var myChart = echarts.init(divId);

                    // 指定图表的配置项和数据
                    myChart.setOption({
                        title: {
                            text: ''
                        },
                        tooltip: {},
                        legend: {
                            data: []
                        },
                        series: []
                    });

                    // 异步加载数据
                    $.ajax({
                        url: options.url,
                        type: 'post',
                        dataType: 'json',
                        success: function (data, response, status) {
                            //console.log(data.legend);
                            if (options.type == "bar" || options.type == "line") {
                                // 填入数据
                                myChart.setOption({
                                    title: {
                                        text: data.title
                                    },
                                    xAxis: {
                                        data: data.categories
                                    },
                                    yAxis: {},
                                    legend: {
                                        data: data.legend
                                    },
                                    series: data.series
                                });
                            }
                            if (options.type == "pie") {
                                // 填入数据
                                myChart.setOption({
                                    title: {
                                        text: data.title,
                                        x: 'center'
                                    },
                                    tooltip: {
                                        trigger: 'item',
                                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                                    },
                                    legend: data.legend,
                                    series: data.series
                                });
                            }
                            if (options.type == "gauge") {
                                // 填入数据
                                myChart.setOption({
                                    tooltip: {
                                        formatter: "{a} <br/>{b} : {c}%"
                                    },
                                    series: [
                                        {
                                            name: '业务指标',
                                            type: 'gauge',
                                            detail: {formatter: '{value}%'},
                                            data: [{value: 17.1, name: '党员发展率'}]
                                        }
                                    ]
                                });
                            }
                        },
                        error: function (errorMsg) {
                            alert("获取图表数据失败!");
                            myChart.hideLoading();
                        }
                    });

                });
            }

        }, 1500);
    });


})(jQuery);

$(function () {
    // 页面加载完成后触发echarts图表加载事件
    $(this).trigger(topJUI.eventType.initUI.echarts);
});