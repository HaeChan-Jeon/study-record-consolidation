# Truthy

***

* Truthy 값(참 같은 값)은 JavaScript에서 조건식이나 불리언 연산에서 `true`로 평가되는 값임
* Truthy 값은 `true`로 간주되며, 조건을 만족하는 값으로 간주됨
* JavaScript에서는 다음과 같은 값들이 Truthy로 간주됨

1. **true**: 명시적으로 `true`로 표시된 불리언 값

2. **비어 있지 않은 문자열**: 문자열이 하나 이상의 문자를 포함하고 있을 때(예를 들어 `"Hello"`)

3. **숫자 0 이외의 숫자**: 0이 아닌 모든 숫자 값들은 Truthy(예를 들어, `-1`, `1`, `3.14` 등)

4. **모든 객체**: 객체는 Truthy(객체에 대한 조건은 항상 참)

5. **배열**: 비어 있지 않은 배열은 Truthy

6. **함수**: 정의된 함수는 Truthy

7. **무한대(Infinity)**: `Infinity`는 Truthy

8. **정규 표현식(RegExp)**: 정의된 정규 표현식은 Truthy

9. **Date 객체**: 정의된 Date 객체는 Truthy

10. **사용자 정의 객체**: 사용자가 정의한 객체도 Truthy

* 예를 들어, 다음 코드에서는 Truthy 값인 `"Hello"`를 사용하여 `if` 조건을 만족시키고 해당 블록이 실행됨

```javascript
let text = "Hello";

if (text) {
  console.log("이 문장은 실행됩니다.");
}
```

* Truthy 값은 조건문에서 주로 사용되며, 조건이 참인지 거짓인지를 판단하기 위한 기준으로 사용됨
* Falsy 값과 함께 Truthy 값도 JavaScript의 조건부 논리와 제어 구조에서 중요한 역할을 수행함