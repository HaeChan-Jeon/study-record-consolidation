# TDD(Test-Driven Development) 개념

- TDD(Test-Driven Development)는 소프트웨어 개발 방법론 중 하나임
- TDD는 반복적이고 짧은 개발 주기를 통해 소프트웨어를 개발하는 방법론으로, 테스트를 먼저 작성하고 그 테스트를 통과시키는 코드를 작성하는 방식으로 진행됨

# TDD의 주요 원칙

1. **테스트 작성 (Test)**
   - 개발할 기능에 대한 테스트를 먼저 작성함
   - 이 테스트는 해당 기능이 올바르게 동작하는지를 확인하는 역할을 수행함

2. **실패 (Fail)**
   - 작성한 테스트를 실행하여 초기에는 실패하도록 만듬
   - 왜냐하면 아직 구현되지 않은 기능이기 때문에 테스트가 실패할 것임

3. **코드 작성 (Code)**
   - 테스트를 통과시키기 위한 코드를 작성함
   - 이때 가장 단순하고 간결한 방법으로 구현함

4. **리팩토링 (Refactor)**
   - 작성한 코드를 리팩토링하여 코드의 가독성과 유지보수성을 높임
   - 이때 기능을 변경하지 않으며, 단순히 코드의 구조를 개선함

5. **반복 (Repeat)**
   - 위 과정을 반복하여 새로운 기능을 추가하거나 기존 기능을 변경함
   - 매번 새로운 기능을 추가할 때마다 테스트를 작성하고 코드를 작성하는 싸이클을 반복함

# TDD의 장점

1. **신뢰성 향상**
   - 테스트를 통해 각 기능이 올바르게 동작하는지 확인할 수 있으므로 소프트웨어의 신뢰성이 향상됨

2. **설계 개선**
   - 테스트 주도 개발은 단순하고 유연한 설계를 장려하므로 소프트웨어의 설계 품질을 향상시킴

3. **빠른 피드백**
   - 테스트 케이스를 작성하여 실패를 확인함으로써 빠른 피드백을 받을 수 있음
   - 이는 버그를 빠르게 발견하고 수정할 수 있도록 도와줌

4. **문서화 효과**
   - 각 테스트 케이스는 소프트웨어의 동작을 설명하는 문서로 사용될 수 있으므로 코드의 이해와 유지보수가 용이해짐

# 예시: 간단한 덧셈 함수 구현하기

## 1. 테스트 작성 (Test)
```python
테스트명: 덧셈 함수 테스트
조건: 두 개의 숫자를 더할 때
기대결과: 두 숫자의 합을 반환해야 함
```

## 2. 실패 (Fail)
```python
def test_addition():
    result = add(3, 5)
    assert result == 8, "덧셈이 실패했습니다."
```
- 이 테스트는 아직 `add` 함수가 구현되지 않았으므로 실패할 것임

## 3. 코드 작성 (Code)
```python
def add(a, b):
    return a + b
```
- 위 코드를 작성하여 테스트를 통과시킴

## 4. 리팩토링 (Refactor)
- 위 코드는 이미 간단하고 명확하므로 추가적인 리팩토링은 필요하지 않음

## 5. 반복 (Repeat)
- 새로운 기능을 추가하거나 기존 기능을 변경할 때마다 위 과정을 반복함
- 예를 들어, 뺄셈 함수를 추가한다면 새로운 테스트를 작성하고 위 과정을 따름