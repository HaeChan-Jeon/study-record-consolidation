# clone-hellouiux
 
***

![image](https://github.com/HaeChan-Jeon/study-record-consolidation/assets/146603024/6576c7a8-2017-4bd0-a8ee-e9491f3b0aa7)

***

## index.html

* 이 HTML 문서는 Clone Hellouiux 웹사이트의 메인 페이지를 위한 기본적인 구조를 제공합니다.
* 그리드 시스템은 효과적인 레이아웃 관리를 가능하게 하며, 다양한 콘텐츠 요소들은 사용자에게 매력적인 시각적 경험을 제공합니다.

### HTML 구조
- `<!doctype html>`: HTML5 문서의 선언입니다.
- `<html lang="en">`: 문서의 주 언어가 영어임을 명시합니다.

```HTML
<!doctype html>
<html lang="en">
```

### `<head>` 섹션
- `<meta charset="UTF-8" />`: 문자 인코딩을 UTF-8로 설정합니다.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`: 반응형 웹 디자인을 위한 뷰포트 설정입니다.
- `<link rel="stylesheet" href="/styles/style.scss">`: SCSS 스타일시트를 링크합니다.
- `<title>Clone Hellouiux</title>`: 페이지의 제목을 설정합니다.

```HTML
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/styles/style.scss">
  <title>Clone Hellouiux</title>
</head>
```

### `<body>` 섹션
- `.wrapper`: 전체 내용을 감싸는 컨테이너입니다.
- `.grid`: 주요 레이아웃을 위한 그리드 시스템을 구현합니다.

```HTML
<body>
    <div class="wrapper">···</div>
</body>
```

#### `.grid__col`
- 첫 번째 열에는 헤더(`header`)와 이미지(`grid__img`) 요소가 포함됩니다.
- 헤더 부분에는 리뷰 점수, 레이블, 제목, 부제목이 포함됩니다.

```HTML
<div class="grid">
  <div class="grid__col">
    <haeder class="header">
      <div class="header__top">
        <span class="header__reviews">4.98</span>
        <span class="header__label">Best reviews</span>
      </div>
      <h1 class="header__title">Grid!</h1>
      <h3 class="header__subtitle">Css grid is awesome and we love it becuase we can make many things.</h3>
    </haeder>
    <div class="grid__img"></div>
    <div class="grid__img"></div>
  </div>
  ···
</div>
```

#### `.subgrid`
- 두 번째 열에는 더 작은 그리드(`subgrid`), 내비게이션(`nav`), 그리드 셀(`grid__cells`), 블로그 포스트(`blog-post`)가 포함됩니다.
- 내비게이션에는 메뉴 항목과 호출 행동(CTA) 버튼이 포함됩니다.
- `grid__cells`는 최근 협업 사례를 나열하고, 추가 사례를 볼 수 있는 CTA를 제공합니다.

```HTML
<div class="subgrid">
  <div class="grid__img"></div>
  <nav class="nav">
    <ul>
      <li class="nav__item">About</li>
      <li class="nav__item">Solutions</li>
      <li class="nav__item">Portfolio</li>
      <li class="nav__item">Blog</li>
    </ul>
    <span class="nav__cta">Hire Us</span>
  </nav>
  <div class="grid__cells">
    <div class="grid__cell">
      <span>Recent collabs</span>
    </div>
    <div class="grid__cell">
      <span>Recent collabs</span>
    </div>
    <span class="grid__cell-cta">More Cases</span>
  </div>
  <div class="grid__img"></div>
</div>
```

***

## style.scss

* 이 SCSS 파일은 복합 그리드 레이아웃을 통해 독특하고 현대적인 웹사이트 디자인을 구현합니다.
* 사용된 변수와 그리드 시스템은 스타일의 일관성을 유지하고, 다양한 레이아웃 옵션을 제공합니다.
* 이 스타일시트는 시각적으로 매력적이고 사용자 친화적인 웹 인터페이스를 만드는 데 중점을 두고 있습니다.

### SCSS 구조
- `@import url(./reset.scss);`: 기본 스타일을 초기화하는 SCSS 파일을 가져옵니다.
- `$gridGap`, `$cellRadius`: 그리드 간격과 셀 둥근 모서리 반경을 변수로 정의합니다.

```SCSS
@import url(./reset.scss);

$gridGap: 5px;
$cellRadius: 10px;
```

### `body` 스타일
- 전체 높이 설정, 배경색 지정, 플렉스 레이아웃 적용.

```SCSS
body {
    height: 100%;
    background-color: purple;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
```

### `.wrapper` 스타일
- 검은 배경, 높이, 최대 너비, 패딩, 박스 모델 설정.

```SCSS
.wrapper {
    background-color: black;
    height: 95%;
    max-width: 80%;
    padding: 40px;
    box-sizing: border-box;
    ···
}
```

### `.grid` 스타일
- 그리드 레이아웃 정의, 열 레이아웃, 높이, 간격 설정.

```SCSS
.grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    height: 100%;
    gap: $gridGap;
    ···
}
```

### `.grid__col` 스타일
- 첫 번째 열(`:first-child`): 2개의 열과 3개의 행으로 구성된 그리드. `.header` 스타일에는 배경색, 패딩, 그리드 레이아웃 등이 적용됩니다.
- 두 번째 열(`:last-child`): 하나의 열, 그리드 구조, 간격 설정. `.subgrid`와 `.blog-post` 요소 포함.

```SCSS
.grid__col {
    gap: $gridGap;
    background-color: black;
    &:first-child {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1.8fr 1fr;
        .header {
            border-radius: 15px;
            background-color: white;
            grid-column: span 2;
            border-radius: $cellRadius;
            padding: 40px;
            display: grid;
            grid-template-rows: 1fr 3fr 1fr;
            .header__top {
                display: flex;
                justify-content: flex-end;
                gap: 20px;
                align-items: flex-start;
                .header__reviews {
                    font-size: 18px;
                    font-weight: 400;
                }
                .header__label {
                    border-radius: $cellRadius;
                    background-color: #ffc830;
                    text-transform: 600;
                    font-weight: 600;
                    font-size: 12px;
                    padding: 5px 10px;
                }
            }
            .header__title {
                font-size: 98px;
                justify-self: center;
                align-self: center;
            }
            .header__subtitle {
                font-size: 44px;
                font-weight: 500;
                border-top: 2px solid black;
                padding-top: 10px;
            }
        }
    }
    &:last-child {
        display: grid;
        gap: $gridGap;
        grid-template-columns: 1fr;
        grid-template-rows: 1.8fr 1fr;
        ···
}
```

### `.subgrid` 스타일
- 그리드 레이아웃, 열과 행 배치, 간격 설정.
- `.nav`: 텍스트 스타일, 패딩, 대문자 변환.
- `.grid__cells`: 그리드 레이아웃, 행 배치, 셀 스타일.

```SCSS
.subgrid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1.3fr 1fr;
    gap: $gridGap;
    .nav {
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 30px;
        text-transform: uppercase;
        .nav__cta {
            font-size: 18px;
        }
        ul {
            display: flex;
            flex-direction: column;
            gap: 30px;
            font-size: 12px;
        }
    }
    .grid__cells {
        gap: $gridGap;
        display: grid;
        grid-template-rows: repeat(2, 1fr) 2fr;
        .grid__cell{
            border-radius: $cellRadius;
            font-size: 12px;
            text-transform: uppercase;
            padding: 20px;
            &:first-child {
                background-color: #ffc830;
            }
            &:nth-child(2) {
                background-color: white;
                transform: rotateZ(7deg);
                box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.8);
            }
        }
        .grid__cell-cta {
            color: white;
            text-transform: uppercase;
            font-size: 18px;
            padding-left: 20px;
            align-self: center;
        }
    }
}
```

### `.blog-post` 스타일
- 배경색, 둥근 모서리, 플렉스 레이아웃, 글자 크기 설정.

```SCSS
.blog-post {
    background-color: white;
    border-radius: $cellRadius;
    display: flex;
    align-items: flex-end;
    font-size: 14px;
    P {
        width: 80%;
        padding: 20px;
    }
}
```

### `.grid__img` 스타일
- 배경 이미지, 크기 조정, 둥근 모서리 스타일 적용.

```SCSS
.grid__img {
    background-image: url("https://source.unsplash.com/random");
    background-size: cover;
    border-radius: $cellRadius;
}
```

***
