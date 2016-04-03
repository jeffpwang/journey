app.journey.model = {

  all: [],

  new: ( function() {
    var counter = 0;
    var journey = function Journey(title, date) {
      this.title = title; 
      this.date = date; 
      this.moments = [];
      var self = this; 

      function initialize() {
       counter++; 
       self.id = counter; 
       app.journey.model.all.push(self);  
      };

      initialize();
    };
  return journey;
  }())
} // ends model