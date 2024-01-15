# 암묵적 타입 변환(불리언)

* JavaScript는 동적 타입 언어로서, 변수의 타입을 명시적으로 선언하지 않아도 되며, 다양한 타입 간에 자동으로 형 변환을 수행할 수 있음
* 이러한 자동 형 변환을 암묵적 타입 변환 또는 타입 강제 변환이라고 함

## 1. 불리언 값과 다른 타입 간의 암묵적 타입 변환

* JavaScript에서는 불리언 값(`true` 또는 `false`)과 다른 데이터 타입 간에 암묵적인 타입 변환이 이루어짐
* 예를 들어, 다른 데이터 타입을 조건식에 사용하면 자동으로 불리언으로 변환됨

### 숫자에서 불리언으로 변환

```javascript
let num = 42;
let boolValue = Boolean(num);

console.log(boolValue); // 결과: true (0 이외의 숫자는 true로 변환)
```

* 숫자에서 불리언으로의 변환에서는 0이 아닌 숫자는 `true`로, 0은 `false`로 변환됨

### 문자열에서 불리언으로 변환

```javascript
let str = "Hello";
let boolValue = Boolean(str);

console.log(boolValue); // 결과: true (비어있지 않은 문자열은 true로 변환)
```

* 문자열에서 불리언으로의 변환에서는 비어 있지 않은 문자열은 `true`로, 빈 문자열(`""`)은 `false`로 변환됨

### 객체에서 불리언으로 변환

```javascript
let obj = { key: "value" };
let boolValue = Boolean(obj);

console.log(boolValue); // 결과: true (객체는 항상 true로 변환)
```

* 객체에서 불리언으로의 변환에서는 모든 객체는 `true`로 변환됨

### `null`과 `undefined`에서 불리언으로 변환

```javascript
let nullValue = null;
let undefinedValue = undefined;

console.log(Boolean(nullValue));      // 결과: false
console.log(Boolean(undefinedValue)); // 결과: false
```

* `null`과 `undefined`는 불리언으로 변환하면 모두 `false`가 됨

* JavaScript에서 암묵적인 불리언 타입 변환은 조건문과 논리 연산자에서 자주 사용됨
* 예를 들어, `if` 문이나 `while` 문에서 값이 `true` 또는 `false`로 평가되어야 하는 경우, 암묵적인 불리언 타입 변환을 통해 원하는 동작을 구현할 수 있음