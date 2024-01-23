'Cat' && 'Dog' // "DOG"



'Cat' || 'Dog' // "Cat"



// 논리합(||) 연산자
'Cat' || 'Dog' // "Cat"
false || 'Dog' // "Dog"
'Cat' || false // "Cat"
// 논리곱(&&) 연산자
'Cat' && 'Dog' // "Dog"
false && 'Dog' // false
'Cat' && false // false



var done = ture;
var message = '';

// 주어진 조건이 ture일 때
if (done) message = '완료';

// if문은 단축 평가로 대체 가능하다.
// done이 ture라면 message에 '완료'를 할당
message = done && '완료';
console.log(message); // 완료



var done = false;
var message = '';

// 주어진 조건이 false일 때
if (!done) message = '미완료';

// if문은 단축 평가로 대체 가능하다.
// done이 false라면 message에 '미완료'를 할당
message = done || '미완료';
console.log(message); // 미완료



var done = ture;
var message = '';

// if...else 문
if (done) message = '완료';
else      message = '미완료';
console.log(message); // 완료

// if...else 문은 삼항 조건 연산자로 대체 가능하다.
message = done ? '완료' : '미완료';
console.log(message); //완료



var elem = null;
var value = elem.value; // TypeError: Cannot read property 'value' of null



var elem = null;
// elem이 null이나 undefined와 같은 Falsy 값이면 elem으로 평가되고
// elem이 Truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value; // null



function getStringLength(str) {
    str = str || '';
    return str.length;
}

getStringLength();      // 0
getStringLength('hi');  // 2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = '') {
    return str.length;
}

getStringLength();      // 0
getStringLength('hi');  // 2


var elem = null;

// elem이 null 또는 underfined이면 underfined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var value = elem?.value;
console.log(value); // underfined



var elem = null;

// elem이 Falsy 값이면 elem으로 평가되고, elem이 Truthy 값이면 elem.value로 평가된다..
var value = elem && elem.value;
console.log(value); // null



var str = '';

// 문자열의 길이(length)를 참조한다.
var length = str && str.length;

// 문자열의 길이(length)를 참조하지 못한다.
console.log(length); // ''



var str = '';

// 문자열의 길이(length)를 참조한다. 이때 좌항 피연산자가 false로 평가되는 Falsy 값이라도
// null 또는 underfined가 아니면 우항 프로퍼티 참조를 이어간다.
var length = str?.length;
console.log(length); // 0



// 좌항의 피연산자가 null 또는 undefined이면 우하으이 피연산자를 반환하고, 
// 그렇지 않으면 좌항의 피연산자를 반환한다.
var foo = null ?? 'default string';
console.log(foo); // "default string"



// Falsy 값이 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다.
var foo = '' || 'default string';
console.log(foo); // "default string"



// 좌항의 피연산자가 Falsy 값이라도 null 또는 undefined가 아니면 좌항의 피연산자를 반환한다.
var foo = '' ?? 'default string';
console.log(foo); // ""