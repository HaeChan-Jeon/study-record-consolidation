// 모두 숫자 타입니다.
var integer = 10; // 정수
var double = 10.12; // 실수
var negative = -20; // 음의 정수


// 표기법만 다를 뿐 모두 같은 값이다.
var binary = 0b0100001; // 2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수

console.log(binary); // 65
console.log(octal); // 65
console.log(hex); // 65
console.log(binary === octal); // tru
console.log(octal === hex); // true

// 숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0); // true
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5

//숫자 타입의 세 가지 특별한 값
console.log(10 / 0); // infinity
console.log(10 / -0); // -infinity
console.log(1 * 'string'); // NaN

// 자바스크립트는 대소문자를 구별한다.

var x = nan; // ReferenceError: nan is not defined

// 문자열 타입
var string;
string = '문자열' // 작은따옴표
string = "문자열" // 큰따옴표
string = `문자열` // 백틱(ES6)

string = '작은따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
string = "큰따옴표로 감싼 문자열 내의 '작은따옴표'는 문자열로 인식된다.";

// 따옴표로 감싸지 않은 hello를 식별자로 인식한다.
var string = hello;

var template = `Template literal`
console.log(template);

var str = 'Hello
world.';
// SyntaxError: Invalid or unexpected token

var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';

console.log(template);

var template = `<ul>
    <li><a href="#">Home</a></li>
</ul>`;

console.log(template);

var first = 'hae-chan';
var last = 'jeon';

// ES5: 문자열 연결
console.log("My name is" + first + ' ' + last + '.'); // My name is hae-chan jeon.

//ES6: 표현식 삽입
console.log(`My name is ${first} ${last}.`); // My name is hae-chan jeon.

console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3

console.log("1 + 2 = ${1 + 2}"); // 1 + 2 = ${1 + 2}

var foo = true;
console.log(foo); // true

foo = false;
console.log(foo); // false

var too;
console.log(too); // undefined

// 이전 참조를 제거. foo 변수는 더 이상 'Lee'를 참조하지 않는다.
// 유용해 보이지는 않는다. 변수의 스코프를 좁게 만들어 변수 자체를 재빨리 소멸시키는 편이 낫다.
foo = null;