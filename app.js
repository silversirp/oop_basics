function Person(name) {
    this.name = name;
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name + '.');
    };
}

let person1 = new Person('Bob');
let person2 = new Person('Sarah');


/*
// use this in Console when using normal function
const salva = createNewPerson('Salva');
salva.name;
salva.greeting();


 */
