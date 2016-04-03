app.location = {

  model: {

    all: [],

    new: ( function() {
      var counter = 0; 
      var location = function Location(name) {
        this.name = name
        this.moments = []            
        var self = this; 
        function initialize() {
          counter++; 
          self.id = counter; 
          app.location.model.all.push(self); 
        };

        initialize();
      };
      return location;
    }())
  }, // ends model

  controller: {

    initMap: (function (location) {
      var map;
      var geocoder = new google.maps.Geocoder();
      
      var userAddress = location;
      map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: -34.397, lng: 150.644},
         zoom: 17
       });

      geocoder.geocode( { 'address': userAddress}, function(results, status) {
        map.setCenter(results[0].geometry.location);
        var marker= new google.maps.Marker({
        position: results[0].geometry.location,
        map: map,
        title: userAddress
      })

      });

      
     }) // ends initMap

  } // ends controller

  // controller: {
  //   show: {
  //     init: function(description, location) {
  //       var newMoment = new app.moment.model.new(description, location);
  //       app.moment.controller.show.render(newMoment);
  //     },

  //     render: function(moment) {
  //       $("#moment_list").append("<li>" + moment.description + "</li>");
  //       $("#moment_description").val("");
  //       $("#address").val("");
  //     }
  //   }
  // }
}



  