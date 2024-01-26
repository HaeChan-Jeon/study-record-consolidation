# new 연산자

## 개요

* `new` 연산자는 자바스크립트에서 새로운 객체를 생성하는 데 사용됨
* 이 연산자는 생성자 함수를 호출할 때 사용되며, 새로운 '인스턴스'를 만듬

## 작동 방식

* `new` 연산자를 사용할 때 발생하는 과정은 다음과 같음

1. **새 객체 생성**: `new` 연산자는 빈 객체를 생성
2. **프로토타입 연결**: 생성된 객체의 `[[Prototype]]` (또는 `__proto__`) 속성이 생성자 함수의 `prototype` 객체를 가리키도록 설정됨
3. **생성자 함수 실행**: 생성자 함수가 호출되며, `this`는 새로 생성된 객체를 가리킴
4. **객체 반환**: 생성자 함수가 명시적으로 객체를 반환하지 않는 한, `new` 연산자는 새로 생성된 객체를 반환함

## 예시

```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person('Alice');
person1.sayHello();  // "Hello, my name is Alice"
```

* 이 예시에서 `new Person('Alice')`는 `Person` 생성자 함수를 사용하여 새 객체를 생성함
* `person1`은 `Person`의 인스턴스이며, `Person.prototype`에 정의된 `sayHello` 메서드에 접근할 수 있음

## 주의 사항

- **생성자 함수**: `new` 연산자는 일반 함수와 함께 사용될 때 그 함수를 생성자로 변환함. 생성자 함수는 관례적으로 대문자로 시작하는 이름을 사용함
- **반환 값**: 생성자 함수 내에서 다른 객체를 명시적으로 반환하는 경우, 해당 객체가 `new` 연산자의 결과로 반환됨. 그렇지 않으면 새로 생성된 객체가 반환됨
- **this 바인딩**: 생성자 함수 내부에서 `this`는 새로 생성된 객체를 참조함. 이를 통해 객체의 속성과 메서드를 정의할 수 있음

---
