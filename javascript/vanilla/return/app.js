const age = 25;

function calculateKrAge_log(ageOfForeigner) {
    console.log(ageOfForeigner + 2);
}

calculateKrAge_log(age);

function calculateKrAge_return(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge_return(age);

console.log(krAge);
