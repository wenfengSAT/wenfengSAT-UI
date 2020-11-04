(function($){'use strict'
function getControlPoints(x0,y0,x1,y1,x2,y2,tension){var pow=Math.pow,sqrt=Math.sqrt,d01,d12,fa,fb,p1x,p1y,p2x,p2y;d01=sqrt(pow(x1- x0,2)+ pow(y1- y0,2));d12=sqrt(pow(x2- x1,2)+ pow(y2- y1,2));fa=tension*d01/(d01+ d12);fb=tension- fa;p1x=x1+ fa*(x0- x2);p1y=y1+ fa*(y0- y2);p2x=x1- fb*(x0- x2);p2y=y1- fb*(y0- y2);return[p1x,p1y,p2x,p2y];}
var line=[];function drawLine(points,ctx,height,fill,seriesColor){var c=$.color.parse(seriesColor);c.a=typeof fill=="number"?fill:.3;c.normalize();c=c.toString();ctx.beginPath();ctx.moveTo(points[0][0],points[0][1]);var plength=points.length;for(var i=0;i<plength;i++){ctx[points[i][3]].apply(ctx,points[i][2]);}
ctx.stroke();ctx.lineWidth=0;ctx.lineTo(points[plength- 1][0],height);ctx.lineTo(points[0][0],height);ctx.closePath();if(fill!==false){ctx.fillStyle=c;ctx.fill();}}
function queue(ctx,type,points,cpoints){if(type===void 0||(type!=='bezier'&&type!=='quadratic')){type='quadratic';}
type=type+'CurveTo';if(line.length==0)line.push([points[0],points[1],cpoints.concat(points.slice(2)),type]);else if(type=="quadraticCurveTo"&&points.length==2){cpoints=cpoints.slice(0,2).concat(points);line.push([points[0],points[1],cpoints,type]);}
else line.push([points[2],points[3],cpoints.concat(points.slice(2)),type]);}
function drawSpline(plot,ctx,series){if(series.splines.show!==true){return;}
var cp=[],tension=series.splines.tension||0.5,idx,x,y,points=series.datapoints.points,ps=series.datapoints.pointsize,plotOffset=plot.getPlotOffset(),len=points.length,pts=[];line=[];if(len/ps<4){$.extend(series.lines,series.splines);return;}
for(idx=0;idx<len;idx+=ps){x=points[idx];y=points[idx+ 1];if(x==null||x<series.xaxis.min||x>series.xaxis.max||y<series.yaxis.min||y>series.yaxis.max){continue;}
pts.push(series.xaxis.p2c(x)+ plotOffset.left,series.yaxis.p2c(y)+ plotOffset.top);}
len=pts.length;for(idx=0;idx<len- 2;idx+=2){cp=cp.concat(getControlPoints.apply(this,pts.slice(idx,idx+ 6).concat([tension])));}
ctx.save();ctx.strokeStyle=series.color;ctx.lineWidth=series.splines.lineWidth;queue(ctx,'quadratic',pts.slice(0,4),cp.slice(0,2));for(idx=2;idx<len- 3;idx+=2){queue(ctx,'bezier',pts.slice(idx,idx+ 4),cp.slice(2*idx- 2,2*idx+ 2));}
queue(ctx,'quadratic',pts.slice(len- 2,len),[cp[2*len- 10],cp[2*len- 9],pts[len- 4],pts[len- 3]]);drawLine(line,ctx,plot.height()+ 10,series.splines.fill,series.color);ctx.restore();}
$.plot.plugins.push({init:function(plot){plot.hooks.drawSeries.push(drawSpline);},options:{series:{splines:{show:false,lineWidth:2,tension:0.5,fill:false}}},name:'spline',version:'0.8.2'});})(jQuery);