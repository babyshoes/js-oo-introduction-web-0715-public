function Bike(name, bikeType, frameColor){
  this.name = name;
  this.bikeType = bikeType;
  this.frameColor = frameColor;
  this.WHEELS = 2;
  this.condition = "ready to go!"
}

Bike.prototype.takeForARide = function(miles){
  if(miles>50){
    this.condition="needs a tune up";
  }
};

Bike.prototype.tuneUp = function(){
  this.condition="ready to go!"
};
