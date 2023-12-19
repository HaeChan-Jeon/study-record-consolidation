# clone-curry-cafe

***

![image](https://github.com/HaeChan-Jeon/study-record-consolidation/assets/146603024/acde86b2-73d9-4cb0-8ada-479d03b4a475)

***

## index.html

* 이 코드는 웹페이지의 레이아웃을 정의하고, CSS 스타일시트를 통해 시각적 스타일을 적용할 준비를 합니다.

### 기본 설정

- `<!doctype html>`: 이 줄은 문서가 HTML5를 사용함을 명시합니다.
- `<html lang="en">`: HTML 문서의 시작을 나타내며, `lang="en"`은 문서가 영어로 작성되었음을 의미합니다.

```HTML
<!doctype html>
<html lang="en">
```

### `<head>` 태그

- `<meta charset="UTF-8" />`: 문자 인코딩을 UTF-8로 설정합니다.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`: 반응형 웹 디자인을 위해 뷰포트를 설정합니다.
- `<link rel="stylesheet" href="/styles/style.scss">`: SCSS 스타일시트를 연결합니다.
- `<title>clone Curry Cafe</title>`: 웹페이지의 제목을 설정합니다.

```HTML
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/styles/style.scss">
  <title>clone Curry Cafe</title>
</head>
```

### `<body>` 태그

- `<div class="section">`: 웹페이지의 주요 섹션을 나타냅니다.
- 각 `div` 요소는 다양한 클래스 이름을 가지고 있어, 이들은 스타일시트에서 특정 스타일을 적용받을 것입니다.
- "Lorem ipsum" 텍스트는 내용을 채우기 위한 임시 텍스트로 사용됩니다.
- `<span>` 태그는 각각의 섹션에 특정 텍스트나 내용을 포함합니다.
- `<div class="sns__icon">` 부분에는 이모티콘을 포함하여 SNS 아이콘을 나타낼 수 있습니다.
- 페이지 맨 아래에는 `<span class="title">`과 `<div class="search-icon">`이 있어, 각각 타이틀과 검색 아이콘을 표시합니다.

```HTML
<body>
  <div class="section">
    <div class="header-top">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusamus et voluptatum
        explicabo magnam aliquid ullam quidem deserunt, voluptatem inventore commodi odio praesentium provident,
        reprehenderit quisquam adipisci vero minima sed!</p>
    </div>
    <div class="main-image">
      <div class="header-left">
        <div class="header-left__text">
          <span>location + menu + shop</span>
        </div>
        <div class="header-left__text">
          <span>spicy newsletter</span>
        </div>
        <div class="sns__icon">
          <div class="div">😂</div>
          <div class="div">🤣</div>
        </div>
      </div>
      <div class="image-center">
        <div class="image-center-item"></div>
        <div class="image-center-item"></div>
      </div>
      <div class="header-right">
        <div class="header-right__text">
          <span>*</span>
          <span>order t - a</span>
          <span>*</span>
        </div>
        <div class="header-right__text">
          <span>+</span>
          <span>reservations</span>
          <span>+</span>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusamus et voluptatum explicabo magnam
        aliquid ullam quidem deserunt, voluptatem inventore commodi odio praesentium provident, reprehenderit quisquam
        adipisci vero minima sed!</p>
    </div>
  </div>
  <span class="title">curry <br> cafe</span>
  <div class="search-icon">🎹</div>
</body>
```

***

## style.scss

* 이 코드는 웹페이지의 시각적 요소를 세세하게 제어하여 독특한 레이아웃과 스타일을 제공합니다.
* CSS 속성들은 페이지의 다양한 부분에 대해 세밀한 스타일링을 가능하게 합니다.

### 기본 설정

- `@import url(./reset.scss);`: 다른 SCSS 파일을 임포트합니다. 이 경우 'reset.scss' 파일을 임포트해 기본 브라우저 스타일을 초기화합니다.

```SCSS
@import url(./reset.scss);
```

### `body`:

- 배경색을 연노랑(#E9EA53)으로 설정합니다.
- `display: flex`를 사용해 자식 요소들을 플렉스 박스로 정렬합니다.
- `justify-content: center`와 `align-items: center`를 사용해 자식 요소들을 중앙에 정렬합니다.
- 높이와 너비를 각각 뷰포트의 100%로 설정해 전체 화면을 채웁니다.

```SCSS
body {
    background-color: #E9EA53;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: relative;
}
```

### `.title`:
- 절대 위치를 사용해 페이지에 고정합니다.
- 텍스트 스타일을 대문자, 100px 글꼴 크기, 흰색, 굵은 글꼴로 설정합니다.

```SCSS
.title {
    position: absolute;
    font-size: 100px;
    text-transform: uppercase;
    color: white;
    font-weight: 900;
    text-align: center;
}
```

### `.search-icon`:

- 오른쪽 하단에 절대 위치를 사용해 배치합니다.
- 배경색을 주황색(#EA743C)으로 설정하고, 크기는 40px로 설정합니다.
- 테두리 반경과 그림자를 추가해 시각적 효과를 줍니다.

```SCSS
.search-icon {
    position: absolute;
    right: 3%;
    bottom: 3%;
    background-color: #EA743C;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 5px 5px 10px gray;
}
```

### `.section`:

- 그리드 레이아웃을 사용해 섹션을 구성합니다.
- 배경색을 주황색(#EA743C)으로 설정하고, 내부 여백과 테두리를 조정합니다.
- `.header-top`과 `.header-bottom`은 흰색 배경에 주황색 텍스트를 가지며, 텍스트는 굵게 표시됩니다.

```SCSS
.section {
    display: grid;
    grid-template-rows: 1fr 26fr 1fr;
    background-color: #EA743C;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    gap: 3px;
    border: 3px solid #EA743C;
    text-transform: uppercase;
    font-style: oblique;
    font-size: 20px;
    .header-top {
        background-color: white;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            color: #EA743C;
            font-weight: bold;
            font-style: oblique;
            white-space: nowrap;
        }
    }
    .header-bottom {
        background-color: white;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            color: #EA743C;
            font-weight: bold;
            white-space: nowrap;
        }
    }
}
```

### `.main-image`:

- 그리드 레이아웃을 사용해 중앙 이미지 영역을 구성합니다.
- `.image-center-item`에는 외부 이미지 URL을 배경으로 사용합니다.

```SCSS
.main-image {
    display: grid;
    grid-template-columns: 1fr 31fr 1fr;
    gap: 3px;
    .image-center {
        background-color: wheat;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        .image-center-item {
            background-image: url("https://source.unsplash.com/random");
            background-size: cover;
        }
    }
}
```

### `.header-left`와 `.header-right`:

- 각각 흰색과 주황색 배경을 가지며 그리드 레이아웃을 사용합니다.
- 텍스트는 세로 방향으로 정렬되고, 각 텍스트 영역의 배경색과 글꼴 색상이 지정됩니다.

```SCSS
.header-left {
    background-color: white;
    width: 100%;
    height: 100%;
    display: grid;
    gap: 3px;
    grid-template-rows: 6fr 4fr 1fr;
    font-weight: bold;
    span, div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header-left__text:first-child {
        background-color: #EA743C;
        color: white;
        writing-mode: vertical-rl;
        text-orientation: upright;
        letter-spacing: 5px;
    }
    .header-left__text:nth-child(2) {
        background-color: white;
        color: #EA743C;
        writing-mode: vertical-rl;
        letter-spacing: 5px;
        span {
            display: inline-block;
            transform: rotate(180deg);
        }
    }
    .sns__icon {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
}

.header-right {
    background-color: #EA743C;
    width: 100%;
    height: 100%;
    display: grid;
    gap: 3px;
    grid-template-rows: repeat(2, 1fr);
    font-weight: bold;
    span, div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header-right__text {
        background-color: #46AB4F;
        color: white;
        writing-mode: vertical-rl;
        text-orientation: upright;
        letter-spacing: 5px;
        display: grid;
        grid-template-columns: 1fr 5fr 1fr;
    }
}
```

***
