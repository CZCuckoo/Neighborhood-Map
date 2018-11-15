var fourSquareSecret = "client_id=3AISUGDKCWVZPEILE41CLJI4MV0P2A4RBMSWF1JHFXYA2QPT&client_secret=GVMJSGMG4MRM2HDITEFGV0LE0VWRIZEDORPETPRAVDSQ1JY1&v=20181114";


var latvar = 42.361145;
var lngvar = -71.057083;
var artGalleryModel = ko.observableArray();

function artGallery(id, name, location) {
    var self = this;
    self.id = id;
    self.name = name;
    self.lat = location.lat;
    self.lng = location.lng;
    self.displayAddress = location.address + " " + location.city + ", "+ location.state;
    // Need to add something for google to reference to add delete
};

initMap = function() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat:latvar, lng:lngvar},
        zoom: 13,
        // styles: styles,
        mapTypeControl: false
      });
      artGalleryModel.subscribe(function(changes) {
        gallery = artGalleryModel()[changes[0].index];
        console.log(gallery.name);
        var marker = new google.maps.Marker({
          position: {lat:gallery.lat, lng:gallery.lng},
          title: gallery.name,
          animation: google.maps.Animation.DROP,
          icon: makeMarkerIcon('0091ff'),
          id: gallery.id,
          map: map
        });
    }, null, "arrayChange");
      ko.applyBindings(artGalleryModel);
      google.maps.event.addDomListener(window, 'load', initializeGalleries);
    //   You're subscribing to all changes here. 
    // 0: {status: "added", value: artGallery, index: 15}
};

function initializeGalleries() {
    loadGalleries("",latvar,lngvar);
}

// This function takes in a COLOR, and then creates a new marker
      // icon of that color. The icon will be 21 px wide by 34 high, have an origin
      // of 0, 0 and be anchored at 10, 34).
      function makeMarkerIcon(markerColor) {
        var markerImage = new google.maps.MarkerImage(
          'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
          '|40|_|%E2%80%A2',
          new google.maps.Size(21, 34),
          new google.maps.Point(0, 0),
          new google.maps.Point(10, 34),
          new google.maps.Size(21,34));
        return markerImage;
      }




loadGalleries = function (query,lat,lng) {
    if (query !== "") {
        query = "&query=" + query;
    }

    $.get( "https://api.foursquare.com/v2/venues/search?ll=" + lat + "," + lng + query + "&categoryId=4bf58dd8d48988d1e2931735&" + fourSquareSecret, function( data ) {
        $.each( data.response.venues, function( index, value ) {
            artGalleryModel.push(new artGallery(value.id, value.name, value.location));
        });
        // No error handler in jquery
      });
};

// Add something to keep calling this function and blah blah blah.
