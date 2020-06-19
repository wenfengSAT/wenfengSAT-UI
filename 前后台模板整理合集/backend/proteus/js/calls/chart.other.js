/*  ==========================================================================
    Table of Content for Different Charts:

    === Function ===
	- runAnimatedSkillsDiagram
    - runCircliful
    - runSparklineBar
    - runSparklineLine
    - runSparklineBullet
    - runSparklineBox
    - runSparklinePie
    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runAnimatedSkillsDiagram
    ========================================================================== */
function runAnimatedSkillsDiagram(diagramId){



    var o = {
        init: function(){
            this.diagram();
        },
        random: function(l, u){
            return Math.floor((Math.random()*(u-l+1))+l);
        },
        diagram: function(){
            var r = Raphael(diagramId, '100%', '100%'),
                rad = 73,
                defaultText = 'Skills',
                speed = 250,
                width = 600,
                height = 600;

            r.setViewBox(0, 0, width, height, true);
            r.setSize('100%', '100%');
            r.circle(width/2, width/2, 85).attr({ stroke: 'none', fill: '#555555' });


            var title = r.text(300, 300, defaultText).attr({
                font: '20px Arial',
                fill: '#fff'
            }).toFront();

            r.customAttributes.arc = function(value, color, rad){
                var v = 3.6*value,
                    alpha = v == 360 ? 359.99 : v,
                    random = o.random(91, 240),
                    a = (random-alpha) * Math.PI/180,
                    b = random * Math.PI/180,
                    sx = 300 + rad * Math.cos(b),
                    sy = 300 - rad * Math.sin(b),
                    x = 300 + rad * Math.cos(a),
                    y = 300 - rad * Math.sin(a),
                    path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
                return { path: path, stroke: color }
            }

            $('.get').find('.arc').each(function(i){
                var t = $(this),
                    //color = t.find('.color').val(),
                    color = t.find('.hide').css('color'),
                    value = t.find('.percent').val(),
                    text = t.find('.text').text();

                rad += 30;
                var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': 26 });

                z.mouseover(function(){
                    this.animate({ 'stroke-width': 50, opacity: .75 }, 1000, 'elastic');
                    if(Raphael.type != 'VML') //solves IE problem
                    this.toFront();
                    title.stop().animate({ opacity: 0 }, speed, '>', function(){
                        this.attr({ text: text + '\n' + value + '%' }).animate({ opacity: 1 }, speed, '<');
                    });
                }).mouseout(function(){
                    this.stop().animate({ 'stroke-width': 26, opacity: 1 }, speed*4, 'elastic');
                    title.stop().animate({ opacity: 0 }, speed, '>', function(){
                        title.attr({ text: defaultText }).animate({ opacity: 1 }, speed, '<');
                    });
                });
            });

        }
    }

    o.init();
}

/*
    runCircliful
    ========================================================================== */
function runCircliful(circli){
    $(circli).circliful();
}

/*
    runSparklineBar
    ========================================================================== */
function runSparklineBar(spark){

    var color_1 = $('.other-spark-bar-1').css('color'),
        color_2 = $('.other-spark-bar-2').css('color');



    $(spark).sparkline(
        [5,6,7,2,0,-4,-2,4],
        {
            type: 'bar',
            height: '',
            barWidth: 25,
            barColor: color_1,
            negBarColor: color_2
        }
    );

}

/*
    runSparklineLine
    ========================================================================== */
function runSparklineLine(spark){

    var color_1 = $('.other-spark-line-1').css('color'),
        color_2 = $('.other-spark-line-2').css('color'),
        color_3 = $('.other-spark-line-3').css('color');

    $(spark).sparkline(
        [5,6,7,9,9,5,3,2,2,4,6,7],
        {
            type: 'line',
            width: '100%',
            height: '102px',
            lineColor: color_1,
            fillColor: color_2,
            spotColor: color_3,
            minSpotColor: color_3,
            maxSpotColor: color_3
        }
    );

}

/*
    runSparklineBullet
    ========================================================================== */
function runSparklineBullet(spark){

    var color_1 = $('.other-spark-bullet-1').css('color'),
        color_2 = $('.other-spark-bullet-2').css('color'),
        color_3 = $('.other-spark-bullet-3').css('color'),
        color_4 = $('.other-spark-bullet-4').css('color'),
        color_5 = $('.other-spark-bullet-5').css('color');

    $(spark).sparkline(
        [10,12,12,9,6],
        {
            type: 'bullet',
            height: '50',
            targetWidth: 4,
            targetColor: color_1,
            performanceColor: color_2,
            rangeColors: [color_3, color_4, color_5]
        }
    );

}

/*
    runSparklineBox
    ========================================================================== */
function runSparklineBox(spark){

    var color_1 = $('.other-spark-box-1').css('color'),
        color_2 = $('.other-spark-box-2').css('color'),
        color_3 = $('.other-spark-box-3').css('color'),
        color_4 = $('.other-spark-box-4').css('color'),
        color_5 = $('.other-spark-box-5').css('color');

    $(spark).sparkline(
        [4,27,34,52,54,59,61,68,78,82,85,87,91,93,100],
        {
            type: 'box',
            width: '100%',
            height: '100',
            raw: false,
            boxLineColor: color_1,
            boxFillColor: color_2,
            whiskerColor: color_3,
            outlierLineColor: color_4,
            medianColor: color_5
        }
    );

}


/*
    runSparklinePie
    ========================================================================== */
function runSparklinePie(spark){

    var color_1 = $('.other-spark-pie-1').css('color'),
        color_2 = $('.other-spark-pie-2').css('color'),
        color_3 = $('.other-spark-pie-3').css('color'),
        color_4 = $('.other-spark-pie-4').css('color');

    $(spark).sparkline(
        [4,2,2,4],
        {
            type: 'pie',
            width: '100px',
            height: '100px',
            sliceColors: [color_1, color_2, color_3, color_4],
            offset: 30
        }
    );

}



/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var calendar    = 'diagram',
        circli_1    = '#circle_1',
        circli_2    = '#circle_2',

        sparkBar    = '.sparkBar',
        sparkLine   = '.sparkLine',
        sparkBullet = '.sparkBullet',
        sparkBox    = '.sparkBox',
        sparkPie    = '.sparkPie';

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runAnimatedSkillsDiagram(calendar);
    runCircliful(circli_1);
    runCircliful(circli_2);

    runSparklineBar(sparkBar);
    runSparklineLine(sparkLine);
    runSparklineBullet(sparkBullet);
    runSparklineBox(sparkBox);
    runSparklinePie(sparkPie);

});