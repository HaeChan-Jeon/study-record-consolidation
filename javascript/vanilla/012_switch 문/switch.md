# switch 문

***

* `switch` 문은 다양한 조건에 따른 분기 로직을 구현할 때 유용하며, 다수의 `if-else` 문을 간결하게 표현할 때 사용됨
  * 자바스크립트의 `switch` 문은 여러 가지 조건을 비교하여 다양한 동작을 수행할 수 있는 조건문임
  * `switch` 문은 주로 하나의 변수를 평가하고 그 변수가 다양한 값을 가질 때 사용됨
 
## 기본 구조

* `switch` 문은 다음과 같은 구조를 가짐

```javascript
switch (변수) {
  case 값1:
    // 변수가 값1과 일치할 때 실행할 코드
    break;
  case 값2:
    // 변수가 값2와 일치할 때 실행할 코드
    break;
  // 필요한 만큼 case 추가 가능
  default:
    // 모든 case에 해당하지 않을 때 실행할 코드
}
```

* `변수`는 평가할 변수 또는 표현식을 나타냄
* 각 `case` 블록은 변수가 특정 값과 일치할 때 실행될 코드를 정의함
* `break` 문은 해당 `case` 블록의 실행을 중단하고 `switch` 문을 빠져나가도록 함
* `default` 블록은 모든 `case`에 해당하지 않을 때 실행될 코드를 정의함(선택사항)

## 예제

* 다음은 `switch` 문을 사용한 간단한 예제임

```javascript
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = '월요일';
    break;
  case 2:
    dayName = '화요일';
    break;
  case 3:
    dayName = '수요일';
    break;
  default:
    dayName = '기타';
}

console.log(`오늘은 ${dayName}입니다.`);
```

* 위 예제에서는 `day` 변수의 값에 따라 다른 `dayName` 값을 설정하고 출력하는 예제임
* `day`가 3일 경우 "수요일"이라는 문자열이 출력됨