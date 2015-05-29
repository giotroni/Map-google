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
    alert("carico la mappa");
    $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBH7uaEdJNrfDU4RHjgtPg971Fm8pHzZ3o&callback=onMapsApiLoaded');
    alert("mappa letta");
  },
  // chiamata quando la posizione è stata letta
  onMapsApiLoaded: function(){
    // aggiorna le coordinate
    alert("Entro nella funzione");
    var mapOptions = {
      center: { lat: -34.397, lng: 150.644},
      zoom: 8
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    alert("mappa ok");
  }
}

app.initialize();
