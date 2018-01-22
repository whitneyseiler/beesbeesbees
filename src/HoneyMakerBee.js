var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.color = 'yellow';
  this.honeyPot = 0;
  this.job = 'make honey'
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function(){
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function(){
  this.honeyPot -= 1;
  return this.honeyPot;
}
