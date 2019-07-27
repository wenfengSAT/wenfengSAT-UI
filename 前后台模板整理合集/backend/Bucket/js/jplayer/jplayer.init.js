$(function(){
"use strict";
    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                rtmpv: "rtmp://cp67126.edgefcs.net/ondemand/mp4:mediapm/ovp/content/test/video/spacealonehd_sounas_640_300.mp4",
                poster: "http://www.jplayer.org/video/poster/space_alone.jpg"
            });
        },
        swfPath: "js/jplayer/js",
        supplied: "rtmpv",
        size: {
            width: "100%",
            height: "260px",
            cssClass: "jp-video-360p"
        },
        cssSelectorAncestor: "#jp_container_1",
        smoothPlayBar: true,
        keyEnabled: true
    });

    $("#jquery_jplayer_2").jPlayer({
        ready: function (event) {
            $(this).jPlayer("setMedia", {
                m4a:"http://www.jplayer.org/audio/m4a/TSP-01-Cro_magnon_man.m4a",
                oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
            });
        },
        swfPath: "js/jplayer/js",
        supplied: "m4a, oga",
        size: {

            cssClass: "jp-audio"
        },
        wmode: "window",
        cssSelectorAncestor: "#jp_container_2",
        smoothPlayBar: true,
        keyEnabled: true
    });
});