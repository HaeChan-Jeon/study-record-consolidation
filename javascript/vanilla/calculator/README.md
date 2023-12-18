# 간단한 자바스크립트 계산기

이 코드는 기본적인 산술 연산을 수행하는 간단한 자바스크립트 객체 `calculator`를 정의합니다. `calculator` 객체에는 덧셈, 뺄셈, 나눗셈, 곱셈, 거듭제곱의 기능을 하는 다섯 가지 메서드가 포함되어 있습니다.

## 메서드 목록

- `addition(a, b)`: 두 숫자 `a`와 `b`의 합을 계산하여 콘솔에 출력합니다.
- `subtraction(a, b)`: 첫 번째 숫자 `a`에서 두 번째 숫자 `b`를 뺀 결과를 콘솔에 출력합니다.
- `division(a, b)`: 첫 번째 숫자 `a`를 두 번째 숫자 `b`로 나눈 결과를 콘솔에 출력합니다.
- `multiplication(a, b)`: 두 숫자 `a`와 `b`의 곱을 콘솔에 출력합니다.
- `squaring(a, b)`: 첫 번째 숫자 `a`의 `b`제곱 값을 콘솔에 출력합니다.

## 사용 예시

객체의 각 메서드는 다음과 같이 사용할 수 있습니다:

```javascript
calculator.addition(10, 3);        // 10 + 3 = 13
calculator.subtraction(10, 3);     // 10 - 3 = 7
calculator.division(10, 3);        // 10 / 3 ≈ 3.3333
calculator.multiplication(10, 3);  // 10 * 3 = 30
calculator.squaring(10, 3);        // 10의 3제곱 = 1000
```

이 코드는 콘솔에서 바로 결과를 확인할 수 있도록 설계되었습니다. 각 메서드는 입력된 두 숫자에 대한 연산 결과를 콘솔에 출력합니다.
