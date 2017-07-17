//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status, color, hungry, owner, cool) {
  this.name = name;
  this.status = status;
  this.color = color;
  this.hungry = hungry;
  this.owner = owner;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus

var sadie = new Dog('sadie','normal','black',false,'Mason');

var moonshine = new Dog('moonshine', 'normal',undefined, true, undefined);

var atticus = new Dog('atticus', 'normal', undefined, false, undefined);

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, cool) {
  this.name = name;
  this.cool = cool;
}
var mason = new Human('mason', false);

var julia = new Human('julia', true);

Human.prototype.pet = function(dog) {
  dog.status = 'happy';
};

Human.prototype.feed = function(dog) {
  dog.hungry = false;
};

// Instances of Human
// Needed: mason, julia
