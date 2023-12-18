# conditional

* JavaScript에서 조건문은 프로그램의 흐름을 제어하는 데 사용됩니다.
* 조건문을 통해 특정 조건에 따라 다른 코드를 실행할 수 있습니다.
* JavaScript의 주요 조건문에는 `if`, `else if`, `else` 등이 있습니다.


***

## conditonal 기본 개념

### `if` 문

* `if` 문은 주어진 조건이 참(`true`)일 때 코드 블록을 실행합니다.

```javascript
if (조건) {
    // 조건이 참일 때 실행할 코드
}
```

* 예시:
```javascript
if (temperature > 30) {
    console.log("날씨가 덥습니다.");
}
```

### `else if` 및 `else` 문

* `else if`는 여러 조건을 순차적으로 테스트할 때 사용됩니다. `else` 문은 앞선 모든 조건이 거짓(`false`)일 때 실행됩니다.

```javascript
if (조건1) {
    // 조건1이 참일 때 실행할 코드
} else if (조건2) {
    // 조건2가 참일 때 실행할 코드
} else {
    // 모든 조건이 거짓일 때 실행할 코드
}
```

* 예시:
```javascript
if (score >= 90) {
    console.log("A등급");
} else if (score >= 80) {
    console.log("B등급");
} else {
    console.log("C등급 이하");
}
```

* 조건문은 프로그램의 실행 흐름을 조건에 따라 분기하게 해 주며, `if`, `else if`, `else` 등을 통해 다양한 조건 처리가 가능합니다.
* 이를 통해 프로그램이 더 동적이고 상호작용적으로 작동할 수 있게 됩니다.

***

### conditional 사용 예시

* 이 코드는 사용자의 나이를 기반으로 한 조건부 로직을 보여줍니다.
* JavaScript의 조건문을 사용하여 다양한 연령대에 대해 서로 다른 메시지를 출력합니다.

1. **사용자로부터 나이 입력 받기**:
   ```javascript
   const age = parseInt(prompt("How old are you?"));
   ```
   * 여기서 `prompt` 함수는 사용자에게 나이를 입력받는 대화 상자를 띄우고, `parseInt` 함수는 사용자가 입력한 문자열을 정수로 변환합니다.

2. **입력 값 검증 (유효한 양의 정수인지 확인)**:
   ```javascript
   if (isNaN(age) || age < 0) {
       console.log("Please write a real positive number");
   }
   ```
   * `isNaN(age)`는 `age`가 숫자가 아닌 경우 `true`를 반환합니다.
   * `age < 0`는 입력된 나이가 0보다 작은 경우를 확인합니다.
   * 이 두 조건 중 하나라도 참이면, 사용자에게 유효한 양의 정수를 입력하라는 메시지가 출력됩니다.

3. **18세 미만인 경우**:
   ```javascript
   else if (age < 18) {
       console.log("You are too young.");
   }
   ```
   * 사용자의 나이가 18세 미만인 경우, "너무 어리다"는 메시지를 출력합니다.

4. **18세 이상 50세 이하인 경우**:
   ```javascript
   else if (age >= 18 && age <= 50) {
       console.log("You can drink");
   }
   ```
   * 이 조건문은 사용자가 18세 이상 50세 이하일 때 해당되며, "음주가 가능하다"는 메시지를 출력합니다.

5. **50세 이상 80세 이하인 경우**:
   ```javascript
   else if (age >= 50 && age <= 80) {
       console.log("You should exercise");
   }
   ```
   * 사용자의 나이가 50세 이상 80세 이하인 경우, "운동을 해야 한다"는 조언을 출력합니다.

6. **80세 초과인 경우**:
   ```javascript
   else if (age > 80) {
       console.log("You can do whatever you want.");
   }
   ```
   * 마지막으로, 사용자의 나이가 80세를 초과하는 경우, "원하는 것을 할 수 있다"는 메시지를 출력합니다.

* 이 코드의 각 `else if` 블록은 서로 배타적인 조건들을 포함하고 있으며, 각 조건에 해당하는 경우에만 특정 메시지를 출력합니다.
* 이러한 조건문의 구조는 입력된 나이에 따라 다른 행동을 취할 수 있게 해 주며, 프로그램의 로직을 명확하게 표현합니다.

***
