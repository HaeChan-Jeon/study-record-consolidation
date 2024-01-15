# 문자열 연결(concatenation)

* 문자열 연결 또는 문자열 합치기(concatenation)는 하나 이상의 문자열을 결합하여 새로운 문자열을 생성하는 프로세스임
* 문자열 연결은 다양한 프로그래밍 언어에서 자주 사용되며, JavaScript에서도 문자열을 결합하는 방법을 제공함
* JavaScript에서 문자열 연결을 수행하는 주요 방법은 다음과 같음

1. **`+` 연산자 사용**: `+` 연산자를 사용하여 문자열을 서로 결합함

   ```javascript
   let str1 = "Hello";
   let str2 = "World";
   let result = str1 + ", " + str2; // 결과: "Hello, World"
   ```

2. **문자열 보간 (String Interpolation)**: 템플릿 리터럴(template literal)을 사용하여 문자열 내부에 변수나 표현식을 삽입할 수 있음

   ```javascript
   let name = "Alice";
   let greeting = `안녕하세요, ${name}!`; // 결과: "안녕하세요, Alice!"
   ```

3. **`concat()` 메서드 사용**: `concat()` 메서드를 사용하여 문자열을 결합할 수 있음

   ```javascript
   let str1 = "Hello";
   let str2 = "World";
   let result = str1.concat(", ", str2); // 결과: "Hello, World"
   ```

4. **`+=` 연산자 사용**: `+=` 연산자를 사용하여 기존 문자열에 새로운 문자열을 추가할 수 있음

   ```javascript
   let str = "Hello";
   str += " World"; // str은 이제 "Hello World"입니다.
   ```

* 문자열 연결은 문자열을 조합하거나 동적으로 생성해야 할 때 유용함
* 특히, 템플릿 리터럴을 사용하면 변수나 표현식을 쉽게 문자열에 삽입할 수 있어 가독성이 좋음
* 문자열 연결을 사용하여 필요한 형식으로 문자열을 조립하고 표현하는 것은 다양한 JavaScript 응용 프로그램에서 자주 발생하는 작업 중 하나임