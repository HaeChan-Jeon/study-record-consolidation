# clone-high-end-fashion-store
 
***

![image](https://github.com/HaeChan-Jeon/study-record-consolidation/assets/146603024/aa82de19-e9f7-4d27-ac46-8c782c99d589)

***

## index.html

* 이 HTML 파일은 고급 패션 상품을 전시하고 사용자가 선택한 아이템의 총액을 계산하는 간단한 웹 페이지를 만드는 데 사용됩니다.
* 상품 정보, 사양, 이미지 등이 포함되어 사용자에게 유용한 정보를 제공합니다.

### `<head>` 태그

- `<!doctype html>`: 문서 유형을 HTML5로 선언합니다.
- `<html lang="en">`: 문서의 주 언어가 영어임을 명시합니다.
- `<meta charset="UTF-8" />`: 문자 인코딩을 UTF-8로 설정합니다.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`: 반응형 웹 디자인을 위한 뷰포트 설정입니다.
- `<link rel="stylesheet" href="/styles/style.scss">`: 외부 스타일시트(여기서는 SCSS 파일) 링크를 포함합니다.
- `<title>`: 웹사이트의 제목을 "Clone High-End Fashion Store"로 지정합니다.

```HTML
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/styles/style.scss">
  <title>Clone High-End Fashion Store</title>
</head>
```

### `<body>` 태그

#### `<div class="phone">`
웹사이트의 주요 컨텐츠를 감싸는 컨테이너입니다.

```HTML
<body>
  <div class="phone">
    <header class="header"></header>
    <section class="total"></section>
    <section class="items"></section>
  </div>
</body>
```

#### `<header class="header">`
- 장바구니 페이지의 헤더 부분입니다.
- 뒤로 가기 버튼(`👈`), 페이지 제목("My Cart"), 장바구니 아이콘(`🛒`)을 포함합니다.

```HTML
<header class="header">
    <span class="header__btn">👈</span>
    <h1 class="header__title">My Cart</h1>
    <span class="header__btn">🛒</span>
</header>
```

#### `<section class="total">`
- 총 금액과 선택한 아이템 수를 표시하는 섹션입니다.
- 총 금액(`$3550`)과 아이템 수("based on your 5 items.") 정보를 보여줍니다.

```HTML
<section class="total">
    <span class="total__price">$3550</span>
    <span class="total__subtitle">based on your 5 items.</span>
</section>
```

#### `<section class="items">`
- 개별 상품을 나열하는 섹션입니다.
- `<article class="item">`: 각 상품을 나타내는 아티클입니다.
  - `<div class="item__info">`: 상품 정보를 보여주는 컨테이너입니다.
    - 상품명, 부제목, 총 가격, 단가 등의 정보를 포함합니다.
  - `<div class="item__specs">`: 상품의 사양을 보여주는 컨테이너입니다.
    - 사이즈, 수량 등의 정보를 포함합니다.
  - `<img src="https://source.unsplash.com/random" class="item__photo">`: 상품 이미지를 표시합니다.

```HTML
<section class="items">
    <article class="item">
        <div class="item__info">
        <div class="item__info-col">
            <h3 class="item__title">Pop Temple Print T-Shirt</h3>
            <h3 class="item__subtitle">limited 2002</h3>
        </div>
        <div class="item__info-col">
            <span class="item__total-price">$1990</span>
            <div class="item__price-price">$995 per price</div>
        </div>
        </div>
        <div class="item__specs">
        <div class="spec">
            <span class="spec__title">Size</span>
            <div class="spec__value">48 - L</div>
        </div>
        <div class="spec">
            <span class="spec__title">QT</span>
            <div class="spec__value">2 pcs</div>
        </div>
        </div>
        <img src="https://source.unsplash.com/random" class="item__photo">
    </article>
</section>
```

***

## style.scss

* 이 SCSS 파일은 Clone High-End Fashion Store 웹사이트의 주요 스타일을 정의합니다.
* Flexbox와 그리드 레이아웃을 활용하여 반응형 디자인을 구현하며, 세련된 색상과 텍스트 스타일을 사용하여 사용자 경험을 향상시킵니다.

## SCSS 구조

### 기본 설정
- `@import url(./reset.scss);`: 기본 브라우저 스타일을 초기화하는 `reset.scss` 파일을 가져옵니다.
- `$grey: #cacdcd;`: 회색 계열의 색상을 변수로 지정하여 재사용합니다.

```SCSS
@import url(./reset.scss);

$grey:#cacdcd;
```

### `body`
- Flexbox 레이아웃을 사용하여 자식 요소를 중앙에 배치합니다.
- 전체 높이(`100vh`)를 사용하여 화면 전체를 채웁니다.
- 배경색은 `#BCBFBF`로 설정됩니다.

```SCSS
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #BCBFBF;
}
```

### `.phone`
- 모바일 장치를 시뮬레이션하는 컨테이너입니다.
- 너비와 높이를 지정하고, 모서리는 둥글게(`border-radius: 10px`) 처리합니다.
- 배경색은 `$grey` 변수를 사용합니다.
- 박스 그림자를 추가하여 입체감을 줍니다.

```SCSS
.phone {
    width: 480px;
    height: 90%;
    border-radius: 10px;
    background-color: $grey;
    box-shadow: 5px 10px 10px rgba($color: #000000, $alpha: 0.5);
}
```

### `.header`
- 헤더 영역은 패딩과 Flexbox를 사용하여 내용을 정렬합니다.
- `.header__title`: 대문자로 변환하고 볼드체로 표시합니다.

```SCSS
.header {
    padding: 50px 15px 20px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header__title {
        text-transform: uppercase;
        font-weight: bold;
    }
}
```

### `.total`
- 총액을 보여주는 영역입니다.
- 배경색은 검정색, 텍스트 색상은 `$grey`로 설정합니다.
- Flexbox를 사용하여 요소들을 세로로 정렬합니다.

```SCSS
.total {
    background-color: black;
    padding: 30px 15px;
    color: $grey;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    .total__price {
        font-size: 22px;
    }
    .total__subtitle {
        font-size: 14px;
    }
}
```

### `.items`
- 상품 목록을 나열하는 영역입니다.
- 배경색은 `#c6caca`로 설정합니다.
- `.item`: 각 상품을 구분하는 스타일을 정의합니다.
  - 상단 테두리는 검정색으로 강조합니다.
  - 상품 정보(`.item__info`)는 그리드 레이아웃을 사용하여 구조화합니다.

```SCSS
.items {
    background-color: #c6caca;
    display: flex;
    flex-direction: column;
    gap: 15px;
    .item {
        border-top: 5px solid black;
        position: relative;
        .item__info {
            background-color: #D7DBDB;
            padding: 30px 15px;
            display: grid;
            align-items: flex-start;
            grid-template-columns: repeat(2, 1fr);
            .item__info-col {
                font-weight: bold;
                display: flex;
                flex-direction: column;
                gap: 5px;
                &:nth-child(2) {
                    align-items: flex-end;
                }
            }
            .item__title {
                font-size: 40px;
            }
            .item__subtitle {
                font-size: 14px;
            }
            .item__total-price {
                font-size: 34px;
            }
            .item__price-price {
                font-size: 18px;
            }
        }
    }
}
```

### `.item__specs`
- 상품의 사양을 나열하는 영역입니다.
- 상하 테두리를 추가하고, 그리드 레이아웃으로 항목을 배치합니다.

```SCSS
.item__specs {
    border-top: 5px solid black;
    border-bottom: 5px solid black;
    display: grid;
    grid-template-columns: repeat(auto-fill, 125px);
    background-color: #D7DBDB;
    .spec {
        padding: 25px;
        display: flex;
        font-weight: bold;
        flex-direction: column;
        justify-content: center;
        &:last-child {
            border-left: 5px solid black;
        }
    }
}
```

### `.item__photo`
- 상품 이미지를 나타내는 요소입니다.
- 절대 위치를 사용하여 위치를 조정합니다.
- 이미지는 커버 형식으로 적용되어 영역을 완전히 채웁니다.

```SCSS
.item__photo {
    position: absolute;
    width: 30%;
    height: 60%;
    border: 5px solid black;
    right: 15px;
    bottom: 0px;
    object-fit: cover;
}
```

***
