# Nesting

* SCSS (Sassy CSS)의 Nesting(중첩)은 CSS의 구조화와 유지 관리를 향상시키는 강력한 기능 중 하나
* Nesting 기능은 CSS에서 자주 발생하는 반복을 줄이고, 코드의 가독성을 높이며, 스타일 시트의 구조를 더 명확하게 만듦

***

## Nesting의 필요성

* Nesting은 코드의 가독성과 구조화, 중복 감소, 명확한 스코핑, 유지보수 용이성, 효율적인 선택자 관리 등 측면에서 유용한 기능
  * `코드의 가독성과 구조화`: 부모 요소 내 자식 요소들에 대한 스타일을 부모 선택자 내부에서 직접 정의할 수 있어 HTML 구조를 CSS에서 쉽게 파악
  * `중복 감소`: 여러 클래스가 같은 부모 요소에 종속되어 있는 경우, Nesting을 사용하면 반복되는 부모 선택자를 여러번 작성할 필요가 없음
  * `명확한 스코핑`: 특정 부모 요소에 종속된 스타일을 명확하게 지정하여 전역 스타일과의 충돌을 방지하고, 스타일이 예쌍되로 적용되도록 도와줌
  * `유지보수 용이성`: 프로젝트의 규모가 커짐으로써 CSS 파일도 복잡해지기 쉬운 상황에서 관련 스타일을 한데 모아 관리하여 유지보수가 훨씬 수월해짐
  * `효율적인 선택자 관리`: 후손 선택자나 자식 선택자를 사용할 때, 각각의 선택자를 별도로 작성하는 대신, Nesting을 통해 간결하게 표현함

* 반면, 과도환 Nesting은 코드를 복잡하게 만들 수 있으므로 적절한 수준에서 사용하는 것이 좋음

* 아래 CSS 예제는  `ul` 요소와 그 자식 요소들을 스타일링하기 위해 작성됨
    * 이 코드의 주요 목적은 `ul` 요소 내의 `li` 항목들을 커스터마이즈하고, `li` 항목 안의 `a` 태그에 대한 스타일을 지정하는 것임

```SCSS
body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

ul {
    list-style-type: none;
    padding: 0px;
    display: flex;
    gap: 10px;
}

ul li {
    background-color: tomato;
    color: white;
    padding: 5px 10px;
    border-radius: 7px;
}

ul li:hover {
    opacity: 0.8;
}

ul li:hover a {
    color: gray;
}

ul li a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
}
```

* 기본적으로 부모 선택자를 참조하는 `&` 연산자를 사용하면 아래와 같이 간결하게 표현 가능
    * 가령 `.btn` 클래스 안에 `&:hover`를 사용하면, 이는 `.btn:hover`와 동일하게 작동함

```SCSS
body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

ul {
    list-style-type: none;
    padding: 0px;
    display: flex;
    gap: 10px;
    li {
        background-color: tomato;
        color: white;
        padding: 5px 10px;
        border-radius: 7px;
        &:hover {
            opacity: 0.8;
            a {
                color: gray;
            }
        }
        a {
            text-decoration: none;
            color: white;
            text-transform: uppercase;
        }
    }
}
```

* 더불어서, 아래 예제와 같이 부모 선택자를 참조하여 사용하는 것도 가능

```SCSS
// SCSS 사용
li {
    &:first-child {}
    &:last-child {}
    &.middle {}
}

// CSS 사용
// 위와 동일
li:first-child {}
li:last-child {}
li.middle {}
```

* `npm run build`를 통해 SCSS의 Nesing을 CSS로 변환한 결과

```CSS
body{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}ul{list-style-type:none;padding:0;display:flex;gap:10px}ul li{background-color:tomato;color:#fff;padding:5px 10px;border-radius:7px}ul li:hover{opacity:.8}ul li:hover a{color:gray}ul li a{text-decoration:none;color:#fff;text-transform:uppercase}
```

***
