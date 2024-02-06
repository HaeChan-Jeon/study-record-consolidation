# 조건문 함수 - COALESCE 함수

* `COALESCE` 함수는 PostgreSQL에서 사용되는 함수로, 여러 개의 매개변수 중에서 첫 번째로 NULL이 아닌 값을 반환

* 간단하게 설명하면, `COALESCE` 함수는 여러 값 중에서 NULL이 아닌 첫 번째 값을 선택하여 반환하는 역할을 수행
* 이 함수는 주로 NULL 처리 또는 값 대체에 사용

```sql
SELECT COALESCE(column1, column2, 'DefaultValue') AS result
FROM your_table;
```

* 위의 쿼리에서, `COALESCE` 함수는 `column1`이 NULL이 아니면 `column1`의 값을 반환하고, 만약 `column1`이 NULL이라면 `column2`의 값을 반환
* 두 열 모두 NULL이라면 'DefaultValue'가 반환

* 이를 통해 데이터베이스에서 NULL 값에 대한 안전한 처리를 할 수 있음

***
