# getElementByID

* JavaScript에서 `getElementById` 메서드는 문서 내에서 주어진 ID 속성을 가진 요소를 찾아서 반환하는 데 사용됩니다.
* 이 메서드는 `document` 객체의 일부로 제공되며, 특정한 HTML 요소에 접근하고자 할 때 매우 유용합니다.

* `getElementById` 메서드의 기본 구조는 다음과 같습니다:

```javascript
let element = document.getElementById('elementId');
```

* 여기서 `'elementId'`는 찾고자 하는 HTML 요소의 ID입니다.

***

## getElementByID 사용 예시

* HTML 파일은 웹 페이지의 기본 구조를 정의합니다. `<head>` 태그 안에는 문서의 메타데이터, 스타일 시트 링크, 페이지 제목이 포함됩니다.
* `<body>` 태그 내에는 `<h1>` 요소가 있으며, 이 요소는 `class="hello"`와 `id="title"` 속성을 가지고 있습니다.
* `<script>` 태그는 JavaScript 파일(`app.js`)을 연결합니다.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Momentum App</title>
</head>
<body>
  <h1 class="hello" id="title">Grab me!</h1>
  <script src="app.js"></script>
</body>
</html>
```

* JavaScript 파일에서는 `getElementById` 함수를 사용하여 웹 페이지의 특정 요소를 조작합니다.
  * 이 예제에서 `getElementById`는 특정 ID를 가진 HTML 요소를 찾는 데 사용됩니다.
  * 이 메서드는 문서에서 고유한 ID 속성을 가진 요소를 찾아서 JavaScript를 통해 조작할 수 있게 해줍니다.
  * 이러한 조작에는 텍스트 변경, 스타일 적용, 이벤트 리스너 추가 등이 포함될 수 있습니다.
  * `getElementById`는 매우 효율적이고 널리 사용되는 DOM 접근 방법 중 하나입니다.

```javascript
const title = document.getElementById("title");

title.innerText = "Got you!";

console.dir(title.id);
console.dir(title.className);
```

* 요소 선택:
  * `const title = document.getElementById("title");` 이 코드는 `id`가 `"title"`인 HTML 요소를 선택합니다.
  * 여기서 `title` 변수는 `<h1>` 요소를 참조합니다.

```javascript
const title = document.getElementById("title");
```

* 텍스트 변경:
  * `title.innerText = "Got you!";` 이 코드는 선택된 `<h1>` 요소의 텍스트를 "Got you!"로 변경합니다.
  * 원래 HTML 파일에서는 "Grab me!"로 되어 있었지만, 이 코드 실행 후에는 페이지에 "Got you!"라고 표시됩니다.

```javascript
title.innerText = "Got you!";
```

* 요소 속성 출력:
  * `console.dir(title.id);`와 `console.dir(title.className);` 코드는 선택된 요소의 `id`와 `className` 속성을 콘솔에 출력합니다.
  * 이 경우, `title.id`는 `"title"`을, `title.className`은 `"hello"`를 출력합니다.

```javascript
console.dir(title.id);
console.dir(title.className);
```

***
