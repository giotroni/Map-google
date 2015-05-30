var map;

var app = {

    initialize: function() {
        alert("Chiamata al lancio");
        this.bindEvents();
    },
    bindEvents: function(){
        document.addEventListener("deviceready", app.onDeviceReady, false)
    },
    onDeviceReady: function(){
        alert("adesso si carica...");
        $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBH7uaEdJNrfDU4RHjgtPg971Fm8pHzZ3o&callback=onMapLoaded');
    }
};

function onMapLoaded(){
    alert("on load");
    var mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    alert("fatto");
}

app.initialize();