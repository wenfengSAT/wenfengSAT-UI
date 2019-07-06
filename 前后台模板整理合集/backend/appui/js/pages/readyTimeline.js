/*
 *  Document   : readyTimeline.js
 *  Author     : pixelcave
 */
var ReadyTimeline=function(){return{init:function(){new GMaps({div:"#gmap-timeline",lat:59.32,lng:17.97,zoom:15,scrollwheel:!1}).addMarkers([{lat:59.32,lng:17.97,title:"Cafe-Bar",animation:google.maps.Animation.DROP,infoWindow:{content:"<strong>Cafe-Bar</strong>"}}])}}}();