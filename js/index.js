var app = {

    initialize: function() {
        alert("Chiamata al lancio");
        this.bindEvents();
    },
    bindEvents: function(){
        document.addEventListener("deviceready", app.onDeviceReady, false)
    },
    onDeviceReady: function(){
        alert("Chiamata alla fine del caricamento");
    }
};


app.initialize();