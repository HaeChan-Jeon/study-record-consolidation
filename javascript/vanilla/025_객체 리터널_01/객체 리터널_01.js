var person = {
    name: 'Lee',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

console.log(typeof person); // object
console.log(person); // {naume: "Lee", sayHello: f}



var empty = {}; // 빈 객체
console.log(typeof empty) // object
