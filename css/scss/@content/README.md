# @content

* `SCSS (Sassy CSS)`의 `@content` 지시어는 Mixins 내에서 커스텀 콘텐츠를 삽입할 수 있는 기능을 제공
* `@content`를 사용하면 `Mixin`에 블록 내용을 전달하고, `Mixin` 내에서 해당 내용을 적절한 위치에 배치할 수 있음

***

## @content 사용 예시

* Mixin 정의와 @content 사용:
    * `alert`라는 이름의 `Mixin`이 정의되며, 이 `Mixin`은 배경색($bgColor), 테두리 색상($borderColor)을 매개변수로 받음
    * `@content` 지시어를 사용하여 `Mixin` 사용 시 추가적인 `CSS` 스타일을 삽입할 수 있는 공간을 제공함

```SCSS
@mixin alert($bgColor, $borderColor) {
    background-color: $bgColor;
    margin: 10px;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px dashed $borderColor;
    @content;
}
```

* Mixin 사용과 콘텐츠 추가:
    * `.success`, `.error`, `.warning` 클래스 각각에서 `@include alert`를 사용하여 `alert Mixin`을 적용
    * 각 클래스에 대해 `Mixin`의 매개변수를 다르게 설정하고, `@content`를 통해 추가적인 스타일(글꼴 크기, 텍스트 장식, 텍스트 변형)을 정의

```SCSS
.success {
    @include alert(green, blue) {
        font-size: 12px;
    }
}

.error {
    @include alert(tomato, white) {
        text-decoration: underline;
    }
}

.warning {
    @include alert(yellow, black) {
        text-transform: uppercase;
    }
}
```

* `.success`, `.error`, `.warning` 클래스들은 `alert Mixin`의 기본 스타일(배경색, 여백, 패딩, 테두리 반경, 테두리 스타일)을 상속받음
* 각 클래스는 고유의 추가 스타일을 가짐(예: `.success`는 `font-size: 12px`를 적용).

***

<p align="center">
<img width="960" alt="image" src="https://github.com/HaeChan-Jeon/study-record-consolidation/assets/146603024/7a8f8c22-a382-40f7-b107-b5eac2e11320">
</p>

***
