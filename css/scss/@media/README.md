# @media

* `SCSS (Sassy CSS)`에서 `@media` 지시어는 `CSS`의 미디어 쿼리를 사용하여 다양한 화면 크기나 미디어 유형에 따라 다른 스타일을 적용할 수 있도록 함
* `@media`는 반응형 웹 디자인을 구현하는 데 필수적인 기능

***

## 기본 개념

* 미디어 쿼리:
    * 미디어 쿼리는 특정 조건(예: 화면 너비, 해상도)이 충족될 때 적용되는 `CSS` 규칙을 정의
    * `@media` 지시어를 사용하여 이러한 조건을 설정할 수 있음

* 반응형 디자인:
    * 다양한 장치(모바일, 태블릿, 데스크탑)에서 웹사이트가 적절하게 보이도록 만드는 디자인 방식

* `SCSS`에서 `@media` 지시어는 `CSS`와 동일한 방식으로 작동하지만, `SCSS`의 중첩 규칙과 변수 사용 등의 장점을 활용할 수 있음

## SCSS에서의 사용:

*  아래 코드는 `SCSS`의 변수, `Mixins`, 미디어 쿼리를 사용하여 반응형 웹 디자인을 구현하는 방법을 보여줌
* 이러한 접근 방식은 다양한 화면 크기에 따라 다른 스타일을 적용하는 데 유용

* 변수 정의:
    * 여기서 `$breakpoint-sm`, `$breakpoint-md`, `$breakpoint-lg`, `$breakpoint-xl`는 각각 다른 화면 크기를 나타내는 `SCSS` 변수임
    * 이 변수들은 반응형 디자인에서 미디어 쿼리의 분기점(breakpoints)으로 사용됨

```SCSS
$breakpoint-sm: 480px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1200px;
```

* Mixins 정의:
    * `smallDevice`, `mediumDevice`, `largeDevice`, `xlDevice`라는 이름의 `Mixins`가 정의됨
    * 각 `Mixin`은 미디어 쿼리를 포함하고 있으며, `@content` 지시어를 사용하여 추가 스타일을 삽입할 수 있는 공간을 제공
    * 이 `Mixins`는 각각의 화면 크기에 맞는 미디어 쿼리를 적용

```SCSS
@mixin smallDevice {
    @media screen and (min-width: $breakpoint-sm) {
        @content;
    }
}

@mixin mediumDevice {
    @media screen and (min-width: $breakpoint-md) {
        @content;
    }
}

@mixin largeDevice {
    @media screen and (min-width: $breakpoint-lg) {
        @content;
    }
}

@mixin xlDevice {
    @media screen and (min-width: $breakpoint-xl) {
        @content;
    }
}
```

* Mixins 사용:
    * `body` 선택자에 대해 각 `Mixin`을 사용하여 다른 배경색을 지정
    * 각 `Mixin`에는 다른 미디어 쿼리 범위에 따른 스타일이 정의되어 있으며, 화면 크기에 따라 `body`의 배경색이 변경됨

```SCSS
body {

    @include smallDevice {
    background-color: blue;
    }

    @include mediumDevice {
    background-color: red;
    }

    @include largeDevice {
    background-color: purple;
    }

    @include xlDevice {
    background-color: pink;
    }
}
```

* 화면 크기에 따라 body 요소의 배경색이 다음과 같이 변경됨
    * 480px 이상일 때: 파란색 `(smallDevice)`
    * 768px 이상일 때: 빨간색 `(mediumDevice)`
    * 1024px 이상일 때: 보라색 `(largeDevice)`
    * 1200px 이상일 때: 분홍색 `(xlDevice)`

***

<p align="center">
  <img width="375" alt="image" src="https://github.com/HaeChan-Jeon/study-record-consolidation/assets/146603024/ba17cb0a-da0d-4a4a-bcbb-12f141ec180e">
</p>

<p align="center">
  <img width="585" alt="image" src="https://github.com/HaeChan-Jeon/study-record-consolidation/assets/146603024/df759475-757f-487f-a6f2-a1eb485592af">
</p>

<p align="center">
  <img width="788" alt="image" src="https://github.com/HaeChan-Jeon/study-record-consolidation/assets/146603024/003c96bf-1fd0-44a2-b114-da6032599e58">
</p>

<p align="center">
  <img width="960" alt="image" src="https://github.com/HaeChan-Jeon/study-record-consolidation/assets/146603024/fc2667c3-546b-4d49-a5a8-f62977a8f4ce">
</p>

***
