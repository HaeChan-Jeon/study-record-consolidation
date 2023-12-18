# clone-timothy-snyder
 
***

![image](https://github.com/HaeChan-Jeon/clone-timothy-snyder/assets/146603024/63505220-b878-49e1-a7cd-562050b1c6bb)

***

## index.html

* 기본 구조:
  * `DOCTYPE html`로 시작하여 HTML5 문서임을 선언하며, `html` 태그는 문서의 언어가 영어임을 명시(`lang="en"`)

* `head` 섹션:
  * `meta` 태그: 문자 인코딩(`UTF-8`)과 뷰포트 설정을 포함하며, 뷰포트 설정은 반응형 디자인에 필수적으로, 기기의 화면 폭에 따라 웹 페이지의 크기를 조정
  * `link` 태그: 외부 CSS 파일(`/styles/style.scss`)을 연결
  * `title` 태그: 웹 페이지의 제목을 "clone Timothy Snyder"로 설정
 
```HTML
  <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/styles/style.scss">
  <title>clone Timothy Snyder</title>
</head>
```

* `body` 섹션:
  * `div` 태그(`class="phone"`): 페이지의 주요 내용을 포함
  * `header` 태그 내의 `ul` 태그: 다양한 카테고리를 나열하는 탭 형태의 목록을 제공하며, 여기서 `class` 속성을 통해 스타일을 적용
  * `div` 태그(`class="cards"`): 여러 카드 형태의 요소들을 포함하며, 각 카드는 제목과 정보(가격, 기간 등)를 담고 있음

```HTML
<body>
  <div class="phone">
    <header class="header">
      <ul class="header__list">
        <li class="header__list-item header__list-item--inverted">ALL</li>
        <li class="header__list-item">Advertisting</li>
        <li class="header__list-item">Dev & Research</li>
        <li class="header__list-item">Goal</li>
        <li class="header__list-item">iOS Development</li>
      </ul>
    </header>
    <div class="cards">
      <div class="cards__card">
        <h2 class="card__title">The Masking of Modern Art</h2>
        <div class="card__footer">
          <span class="price">Free</span>
          <span class="lenght">2</span>
        </div>
      </div>
      <div class="cards__card">
        <h2 class="card__title">Mobile Interfaces Advanced</h2>
        <div class="card__footer">
          <span class="price">Free</span>
          <span class="lenght">2</span>
        </div>
      </div>
      <div class="cards__card">
        <h2 class="card__title">Graphic Design</h2>
        <div class="card__footer">
          <span class="price">$199/month</span>
          <span class="lenght">9 months</span>
        </div>
      </div>
      <div class="cards__card">
        <h2 class="card__title">Web Design Junior</h2>
        <div class="card__footer">
          <span class="price">Free</span>
          <span class="lenght">3</span>
        </div>
      </div>
      <div class="cards__card">
        <h2 class="card__title">Inculsive Web Design</h2>
        <div class="card__footer">
          <span class="price">$99/mon</span>
          <span class="lenght">3</span>
        </div>
      </div>
      <div class="cards__card">
        <h2 class="card__title">Machine Learning</h2>
        <div class="card__footer">
          <span class="price">$199/month</span>
          <span class="lenght">9 months</span>
        </div>
      </div>
    </div>
  </div>
</body>
```

***

## style.scss

* 기본 스타일 설정:
  * `@import`를 사용하여 `reset.scss` 파일을 불러오며, 이는 기본 브라우저 스타일을 초기화하는 역할을 수행

```SCSS
@import url(./reset.scss);
```

* `body` 스타일링:
  * 배경 색상 설정, flexbox를 이용한 중앙 정렬, 높이를 전체 뷰포트 높이(`100vh`)로 설정

```SCSS
body {
    background-color: #dce6d1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

* `.phone` 클래스:
  * 휴대폰 형태를 시각화하기 위한 스타일. 검은색 배경, 모서리 둥근 사각형, 특정 크기와 패딩을 적용

```SCSS
.phone {
    background-color: black;
    border-radius: 50px;
    height: 95%;
    width: 420px;
    padding: 50px 20px;
    box-sizing: border-box;
}
```

* `.header`와 하위 요소:
  * 수평 스크롤 가능한 탭 목록을 스타일링함. 각 탭은 흰색 테두리와 둥근 모서리를 가지며, 선택된 탭은 배경과 글씨 색상이 반전됨

```SCSS
.header {
    overflow-x: scroll;
    .header__list {
        display: flex;
        gap: 10px;
        color: white;
        width: max-content;
        .header__list-item {
            border: 1px solid rgba($color: #fff, $alpha: 0.8);
            padding: 10px;
            border-radius: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .header__list-item--inverted {
            background-color: white;
            color: black;
        }
    }
}
```

* `.cards`와 하위 요소:
  * 카드 형태의 요소들을 격자(grid) 형태로 정렬함. 각 카드는 흰색 배경, 둥근 모서리, 패딩을 가지며, 내용에 따라 다양한 배경 색상을 적용
  * 각 카드는 제목과 정보(가격, 기간 등) 부분으로 구성되며, 이들의 스타일을 정의
 
```SCSS
.cards {
    margin: 20px 0px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    .cards__card {
        background-color: white;
        padding: 10px;
        border-radius: 15px;
        display: flex;
        gap: 40px;
        flex-direction: column;
        justify-content: space-between;
        .card__title {
            font-size: 28px;
        }
        .card__footer {
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
                padding: 5px 10px;
                border-radius: 20px;
                border: 1px solid black;
            }
            .price {
                background-color: rgb(255, 221, 44);
            }
            .lenght {
                background-color: white;
            }
        }
        &:first-child {
            background-color: #292d33;
            border: 1px solid white;
            .card__title {
                color: white;
            }
        }
        &:nth-child(2) {
            background-color: #f5f4ef;
        }
        &:nth-child(3) {
            background-color: #f8fcb5;
        }
        &:nth-child(4) {
            background-color: #b19ff6;
        }
        &:nth-child(5) {
            background-color: #fed3d3;
        }
        &:nth-child(6) {
            background-color: #d0fedf;
        }
        &:nth-child(3n) {
            grid-column: span 2;
        }
    }
}
```

***
