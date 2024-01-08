// 가능 예시

var person, $elem, _name, first_name, val1;

var 이름, 田海燦

var firstname;
var firstName;
var FIRSTNAME;

// 불가능 예시

var first-name // SyntaxError: Unexpected token -
var 1st;  // SyntaxError: Invalid or unexpected token
var this; // SyntaxError: unexpected token this

var x = 3; // 권장하지 않는 예시(못 알아봄)
var score = 100; // 점수인 것을 알 수 있음

// 변수 선언에 별도의 주석이 필요하다면 변수의 존재 목적을 명확히 드러내지 못하는 것이다.

// 경과 시간, 단위는 날짜다.
var d; //NG

var elapsedTimeInDays; // OK

//네이밍 컨벤션은 하나 이상의 영어 단어로 구성된 식별자를 만들 때 가독성 좋게 단어를 한 눈에 구분하기 위해 규정된 명명 규칙

// 카멜 케이스(camelCase)
var firstName;

// 스네이크 케이스(snamke_case)
var first_name;

// 파스칼 케이스(PascalCase)
var FirstNAme;

// 헝가리언 케이스(typeHungarianCase)
var strFirstName; // type + identifier
var $elem = document.getElementById('myId'); // DOM 노드
var observable$ = fromEvent(document, 'click'); // RxJS 옵저버블

// 자바스크립트에서는 일반적으로 변수나 함수의 이름에는 카멜 케이스를 사용하고, 생성자 함수, 클래스의 이름에는 파스칼 케이스를 사용함