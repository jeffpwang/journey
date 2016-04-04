app.location.model = {

  all: [],

  new: ( function() {
    var counter = 0; 
    var location = function Location(placeName, address) {
      this.place = placeName;
      this.address = address;
      this.moments = [];      
      var self = this; 
      function initialize() {
        counter++; 
        self.id = counter; 
        app.location.model.all.push(self); 
      }

      initialize();
    }
    return location;
  }()),

  map: null
} // ends model




  