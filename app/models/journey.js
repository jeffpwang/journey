// function newJourney(){  
//   var counter = 0; 
//   var all = [];
//   var journey = function Journey(title, date){
//     this.title = title
//     this.date = date
//     this.moments = []
//     var self = this
//     function initialize(){
//       counter++
//       self.id = counter
//       self.all.push(self)
//     }
//     initialize();
//   }
//   return journey
// }


app.journey = {
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
               app.journey.all.push(self);  
              };

              initialize();
            };
          return journey;
        }()), 

}