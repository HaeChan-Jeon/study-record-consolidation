# 자바스크립트의 첫 번째 버전의 버그

***

```javascript
typeof null     // -> "object"
```

* `typeof`` 연산자로 null 값은 연산해 보면 `null`이 아닌 `object`를 반환한다는 데 주의해야 한다.
* 이것은 자바스크립트의 첫 번째 버전의 버그다.
* 하지만 기존 코드에 영향을 줄 수 있기 때문에 아직까지 수정되지 못 하고 있다.
* 따라서, 값이 `null` 타입인지 확인할 때는 `typeof` 연산자를 사용하지 말고 일치 연산자 `===`fmf tkdydgkwk.

```javascript
var foo = null;

typeof foo === null;    // -> false
foo === null;           // -> true
```