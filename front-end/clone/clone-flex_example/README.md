# clone-flex-example
 
***

## index.html

* 이 HTML 코드는 웹 페이지의 구조와 내용을 정의합니다. 각 부분에 대해 설명하겠습니다:

1. **Doctype 선언 (`<!doctype html>`):** 이 선언은 문서가 HTML5로 작성되었음을 나타냅니다.

```HTML
<!doctype html>
```

2. **HTML 요소 (`<html lang="en">`):** 이것은 전체 HTML 문서의 루트 요소입니다. `lang="en"` 속성은 페이지의 주요 언어가 영어임을 나타냅니다.

```HTML
<html lang="en">
```

3. **Head 요소 (`<head>`):** 이 부분에는 문서의 메타데이터가 포함됩니다.
    - `<meta charset="UTF-8" />`: 문자 인코딩을 UTF-8로 설정합니다.
    - `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`: 모바일 디바이스에서 보기에 최적화된 설정을 제공합니다.
    - `<link rel="stylesheet" href="/styles/style.scss">`: 외부 스타일시트 파일(여기서는 SCSS 파일)을 문서에 연결합니다.
    - `<title>`: 웹 페이지의 제목을 정의합니다.

```HTML
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/styles/style.scss">
  <title>clone Flex Example</title>
</head>
```

4. **Body 요소 (`<body>`):** 이 부분에는 웹 페이지의 내용이 포함됩니다.
    - `div.header`: 페이지의 헤더 섹션입니다. 연도, 프로그램, 테마, 관행, 학생 등의 카테고리를 포함하며, 각각 드롭다운 아이콘(`fa-solid fa-caret-down`)이 포함되어 있습니다.

```HTML
      <div class="header">
    <div class="year">
      <span>Year: All</span>
      <i class="fa-solid fa-caret-down"></i>
    </div>
    <div class="programme">
      <span>Programme: All</span>
      <i class="fa-solid fa-caret-down"></i>
    </div>
    <div class="themes">
      <span>Themes: All</span>
      <i class="fa-solid fa-caret-down"></i>
    </div>
    <div class="practice">
      <span>Practice: All</span>
      <i class="fa-solid fa-caret-down"></i>
    </div>
    <div class="students">
      <span>Students</span>
      <i class="fa-solid fa-caret-down"></i>
    </div>
  </div>
```

    - `<main>`: 페이지의 주요 내용을 나타냅니다. 여러 `div.section` 요소가 있으며, 각 섹션에는 학생의 이름, 학위, 사진 (`img` 태그를 통해 `https://source.unsplash.com/random`에서 무작위 이미지를 불러옴), 연도, 추가 정보 링크가 포함됩니다.

```HTML
<main>
  <div class="section">
    <div class="sub-section">
      <span>Kate Bedford</span>
      <span>pgdipfa</span>
    </div>
    <img src="https://source.unsplash.com/random">
    <div class="sub-section">
      <span>2016</span>
      <span>Read more</span>
    </div>
  </div>
  <div class="section">
    <div class="sub-section">
      <span>Patricla Ramos</span>
      <span>bfa(hons)</span>
    </div>
    <img src="https://source.unsplash.com/random">
    <div class="sub-section">
      <span>2016</span>
      <span>Read more</span>
    </div>
  </div>
  <div class="section">
    <div class="sub-section">
      <span>Trevor Newman</span>
      <span>nfa</span>
    </div>
    <img src="https://source.unsplash.com/random">
    <div class="sub-section">
      <span>2016</span>
      <span>Read more</span>
    </div>
  </div>
  <div class="section">
    <div class="sub-section">
      <span>Kristina Leggett</span>
      <span>bfa(hons)</span>
    </div>
    <img src="https://source.unsplash.com/random">
    <div class="sub-section">
      <span>2016</span>
      <span>Read more</span>
    </div>
  </div>
  <div class="section">
    <div class="sub-section">
      <span>JoAnne Raill</span>
      <span>pgdipfa</span>
    </div>
    <img src="https://source.unsplash.com/random">
    <div class="sub-section">
      <span>2016</span>
      <span>Read more</span>
    </div>
  </div>
  <div class="section">
    <div class="sub-section">
      <span>Emma Chalmers</span>
      <span>mfa</span>
    </div>
    <img src="https://source.unsplash.com/random">
    <div class="sub-section">
      <span>2016</span>
      <span>Read more</span>
    </div>
  </div>
</main>
```


5. **Script 요소 (`<script>`):** FontAwesome의 스크립트를 포함하여 웹 페이지에서 아이콘을 사용할 수 있도록 합니다.

