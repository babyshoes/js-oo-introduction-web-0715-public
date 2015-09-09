function Owner(name){
  this.name = name;
  this.bikes = [];
}

Owner.prototype.buildBike = function(name, bikeType, frameColor){
  var bike = new Bike(name, bikeType, frameColor);
  this.bikes.push(bike);
};

Owner.prototype.rideBike = function(bike, miles){
  for(var i=0; i<this.bikes.length; i++){
    if(this.bikes[i].name == bike){
      this.bikes[i].condition = "needs a tune up";
    }
  }
};
