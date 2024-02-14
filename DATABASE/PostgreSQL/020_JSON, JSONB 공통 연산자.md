# JSON, JSONB 공통 연산자

***

1. 첫 번째 쿼리: JSON 객체에서 'p' 키의 값을 추출하여 결과로 반환합니다.

```sql
SELECT  '{"p": {"1":"postgres"}. "s":{"1":"sql"}}'::json -> 'p' AS result;
```

* 결과: "postgres"

2. 두 번째 쿼리: JSON 배열에서 역순으로 두 번째 요소를 추출하여 결과로 반환합니다.

```sql
SELECT '[{"p":"postgres"}, {"s":"sql"}, {"m":"mongoDB"}]'::json -> -2 AS result;
```

* 결과: {"s":"sql"}

3. 세 번째 쿼리: JSON 경로로 특정 값을 추출하여 결과로 반환합니다.

```sql
SELECT '{"i":{"love":{"book":"postgresql"}}}'::json #>> '{"i", "love", "book"}' AS result;
```

* 결과: "postgresql"

4. 네 번째 쿼리: JSON 객체에서 경로로 특정 값을 추출하여 결과로 반환합니다.

```sql
SELECT '{"post":[{"gre":{"sql":"do it"}}, {"t":"sql"}]}'::json #> '{"post", 0, "gre", "sql"}' AS result;
```

* 결과: "do it"

***
