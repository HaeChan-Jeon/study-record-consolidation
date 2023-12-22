# clone-veuve-clicquot
 
***

<img src="https://github.com/HaeChan-Jeon/study-record-consolidation/assets/146603024/3150a9d2-b0a9-4bd5-a08d-2447c288bb73">

***

## style.scss

* 이 CSS 코드는 웹페이지의 레이아웃과 스타일을 정의하는데 사용됩니다. 주요 특징은 다음과 같습니다:

1. **전체 페이지 레이아웃 설정 (`body`)**:
   - `display: grid;`: 그리드 레이아웃을 사용합니다.
   - `height: 100vh;`와 `width: 100vw;`: 뷰포트의 높이와 너비를 100%로 설정합니다.
   - `grid-template-columns: 60fr 4fr 36fr;`: 3개의 그리드 열을 정의하며, 각각 비율로 설정됩니다 (60%, 4%, 36%).
   - `margin: 0px;`: 마진을 0으로 설정합니다.

```SCSS
body {
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 60fr 4fr 36fr;
    margin: 0px;
}
```

2. **첫 번째 섹션 스타일링 (`section:first-child`)**:
   - 배경색, 패딩, 글자색 등을 설정합니다.
   - `.main-section`: 여러 `div` 요소들을 그리드 레이아웃으로 구성하며, 테두리, 정렬 등을 설정합니다.
   - `.main-title`, `.main-information`, `.main-tag`: 각 요소의 세부 스타일을 설정합니다.
   - `.main-section:nth-child(3)`: 세 번째 메인 섹션의 색상과 테두리 스타일을 변경합니다.

```SCSS
.section:first-child {
    background-color: #FF7400;
    padding: 0px 7px 7px 7px;
    display: grid;
    grid-template-rows: 7px repeat(6, 1fr);
    color: #FF0C00;
    .main-section {
        border: 1px solid #FF0C00;
        display: grid;
        grid-template-columns: 4fr 71fr 25fr;
        .main-title {
            display: flex;
            justify-content: center;
            align-items: center;
            border-left: 1px solid #FF0C00;
            writing-mode: vertical-rl;
            transform: rotate(180deg);
        }
        .main-information {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-right: 1px solid #FF0400;
            font-size: 70px;
            font-weight: bold;
            padding-left: 10px;
        }
        .main-tag {
            display: grid;
            grid-template-rows: repeat(2, 1fr);
            font-size: 10px;
        }
        .main-tag__title, .main-tag__btn {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .main-tag__title {
            border-bottom: 1px solid #FF0400;
        }
        .main-tag__btn {
            display: flex;
            justify-self: center;
            align-self: center;
            height: 20px;
            width: 100px;
            border-radius: 10px;
            background-color: #FF0400;
            color: #FF7400;
        }
    }
    .main-section:nth-child(3) {
        &, & .main-title, & .main-information,
        & .main-tag__title {
        color: white;
        border-color: white;
        }
        & .main-tag__btn {
            background-color: white;
        }
    }
}
```

3. **두 번째 섹션 스타일링 (`section:nth-child(2)`)**:
   - `position: relative;`와 같은 위치 속성을 설정합니다.
   - `.section-line`: 그리드 레이아웃을 사용하여 세로 방향의 라인을 생성합니다.
   - `.line`: 각 라인의 배경색, 패딩, 글자 스타일을 설정합니다.

```SCSS
.section:nth-child(2) {
    position: relative;
    display: flex;
    & span {
        position: absolute;
        font-size: 35px;
        top: 48%;
        left: -7px;
    }
    .section-line {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        writing-mode: vertical-rl;
        width: 100%;
        .line {
            display: flex;
            align-items: center;
            font-weight: bold;
            &:first-child {
                background-color: #FF00FF;
                padding-top: 7px;
            }
            &:nth-child(2) {
                background-color: #1900FF;
                padding-bottom: 7px;
                transform: rotate(180deg);
            }
        }
    }
}
```

4. **세 번째 섹션 스타일링 (`section:nth-child(3)`)**:
   - 배경색, 글자 크기, 패딩 등을 설정합니다.
   - `.sub-header`: 플렉스박스 레이아웃을 사용하여 헤더 버튼을 배치합니다.
   - `.sub-section`: 그리드 레이아웃으로 하위 섹션들을 구성합니다.
   - `.sub-section-main` 및 `.sub-section-information`: 각 섹션의 내부 스타일을 설정합니다.

```SCSS
.section:nth-child(3) {
    background-color: #FF0400;
    font-weight: bold;
    display: grid;
    grid-template-rows: 9fr 91fr;
    padding: 0px 7px 0px 7px;
    font-size: 14px;
    .sub-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .header-btn {
            display: flex;
            align-items: center;
            gap: 5px;
            .circle {
                height: 14px;
                width: 14px;
                border-radius: 50%;
                border: 1px solid black;
            }
            &:nth-child(3) .circle {
                background-color: black;
            }
        }
    }
    .sub-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;
        .sub-section-main {
            display: grid;
            grid-template-rows: repeat(6, 1fr);
            .sub-section-information {
                display: flex;
                flex-direction: column;
                border-top: 1px solid black;
                .sub-section-text p {
                    font-size: 12px;
                    margin-top: 5px;
                }
            }
        }
    }
}
```

* 전반적으로 이 CSS 코드는 웹페이지에 다양한 레이아웃과 시각적 요소를 제공하며, 그리드와 플렉스박스 레이아웃을 효과적으로 활용하여 복잡한 구조를 생성합니다.

***
