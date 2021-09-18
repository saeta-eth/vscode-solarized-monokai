class Person {
    constructor(_name) {
        this.name = _name;
    }

    greeting() {
        console.log(`Hi! I'm ${this.name}`);
    };
}

const person = new Person("slorenzo");

person.greeting();
