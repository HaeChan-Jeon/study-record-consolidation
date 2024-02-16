# JSON 생성과 처리함수

***

## JSON 생성 함수

### `json_build_object()`

이 함수는 JSON 객체를 생성하는 데 사용됩니다. 키-값 쌍의 목록을 전달하면 해당 키와 값으로 이루어진 JSON 객체를 반환합니다.

예시:
```sql
json_build_object("name", "John", "age", 30, "city", "New York")
```
위 코드는 `{"name": "John", "age": 30, "city": "New York"}`와 같은 JSON 객체를 생성합니다.

### `jsonb_build_object()`

`jsonb_build_object()` 함수도 `json_build_object()`와 유사하지만 반환값이 `jsonb` 형식입니다. 일반 `json` 형식 대신 `jsonb` 형식을 사용하면 색인화된 저장소에 더 효율적으로 저장할 수 있습니다.

### `json_build_array()`

이 함수는 JSON 배열을 생성하는 데 사용됩니다. 여러 개의 원소를 전달하면 해당 원소로 이루어진 JSON 배열을 반환합니다.

예시:
```sql
json_build_array("apple", "banana", "orange")
```
위 코드는 `["apple", "banana", "orange"]`와 같은 JSON 배열을 생성합니다.

***

## JSON 처리 함수

### `json_array_length()`

이 함수는 JSON 배열의 길이를 반환합니다. JSON 배열을 인수로 전달하고 해당 배열의 원소 수를 반환합니다.

예시:
```sql
json_array_length('["apple", "banana", "orange"]'::json) AS length
```
위 코드는 3을 반환합니다.

### `json_each()`

이 함수는 JSON 객체를 반복하여 각 키-값 쌍에 대한 세부 정보를 반환합니다. 각 키-값 쌍은 키와 값의 두 컬럼으로 이루어진 결과 집합으로 반환됩니다.

예시:
```sql
json_each('{"name": "John", "age": 30, "city": "New York"}')
```
위 코드는 다음과 같은 결과를 반환합니다:
```
key   | value
------+------
name  | John
age   | 30
city  | New York
```

***
