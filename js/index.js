// v0.1

// MAIN
var app = {
  // inixzializzazione di phonegap
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function(){
    document.addEventListener("deviceready", app.onDeviceReady, false);
  },
  onDeviceReady: function(){
    alert("cerco la posizione");
    navigator.geolocation.getCurrentPosition(app.onSuccessGeo, fail)
  },
  // chiamata quando la posizione è stata letta
  onSuccessGeo: function(position){
    // aggiorna le coordinate
    
    var mapOptions = {
      center: { lat: -34.397, lng: 150.644},
      zoom: 8
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    alert("ok");
  }
}


app.initialize();
