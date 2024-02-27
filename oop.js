
class player{
    constructor(name,age,skills){
        this.name =name;
        this.age = age;
        this.skills=skills
    }
sayHello(){
        return `i m ${this.name} - and i am ${this.skills}`
    }
}

const masrafee =new player("Masrafee",33,"bowler");

console.log(masrafee.sayHello());
