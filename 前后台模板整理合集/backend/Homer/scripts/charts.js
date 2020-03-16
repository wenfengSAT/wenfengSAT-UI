$(function () {

    /**
     * Pie charts data and options used in many views
     */

    $("span.pie").peity("pie", {
        fill: ["#62cb31", "#edf0f5"]
    })

    $(".line").peity("line",{
        fill: '#62cb31',
        stroke:'#edf0f5',
    })

    $(".bar").peity("bar", {
        fill: ["#62cb31", "#edf0f5"]
    })

    $(".bar_dashboard").peity("bar", {
        fill: ["#62cb31", "#edf0f5"],
    })
});
