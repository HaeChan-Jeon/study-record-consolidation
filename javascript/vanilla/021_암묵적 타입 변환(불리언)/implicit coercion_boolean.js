let num = 42;
let boolValue = Boolean(num);

console.log(boolValue); // 결과: true (0 이외의 숫자는 true로 변환)

let str = "Hello";
let boolValueTwo = Boolean(str);

console.log(boolValue); // 결과: true (비어있지 않은 문자열은 true로 변환)

let obj = { key: "value" };
let boolValueThree = Boolean(obj);

console.log(boolValue); // 결과: true (객체는 항상 true로 변환)

let nullValue = null;
let undefinedValue = undefined;

console.log(Boolean(nullValue));      // 결과: false
console.log(Boolean(undefinedValue)); // 결과: false