/*function Person(first, last, age, gender, interests) {
    this.name = {
        first : first,
        last : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + '.');
    };
}


let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
person1.greeting();
person1.bio();*/


/*
// use this in Console when using normal function
const salva = createNewPerson('Salva');
salva.name;
salva.greeting();
*/

// shape constructor
/*function Shape(name, sides, sideLength) {
    // atributes - fields
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
  // functions - methods
    this.calcPerimenter = function() {
        this.perimeter = this.sides * this.sideLength;
        console.log(this.perimeter);
    }
}*/

// object creator
// let square = new Shape("square", 4, 5);
let square = new Square(5)
console.log(square);

let triangle = new Shape('triangle', 3, 3);
console.log(triangle);

// object method calling
square.calcPerimeter();
square.calcArea();
triangle.calcPerimeter();
// Write your code below here

