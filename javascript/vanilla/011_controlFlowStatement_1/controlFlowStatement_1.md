# 제어문 1

***

## 블록문

* 0개 이상의 문을 중괄호로 묶은 것으로, 코드 불록 또는 불록이라고 부르기도 함
* 자바스크립트는 블록문을 하나의 실행 단위로 취급함

```javascript
// 블록문
{
    var foo = 10;
}

// 제어문

var x = 1;
if (x < 10) {
    x++;
}

// 함수 선언문
function sum(a, b) {
    return a + b;
}
```

## 조건문

* 조건문은 주어진 조건식의 평가 겨로가에 다라 고드 블록(블록문)의 실행을 결정함
* 조건식은 불리언 값으로 평가될 수 있는 표현식임

### if...else문

* if...else문은 주어진 조건식(불리언 값으로 평가될 수 있는 표현식)의 평가 결과, 즉 논리적 참 또는 거짓에 따라 실행할 코드 블록을 결정함

```javascript
if (조건식) {
    // 조건식이 참이면 이 코드 블록이 실행된다.
}
else (조건식) {
    // 조건식이 거짓이면 이 코드 블록이 실행된다.
}
```

* 조건식을 추가하여 조건에 따라 실행될 코드 블록을 늘리고 싶으면 else if 문을 사용한다.

```javascript
if (조건식1) {
    // 조건식1이 참이면 이 코드 블록이 실행된다.
}
else if (조건식2) {
    // 조건식2가 참이면 이 코드 블록이 실행된다.
}
else (조건식2) {
    // 조건식1과 조건식2가 모두 거짓이면 이 코드 블록이 실행된다.
}
```

* else if 문과 else 문은 옵션임
* 즉, 사용할 수도 있고 사용하지 않을 수도 있음
* if 문과 else 문은 2번 이상 사용할 수 없지만 else if 문은 여러 번 사용할 수 있음

```javascript
var num = 2;
var kind;

// if 문
if (num > 0) {
    kind = '양수'; // 음수를 구별할 수 없음
}
console.log(kind); // 양수

// if...else 문
if (num > 0) {
    kind = '양수';
} else {
    kind = '음수'; // 0은 음수가 아님
}
console.log(kind); // 양수

// if...else if 문
if (num > 0) {
    kind = '양수';
} else if (num < 0) {
    kind = '음수';
} else {
    kind = '영';
}
console.log(kind); // 양수
```

* 만약 코드 블록 내의 문이 하나뿐이라면 중괄호를 생략할 수 있음

```javascript
var num = 2;
var kind;

if (num > 0)        kind = '양수';
else if (num < 0)   kind = '음수';
else                kind = '영';

console.log(kind); // 양수
```

* 대부분의 if...else 문은 삼항 조건 연산자로 바꿔쓸 수 있음

```javascript
var x = 2;

// 0은 false로 취급됨
var result = x % 2 ? '홀수' '짝수';
console.log(result); // 짝수
```