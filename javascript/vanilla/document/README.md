# document

* JavaScript에서 `document`는 웹 페이지를 나타내는 객체로, 웹 페이지의 모든 요소에 접근하고 조작할 수 있는 방법을 제공합니다.
* 이 객체는 `Document Object Model` (DOM)의 일부이며, DOM은 웹 페이지의 구조를 나타내는 프로그래밍 인터페이스입니다. 

***

## document 사용 예시

* HTML 파일은 기본적인 웹 페이지 구조를 정의합니다.
* `<head>` 태그 안에는 문서의 메타 데이터, 스타일 시트 링크, 그리고 페이지의 제목이 포함됩니다.
* 여기서 `<title>` 태그는 웹 페이지의 제목을 "Hello! From HTML!"로 설정합니다.
* `<body>` 태그 안에는 실제 내용과 JavaScript 파일 링크가 포함됩니다.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Hello! From HTML!</title>
</head>
<body>
  <script src="app.js"></script>
</body>
</html>
```

* 이 JavaScript 파일은 `document` 객체를 사용하여 웹 페이지를 조작합니다.
  * 이 예시는 `document` 객체가 JavaScript를 통해 웹 페이지의 내용과 속성을 어떻게 동적으로 조작할 수 있는지 보여줍니다.
  * JavaScript는 사용자의 상호작용에 반응하거나 페이지 로드 시 변화를 적용하는 등 다양한 동작을 웹 페이지에 추가할 수 있는 강력한 도구입니다.

```javascript
document.title = "Hello! From JS!";
console.log(document.body);
console.log(document.location);
```

* 제목 변경:
    * `document.title = "Hello! From JS!";` 이 코드는 현재 웹 페이지의 제목을 "Hello! From JS!"로 변경합니다.
    * 이렇게 하면 브라우저 탭의 제목이 HTML 파일에서 설정한 것에서 JavaScript 파일에서 설정한 것으로 바뀝니다.

```javascript
document.title = "Hello! From JS!";
```

* `document.body` 출력:
  * `console.log(document.body);` 이 코드는 현재 문서의 `<body>` 요소를 콘솔에 출력합니다
  *  이것은 웹 페이지의 본문 부분에 해당하는 DOM 요소에 접근하는 방법을 보여줍니다.

```javascript
console.log(document.body);
```

* `document.location` 출력:
  * `console.log(document.location);` 이 코드는 문서의 위치 객체를 콘솔에 출력합니다.
  * `document.location` 객체는 현재 페이지의 URL을 포함한 여러 정보를 담고 있습니다.

```javascript
console.log(document.location);
```

***
