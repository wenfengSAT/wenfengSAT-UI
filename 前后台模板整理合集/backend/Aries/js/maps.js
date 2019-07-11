$(document).ready(function(){    
    
    if($("#main-map-google").length > 0){
        var gKyivCords = new google.maps.LatLng(50.43, 30.60); 
        var gKyivOptions = {zoom: 10,center: gKyivCords, mapTypeId: google.maps.MapTypeId.ROADMAP}    
        var gKyiv = new google.maps.Map(document.getElementById("main-map-google"), gKyivOptions);    

        var kcords = new google.maps.LatLng(50.43, 30.60);
        var kmarker = new google.maps.Marker({position: kcords, map: gKyiv, title: "Conference place"});        
    }
    
});
