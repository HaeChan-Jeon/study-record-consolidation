# @extend

* `SCSS (Sassy CSS)`의 `@extend` 지시문은 CSS에서 재사용 가능한 스타일을 만들기 위해 사용됨
* `@extend` 지시문은 한 선택자의 모든 스타일을 다른 선택자에게 상속하도록 허용하며, 중복 코드를 줄이고 유지보수를 용이하게 함

***

## @extend 사용 예시

* Placeholder 선택자 정의:
    * `%alert`는 CSS 클래스가 아닌 SCSS에서만 사용되는 특별한 placeholder 선택자이며, `%alert`에 정의된 스타일은 다른 클래스들이 이를 `@extend`할 때까지 실제 CSS에 포함되지 않음

```CSS
%alert {
    margin: 10px;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px dashed black;
}
```

* @extend를 이용한 스타일 상속:
    * `.success`, `.error`, `.warning` 클래스가 %alert의 스타일을 상속받음
    * 각각의 클래스들은 `%alert`에서 정의된 스타일(여백, 패딩, 테두리 반경, 테두리 스타일)을 상속받음
    * 또한 각 클래스는 고유의 `background-color` 속성을 가지고 있어, 상속받은 스타일에 추가적인 스타일을 적용함

```CSS
.success {
    @extend %alert;
    background-color: green;
}

.error {
    @extend %alert;
    background-color: tomato;
}

.warning {
    @extend %alert;
    background-color: yellow;
}
```

* `.success`, `.error`, `.warning` 클래스들은 모두 `%alert`로부터 기본 스타일을 상속받음
* 각 클래스는 고유의 배경 색상을 가짐으로써, 기본 스타일에 변형을 줌

* `npm run build`를 통해 SCSS의 `%alert`을 CSS로 변환한 결과

```CSS
body{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;padding:60px}.warning,.error,.success{margin:10px;padding:10px 20px;border-radius:10px;border:1px dashed black}.success{background-color:green}.error{background-color:tomato}.warning{background-color:#ff0}
```

***