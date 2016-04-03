app.location.model = {

  all: [],

  new: ( function() {
          var counter = 0; 
          var location = function Location(address) {
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

  maps: []
} // ends model




  