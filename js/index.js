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
    $.getScript('http://maps.google.com/maps/api/js?sensor=false&callback=onMapsApiLoaded');
    alert("mappa letta");
  }
}

// chiamata quando la posizione è stata letta
function onMapsApiLoaded(){
  // aggiorna le coordinate
  alert("Entro nella funzione");
  var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
  var mapOptions = {
    center: myLatlng ,
    zoom: 8
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  alert("mappa ok");
}

app.initialize();
