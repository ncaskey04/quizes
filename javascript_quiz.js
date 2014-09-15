
function Person(name, height, age, sleeping){
  this.name = name;
  this.height = height;
  this.age = age;
  this.sleeping = false;
}

Person.prototype.eat = function(){
  return "NOM NOM NOM";
};

Person.prototype.sleep = function(){
  if (this.sleeping === false){
    this.sleeping = true;
  } else {
    console.log(this.name + "is already sleeping");
  }
};

Person.prototype.wakeUp = function(){
  if ( this.sleeping === true){
    this.sleeping = false;
  } else {
    console.log(this.name + "is already awake");
  }
};

Student.prototype = new Person();
Student.prototype.constructor = Student;

function Student(studying){
  this.studying = false;
}

Student.prototype.studying = function(){
  if (this.studying === false && this.sleeping === false){
    this.studying = true;
  } else {
    console.log(this.name + "can't study because s/he is sleeping");
  }
};

Student.prototype.stopStudying = function(){
  if (this.studying === true) {
    this.studying = false;
  } else {
    console.log(this.name + "is not studying right now");
  }
};