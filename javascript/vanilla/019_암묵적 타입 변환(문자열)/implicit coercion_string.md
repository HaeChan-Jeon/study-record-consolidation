# 암묵적 타입 변환 (문자열)

***

* JavaScript는 동적 타입 언어로서, 변수의 타입을 명시적으로 선언하지 않아도 되며, 다양한 타입 간에 자동으로 형 변환을 수행할 수 있음
* 이러한 자동 형 변환을 암묵적 타입 변환 또는 타입 강제 변환이라고 함

## 1. 숫자와 문자열 간의 암묵적 타입 변환

JavaScript에서는 숫자와 문자열 간에 자주 암묵적인 타입 변환이 이루어짐
예를 들어, 문자열과 숫자를 더하면 다음과 같이 동작함

```javascript
let num = 42;
let str = "3";

let result = num + str; // 결과: "423"
```

* 위 예제에서 `num`은 숫자 42이고, `str`은 문자열 "3"임
* 하지만 둘을 더하면 문자열 연결(concatenation)이 이루어져 "423"이라는 문자열이 됨
* JavaScript는 숫자와 문자열을 더하면 문자열로 변환함

## 2. 논리값과 문자열 간의 암묵적 타입 변환

* 또 다른 예로, 논리값과 문자열 간에도 암묵적인 타입 변환이 가능함
* 예를 들어, 논리값과 문자열을 결합하면 다음과 같이 동작함

```javascript
let isTrue = true;

let result = isTrue + " is true"; // 결과: "true is true"
```

* 위 예제에서 `isTrue`는 `true`라는 논리값이지만, 문자열과 결합할 때 문자열로 변환되어 "true is true"라는 문자열이 됨

## 3. 다른 타입과 문자열 간의 암묵적 타입 변환

* JavaScript에서는 다양한 데이터 타입 간에도 암묵적 타입 변환이 발생할 수 있음
* 예를 들어, 객체나 배열을 문자열과 결합하면 해당 객체나 배열이 문자열로 변환되어 문자열로 표현됨
* 이러한 암묵적 타입 변환은 문자열 연결(concatenation)을 위해 주로 사용됨

```javascript
let obj = { key: "value" };
let arr = [1, 2, 3];

let objStr = "Object: " + obj; // 결과: "Object: [object Object]"
let arrStr = "Array: " + arr;   // 결과: "Array: 1,2,3"
```

* 위 예제에서는 객체 `obj`와 배열 `arr`을 문자열과 결합하면 각각 문자열로 변환되어 문자열 연결이 이루어짐

* 암묵적 타입 변환은 JavaScript의 동적 타입 언어 특성 중 하나이며, 주의해서 다루어야 할 부분 중 하나임
* 타입 변환이 예상치 못한 결과를 초래할 수 있으므로 코드를 작성할 때 타입 변환이 어떻게 동작하는지 이해하고 조심하는 것이 중요함