app.moment = {
  all: [], 
  new: ( function() {
            var counter = 0; 
            var moment = function Moment(description, location) {
              this.description = description; 
              //this.location = // app.location.findBy
              this.journey = app.journey.all[0];
              var self = this; 

              function initialize() {
               counter++; 
               self.id = counter; 
               app.moment.all.push(self); 
               self.journey.moments.push(self); 
              };

              initialize();
            };
          return moment;
    }()),
  findBy: function findBy(attributeHash){
     var key = Object.keys(attributeHash)[0]
     var value = attributeHash[key]
     return $.grep( app.moment.all, function(moment) {
       return moment[key] == value;
     });
   },

}