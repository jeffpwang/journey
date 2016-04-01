app.location = {
  all: [], 
  new: ( function() {
            var counter = 0; 
            var location = function Location(name, address) {
              this.name = name;
              this.address = address; 
              var self = this; 

              function initialize() {
               counter++; 
               self.id = counter; 
               app.moment.location = self; 
              };

              initialize();
            };
          return location;
        }()), 

}