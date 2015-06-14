$( document ).ready(function() {
    displayLocation();
});

function displayLocation(){
    console.log("HELLO?=!=!!=");
    getDBTable("location", 1, function(location) {
        if (typeof location == 'string' || location instanceof String) {
            console.log("Error while getting database data");
        } else {
            console.log(location[0].latitude);
            console.log(location[0].longitude);
            console.log(location[0].street);
            $("#location").append("<p class='center-text'>"+location[0].street+"</p>");
            initialize(location[0].latitude, location[0].longitude);
        }
    });
}
function initialize(lati, longi) {
    var mapCanvas = document.getElementById('map-canvas');
    var myPosition = new google.maps.LatLng(lati, longi);
    var mapOptions = {
        center: myPosition,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
            position: myPosition,
            map: map,
    });
}