```HTML
<script src="https://kit.fontawesome.com/2f0bc1a8ee.js" crossorigin="anonymous"></script>
```

* 이 코드는 특히 학생들의 프로필을 표시하는 웹 페이지의 레이아웃을 구성하는 데 사용됩니다.
* 스타일과 레이아웃은 외부 CSS 파일(`style.scss`)에 의해 결정됩니다.

***

## style.scss

* 이 CSS 코드는 웹 페이지의 스타일을 정의합니다. 코드의 각 부분을 살펴보겠습니다:

1. **Import 문 (`@import url(./reset.scss);`):** 다른 SCSS 파일(`reset.scss`)을 현재 스타일시트에 가져옵니다. `reset.scss`는 일반적으로 브라우저 간 일관된 스타일링을 위해 모든 기본 스타일을 초기화하는 데 사용됩니다.

```SCSS
@import url(./reset.scss);
```

2. **Body Selector (`body`):** 
    - `display: grid;`는 body 요소를 그리드 컨테이너로 만듭니다.
    - `grid-template-rows: 1fr 20fr;`는 두 개의 행을 정의하며, 첫 번째 행은 전체 공간의 1/21을, 두 번째 행은 20/21을 차지합니다.
    - `margin: 5px;`는 바디 주위에 5px 마진을 추가합니다.
    - `background-color: black;`는 배경색을 검은색으로 설정합니다.
    - `gap: 2px;`는 그리드 항목 간의 간격을 2px로 설정합니다.


```SCSS
body {
    display: grid;
    grid-template-rows: 1fr 20fr;
    margin: 5px;
    background-color: black;
    gap: 2px;
}
```

3. **Header Selector (`.header`):**
    - `display: grid;`로 헤더를 그리드 컨테이너로 만듭니다.
    - `grid-template-columns: repeat(5, 1fr);`는 5개의 열을 각각 동일한 크기로 설정합니다.
    - 내부 `div` 요소는 `display: flex;`로 플렉스박스를 사용하여 내용을 정렬하고, `justify-content: space-between;`과 `align-items: center;`로 내용을 중앙에 배치하고 양쪽에 공간을 두어 정렬합니다.


```SCSS
.header {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background: black;
    gap: 2px;
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        padding: 5px;
    }
}
```

4. **Main Selector (`main`):**
    - `display: grid;`로 메인 섹션을 그리드 컨테이너로 만듭니다.
    - `grid-template-columns: repeat(3, 1fr);`와 `grid-template-rows: repeat(2, 1fr);`로 3열 2행의 그리드를 만듭니다.
    - `.section`은 메인 내의 각 섹션을 위한 스타일을 정의합니다.
        - `display: grid;`와 `grid-template-rows: 1fr 5fr 1fr;`로 세 개의 행을 다른 크기로 설정합니다.
        - `.sub-section`은 섹션 내의 하위 섹션을 스타일링하며, 특히 `:nth-child`와 `:first-child` 가상 선택자를 사용하여 특정 자식 요소에 스타일을 적용합니다.


```SCSS
main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2px;
    .section {
        display: grid;
        grid-template-rows: 1fr 5fr 1fr;
        background-color: white;
        padding: 5px;
        .sub-section {
            display: flex;
            justify-content: space-between;
        }
        .sub-section:nth-child(3) {
            align-items: flex-end;
        }
        .sub-section:first-child span:nth-child(2) {
            text-transform: uppercase;
        }
        .sub-section:nth-child(3) span:nth-child(2) {
            text-decoration: underline;
        }
        img {
        }
    }
}
```

5. **이미지 스타일링 (`img`):** 
    - `justify-self: center;`와 `align-self: center;`로 그리드 내에서 이미지를 중앙에 배치합니다.
    - `width: 50%;`와 `height: 50%;`로 이미지 크기를 조정합니다.
    - `object-fit: cover;`는 이미지가 비율을 유지하면서 해당 컨테이너에 맞게 조정되도록 합니다.


```SCSS
img {
    justify-self: center;
    align-self: center;
    width: 50%;
    height: 50%;
    object-fit: cover;
}
```

* 이 스타일시트는 그리드와 플렉스박스 레이아웃을 사용하여 요소를 구성하고, 간격과 배치를 조정하며, 텍스트와 이미지 스타일을 정의합니다.
* 전체적으로 모던하고 구조화된 레이아웃을 생성하는 데 중점을 둡니다.

***

<img src="https://github.com/HaeChan-Jeon/study-record-consolidation/assets/146603024/245406a6-af13-4bdc-8440-fee61f807d04">

***
