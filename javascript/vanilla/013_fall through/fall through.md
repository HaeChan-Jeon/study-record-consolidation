# Fall Through(폴 스루)

***

* "Fall through"는 자바스크립트의 `switch` 문에서 발생할 수 있는 중요한 동작임
* 이것은 `switch` 문의 각 `case` 블록에서 `break` 문을 사용하지 않을 때 발생함

## Fall Through란?

* "Fall through"란 `switch` 문의 `case` 블록에서 해당 `case`에 일치하는 코드를 실행한 후 다음 `case` 블록으로 이동하는 현상을 나타냄
* 즉, `break` 문이나 `return` 문을 사용하지 않으면 `case` 블록을 빠져나가지 않고 다음 `case` 블록을 연이어 실행함

## 예제

* 다음은 "Fall through" 현상을 보여주는 간단한 예제임

```javascript
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = '월요일';
  case 2:
    dayName = '화요일';
  case 3:
    dayName = '수요일';
  default:
    dayName = '기타';
}

console.log(`오늘은 ${dayName}입니다.`);
```

* 위 예제에서는 `day` 변수의 값이 3일 경우, `dayName` 변수가 '수요일'로 설정됨
* 그러나 `break` 문이 없으므로 `case 3`에서 일치하는 코드를 실행한 후 바로 `default` 블록으로 넘어감
* 따라서 `dayName`은 '기타'로 변경됨

* 이렇게 "Fall through"를 사용하면 의도치 않은 결과를 초래할 수 있으므로 주의해야 함
* 보통은 `break` 문을 사용하여 `case` 블록을 빠져나가는 것이 권장됨

## 주의사항

* "Fall through"를 사용할 때에는 의도적으로 그렇게 하고, 주석 등으로 명확하게 문서화하는 것이 좋음
* 일반적으로 `switch` 문에서는 `break` 문을 사용하여 `case` 블록을 종료하는 것이 권장됨

## "Fall through"를 의도적으로 이용한 예제

* "Fall through"를 의도적으로 이용한 예제 중 하나는 여러 `case` 블록에서 공통된 동작을 수행해야 할 때임
* 아래 예제는 사용자가 입력한 월(Month)에 따라 해당 월의 계절을 출력하는 프로그램임
* 여러 월이 같은 계절을 공유하므로 "Fall through"를 사용하여 코드의 중복을 줄일 수 있음

```javascript
let month = 5;
let season;

switch (month) {
  case 12:
  case 1:
  case 2:
    season = '겨울';
    break;
  case 3:
  case 4:
  case 5:
    season = '봄';
    break;
  case 6:
  case 7:
  case 8:
    season = '여름';
    break;
  case 9:
  case 10:
  case 11:
    season = '가을';
    break;
  default:
    season = '올바르지 않은 월';
}

console.log(`이번 달은 ${season}입니다.`);
```

* 위 예제에서, 여러 월이 같은 계절을 공유하므로 `case` 블록에서 "Fall through"를 사용하여 같은 동작을 공유함
* 예를 들어, 12월, 1월 및 2월은 모두 '겨울' 계절로 처리되며, 3월, 4월 및 5월은 '봄'으로 처리됨

* "Fall through"를 의도적으로 사용하여 코드를 간결하게 만들 수 있지만, 주석이나 문서화를 통해 다른 개발자가 코드의 동작을 이해할 수 있도록 하는 것이 중요함