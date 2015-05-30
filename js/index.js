var map;
function onMappaCaricata() {
  alert("on load");
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
  alert("fatto");
}
             
function caricaMappa() {
  alert("Partito");
  onMappaCaricata();
}


google.maps.event.addDomListener(window, 'load', caricaMappa);