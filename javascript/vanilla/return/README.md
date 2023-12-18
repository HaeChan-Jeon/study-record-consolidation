# return

* JavaScript에서 return 키워드는 함수에서 값을 반환하는 데 사용됩니다.
* 이 키워드는 함수의 실행을 종료하고, 선택적으로 값을 함수 호출 위치로 반환합니다.

***

## return 사용 예시

* 'console.log'를 사용한 예시
    * 이 코드에서 'calculateKrAge_log' 함수는 전달받은 'ageOfForeigner' 매개변수에 '2'를 더한 값을 콘솔에 직접 출력합니다.
    * 함수는 값을 반환하지 않고, 오직 출력만 수행합니다.
    * 따라서 이 함수의 결과는 콘솔에서만 확인할 수 있고, 다른 변수에 저장하거나 다른 함수에서 사용할 수 없습니다.

```javascript
const age = 25;

function calculateKrAge_log(ageOfForeigner) {
    console.log(ageOfForeigner + 2);
}

calculateKrAge_log(age);
```

* `return`을 사용한 예시
    * 이 코드에서 `calculateKrAge_return` 함수는 전달받은 `ageOfForeigner` 매개변수에 `2`를 더한 값을 반환합니다.
    * `return`을 사용함으로써, 함수는 계산된 값을 호출한 위치로 보냅니다.
    * 이를 통해 반환된 값`(krAge)`은 다른 변수에 저장되거나, 다른 함수에서 사용될 수 있습니다.
    * 여기서 `console.log(krAge)`는 저장된 값을 콘솔에 출력하는데 사용됩니다.

```javascript
const age = 25;

function calculateKrAge_return(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge_return(age);

console.log(krAge);
```

* `console.log` 사용: 함수 내에서 직접 결과를 출력하지만, 반환 값이 없어서 다른 곳에서 사용할 수 없습니다.
* `return` 사용: 함수가 값을 반환하여, 이를 다른 변수에 저장하거나 다른 연산에 사용할 수 있습니다.

***
