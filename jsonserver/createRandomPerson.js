const faker = require('faker');


class Person{
    constructor(id){
        this.id = id;
        this.name = faker.name.findName();
        this.email = faker.internet.email();
        this.color = faker.commerce.color();
    }
}


function createMan(numberOfMan){
    const people = [];
    while(numberOfMan){
        people.push(new Person(numberOfMan--));
    }

    return people;
}


console.log(JSON.stringify(createMan(6)));