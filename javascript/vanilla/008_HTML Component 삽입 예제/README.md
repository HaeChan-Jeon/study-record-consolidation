# 코드 설명: 웹 페이지에 헤더 삽입하기

이 문서는 웹 개발에서 사용되는 JavaScript 코드의 기능을 설명합니다. 코드의 목적은 외부 HTML 파일(`header.html`)에서 헤더 내용을 가져와 현재 웹 페이지에 삽입하는 것입니다.

## 코드 구조

```html
<script>
  document.addEventListener('DOMContentLoaded', function () {
    fetch('삽입하는 header.html 파일 경로')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const headerContent = doc.querySelector('.header').innerHTML;
        document.querySelector('.header').innerHTML = headerContent;
      })
  });
</script>
```

## 단계별 설명

1. **이벤트 리스너 추가:**
   - `document.addEventListener('DOMContentLoaded', function () {...});`
   - 이 코드는 DOMContentLoaded 이벤트에 대한 리스너를 추가합니다. 이 이벤트는 초기 HTML 문서가 완전히 로드되고 파싱됐을 때 발생합니다. 즉, 스크립트는 페이지가 완전히 로드된 후 실행됩니다.

2. **fetch 함수 사용:**
   - `fetch('삽입하는 header.html 파일 경로')`
   - `fetch` 함수는 지정된 경로에서 리소스(이 경우 `header.html`)를 비동기적으로 가져옵니다. 이 함수는 `Promise`를 반환하며, 이는 작업이 완료된 후 처리할 수 있음을 의미합니다.

3. **응답 처리:**
   - `.then(response => response.text())`
   - `fetch` 함수에서 반환된 `Promise`가 성공적으로 완료되면, 응답을 텍스트 형식으로 변환합니다.

4. **HTML 파싱 및 삽입:**
   - `const parser = new DOMParser();`
   - `const doc = parser.parseFromString(data, 'text/html');`
   - `const headerContent = doc.querySelector('.header').innerHTML;`
   - `document.querySelector('.header').innerHTML = headerContent;`
   - `DOMParser` 객체를 사용하여 가져온 HTML 데이터를 파싱합니다.
   - `.header` 클래스를 가진 요소의 내부 HTML을 가져옵니다.
   - 현재 문서의 `.header` 클래스를 가진 요소에 파싱된 HTML 내용을 삽입합니다.

## 사용 시나리오

이 코드는 웹 페이지의 헤더를 중앙에서 관리하려는 경우 유용합니다. 예를 들어, 여러 페이지에서 동일한 헤더를 사용할 때 이 방식을 통해 모든 페이지에 동일한 헤더를 쉽게 적용할 수 있습니다. 이렇게 하면 헤더를 업데이트할 때 한 곳에서만 변경하면 모든 페이지에 반영됩니다.

---