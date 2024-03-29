# JSONB 개념

***

* JSONB는 PostgreSQL에서 지원하는 데이터 타입 중 하나로, 이를 사용하여 JSON 데이터를 저장할 수 있음
* JSONB는 "Binary JSON"을 나타내며, JSON 데이터를 효율적으로 저장하고 쿼리할 수 있는 형태로 내부적으로 인코딩됨

1. **이진 저장 형식**: JSONB 데이터는 내부적으로 이진 형태로 저장되어 있어 빠른 검색과 쿼리가 가능합니다.

2. **데이터 타입 유연성**: JSONB 필드 내에 다양한 종류의 데이터를 저장할 수 있습니다. 이는 JSON의 유연성을 제공하면서도 데이터베이스의 강력한 타입 시스템을 활용할 수 있음을 의미합니다.

3. **인덱싱 지원**: JSONB 데이터에 대한 GIN(GENERALIZED INVERTED INDEX) 인덱스를 만들 수 있습니다. 이는 JSONB 데이터 내의 특정 키나 값에 대한 검색을 빠르게 할 수 있도록 합니다.

4. **문서 지향적인 쿼리**: JSONB 데이터를 사용하여 문서 지향적인 쿼리를 작성할 수 있습니다. 이를 통해 관계형 데이터베이스에서는 복잡하고 중첩된 데이터 구조를 표현하기 어려운 데이터를 쉽게 다룰 수 있습니다.

5. **연산자 및 함수**: JSONB 데이터를 조작하고 쿼리하기 위한 다양한 연산자 및 함수가 내장되어 있습니다. 예를 들어, JSONB 데이터 내의 특정 키의 존재 여부를 확인하거나 JSONB를 병합하는 등의 작업을 수행할 수 있습니다.

* JSONB는 관계형 데이터베이스 시스템인 PostgreSQL의 기능 중 하나로, 다양한 애플리케이션에서 유연하고 효율적인 데이터 저장 및 검색을 위해 널리 사용됩니다.

# JSONB 연산자

| 연산자 | 설명 | 결과 |
|--------|------|------|
| `<@` 또는 `@>` | JSONB끼리 포함관계를 판별한다. | 참, 거짓 또는 NULL |
| `?` | JSONB에 해당 문자열을 키 값으로 존재하는지 판별 | 참, 거짓 또는 NULL |
| `?!` | JSONB에 배열속 원소가 키 값으로 하나 이상 존재하는지 판별 | 참, 거짓 또는 NULL |
| `?&` | JSONB에 배열속 원소가 키 값으로 모두 존재하는지 판별 | 참, 거짓 또는 NULL |
| `-` | JSONB 오브젝트의 하나 이상의 원소를 삭제 또는 JSONB 배열의 해당 인덱스 번호의 원소를 삭제  | JSONB |

***
