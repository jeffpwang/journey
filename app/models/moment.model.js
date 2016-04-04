app.moment.model = {

  all: [],

  new: ( function() {
    var counter = 0; 
    var moment = function Moment(title, category, description, location) {
      this.description = description; 
      this.title = title;
      this.category = category;
      this.journey = app.journey.model.all[0];
      this.location = location;
      var self = this; 

      function initialize() {
        counter++; 
        self.id = counter; 
        app.moment.model.all.push(self); 
        self.journey.moments.push(self);
        self.location.moments.push(self);
      };

      initialize();
    };

    return moment;
  }())
} // ends model