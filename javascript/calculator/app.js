const calculator = {
    addition: function(a, b){
        console.log(a + b);
    },
    subtraction: function(a, b){
        console.log(a - b);
    },
    division: function(a, b){
        console.log(a / b);
    },
    multiplication: function(a, b){
        console.log(a * b);
    },
    squaring: function(a, b){
        console.log(a ** b);
    }
};

calculator.addition(10, 3);
calculator.subtraction(10, 3);
calculator.division(10, 3);
calculator.multiplication(10, 3);
calculator.squaring(10, 3);

// app.js:6 7
// app.js:9 3.3333333333333335
// app.js:12 30
// app.js:15 1000