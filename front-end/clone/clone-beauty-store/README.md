# clone-beauty-store
 
***

![image](https://github.com/HaeChan-Jeon/study-record-consolidation/assets/146603024/1b1b3912-b477-47a6-8b52-985c6770b875)

***

## index.html

* 이 문서는 Clone Beauty Store 웹 페이지의 HTML 구조에 대해 설명합니다.
* 이 페이지는 뷰티 상품을 판매하는 온라인 스토어의 인터페이스를 제공합니다.

### HTML 구조
- `<!doctype html>`: HTML5 문서를 선언합니다.
- `<html lang="en">`: 문서의 주 언어가 영어임을 명시합니다.

```HTML
<!doctype html>
<html lang="en">
```

### `<head>` 섹션
- `<meta charset="UTF-8" />`: 문자 인코딩을 UTF-8로 설정합니다.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`: 반응형 웹 디자인을 위한 뷰포트 설정입니다.
- `<link rel="stylesheet" href="/styles/style.scss">`: SCSS 스타일시트를 링크합니다.
- `<title>Clone Beauty Store</title>`: 페이지의 제목을 설정합니다.

```HTML
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/styles/style.scss">
  <title>Clone Beauty Store</title>
</head>
```

### `<body>` 섹션

#### `<header>` 섹션
- 네비게이션 바와 브레드크럼(breadcrumbs)으로 구성됩니다.
- `<nav>` 태그 안에는 상품 카테고리를 나열하는 `<ul>` 리스트가 있습니다.
- 브레드크럼은 사용자의 위치를 나타내는 네비게이션 헬프입니다.

```HTML
  <header class="header">
    <nav class="header__nav">
      <ul>
        <li class="header__tab">💕</li>
        <li class="header__tab">Best Sellers</li>
        <li class="header__tab">Hand Soap</li>
        <li class="header__tab">Shampoo</li>
        <li class="header__tab">Body Lotion</li>
        <li class="header__tab">Grid</li>
        <li class="header__tab">Brush</li>
        <li class="header__tab">Soap</li>
        <li class="header__tab">Towel</li>
        <li class="header__tab">🤷‍♂️</li>
        <li class="header__tab">🛒</li>
      </ul>
    </nav>
    <div class="header__breadcrumbs">
      <span class="header__crumb">Home /</span>
      <span class="header__crumb">Catalog /</span>
      <span class="header__crumb">Shop /</span>
      <span class="header__crumb">Shampoo</span>
    </div>
  </header>
```

#### `<section class="product">`
- 제품 이미지(`product__img`)와 제품 정보(`product__info`)를 포함합니다.
- 제품 정보 섹션은 제품 카테고리, 제목, 가격, 수량 조절 버튼을 포함합니다.
- 제품 설명(`product__description`)과 자주 묻는 질문(`product__faq`) 섹션도 포함되어 있습니다.

```HTML
  <section class="product">
    <div class="product__img">
    </div>
    <div class="product__info">
      <div class="product__header">
        <span class="product__category">Hand Soap</span>
        <h1 class="product__title">Shampoo for Hair</h1>
        <div class="product__add-to-cart">
          <div class="product__qty">
            <span class="product__minus">-</span>
            <span class="product__total-qty">1</span>
            <span class="product__plus">+</span>
          </div>
          <span class="product__price">$11,89</span>
        </div>
      </div>
      <div class="product__footer">
        <div class="product__description">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias repudiandae
            excepturi autem laborum quidem, officiis est praesentium labore asperiores ad a facilis itaque atque magnam,
            modi ut, minus molestiae error.
          </p>
        </div>
        <div class="product__faq">
          <div class="product__question">
            How to use <span>+</span>
          </div>
          <div class="product__question">
            Ingredients <span>+</span>
          </div>
          <div class="product__question">
            Shipping <span>+</span>
          </div>
        </div>
      </div>
    </div>
  </section>
```

***

## style.scss

* 이 SCSS 파일은 Clone Beauty Store 웹사이트의 디자인과 레이아웃을 정의합니다.
* 사용된 변수들과 그리드 레이아웃은 효율적인 스타일 관리와 반응형 디자인을 가능하게 합니다.
* 제품 페이지의 시각적 요소는 사용자 경험을 향상시키는 데 중점을 두고 디자인되었습니다.

### SCSS 구조
- `@import url(./reset.scss);`: 기본 브라우저 스타일을 초기화하는 SCSS 파일을 가져옵니다.
- `$borderColor`, `$borderWidth`: 공통으로 사용되는 테두리 색상과 너비를 변수로 정의합니다.

```SCSS
@import url(./reset.scss);

$borderColor: rgba(0, 0, 0, 0.4);
$borderWidth: 2px;
```

### `body` 스타일
- 전체 높이를 화면에 맞추고, 그리드 레이아웃을 사용합니다.
- 두 개의 행(`grid-template-rows`)으로 구성됩니다.

```SCSS
body {
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 10fr;
}
```

### `.header` 스타일
- `.header__nav` 내부의 `ul`은 그리드 레이아웃을 사용합니다.
- `.header__tab`에는 배경색, 패딩, 글자 정렬, 폰트 속성이 적용됩니다.
- `.header__breadcrumbs`에는 테두리와 패딩, 폰트 사이즈가 적용됩니다.

```SCSS
.header {
    .header__nav {
        ul {
            display: grid;
            grid-template-columns: repeat(5, 1fr) 1.5fr repeat(5, 1fr);
            background-color: $borderColor;
            gap: $borderWidth;
            .header__tab {
                background-color: white;
                padding: 30px 0px;
                text-align: center;
                font-weight: 300;
                font-size: 14px;
                &:nth-child(6) {
                    text-transform: uppercase;
                    font-weight: bold;
                    font-size: 22px;
                }
            }
        }
    }
    .header__breadcrumbs {
        border-bottom: $borderWidth solid $borderColor;
        border-top: $borderWidth solid $borderColor;
        padding: 10px 0px;
        padding-left: 50px;
        font-size: 12px;
        .header__crumb {
            font-weight: 500;
            &:last-child {
                opacity: 0.5;
            }
        }
    }
}
```

### `.product` 스타일
- 그리드 레이아웃을 사용하여 제품 이미지와 정보를 배치합니다.
- `.product__img`는 배경 이미지와 사이즈 조정이 설정되어 있습니다.
- `.product__info`는 다시 그리드 레이아웃을 사용하여 내부 요소를 정렬합니다.
- `.product__header`와 `.product__footer`에는 배경색, 레이아웃, 텍스트 스타일이 적용됩니다.

```SCSS
.product {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    gap: $borderWidth;
    background-color: $borderColor;
    .product__img {
        background-image: url("https://source.unsplash.com/random");
        background-size: cover;
    }
    .product__info {
        display: grid;
        grid-template-rows: 1.5fr 1fr;
        gap: $borderWidth;
        .product__header {
            background-color: white;
            display: flex;
            gap: 20px;
            flex-direction: column;
            justify-content: center;
            padding: 0px 50px;
            font-weight: 500;
            text-transform: uppercase;
            .product__category {
                font-size: 22px;
            }
            .product__title { 
                font-size: 44px;
            }
            .product__add-to-cart {
                margin-top: 20px;
                display: flex;
                gap: 60px;
                .product__qty {
                    font-size: 36px;
                    display: flex;
                    gap: 10px;
                    .product__minus {
                        opacity: 0.5;
                    }
                }
                .product__price {
                    font-size: 36px;
                }
            }
        }
        .product__footer {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: $borderWidth;
            & > div {
                background-color: white;
            }
            .product__description p {
                width: 70%;
                font-size: 14px;
                margin: 0 auto;
                padding: 25px 0px;
            }
            .product__faq {
                padding: 50px;
                display: flex;
                flex-direction: column;
                gap: 20px;
                .product__question {
                    border-bottom: $borderWidth solid $borderColor;
                    display: flex;
                    justify-content: space-between;
                    text-transform: uppercase;
                    font-weight: 600;
                    padding-bottom: 10px;
                }
            }
        }
    }
}
```

***
