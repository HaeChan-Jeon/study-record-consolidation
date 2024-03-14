# 언리얼 엔진의 개념

언리얼 엔진은 다양한 산업의 크리에이터에게 최첨단 엔터테인먼트, 강력한 시각화, 몰입도 높은 가상 세계를 표현할 수 있는 자유를 제공하는 게임 엔진임

## 머티리얼(Material)

- 언리얼 엔진의 주요 개념 중 하나는 씬(Scene)에서 오브젝트(Object)의 표면 프로퍼티(Surface Property)를 정의하며, 메시(Mesh)에 적용되어 시각적인 형태를 제어하는 '페인트’라고 할 수 있는 머티리얼(Material)임
  - 구체적으로 설명하자면, 머티리얼은 표면이 씬의 라이트와 어떻게 상호작용해야 하는지를 엔진에 정확히 알려줌
  - 머티리얼은 색(Color), 리플렉션(Reflection), 러프니스(Roughness), 투명도(Opacity) 등 표면의 모든 특징을 정의함

<p align="center">
    <img src="https://github.com/HaeChan-Jeon/study-record-consolidation/assets/146603024/1f88e377-4497-4703-b7fc-0942ae4bcf7c" alt="image">
</p>

## 블루프린트 비주얼 스크립팅(Blueprint Visual Scripting)

- 언리얼 엔진은 블루프린트 비주얼 스크립팅(Blueprint Visual Scripting)을 제공하여, 사용자가 직관적이고 이해하기 쉬운 방식으로 머티리얼을 제작할 수 있게 함
  - 언리얼 에디터 안에서 노드(Node) 기반 인터페이스를 사용하여 게임플레이 요소를 만드는 개념을 토대로 한 비주얼 스크립팅 시스템
  - 일반적인 스크립팅 언어와 마찬가지로, 엔진 내 객체 지향형(Object-Oriented, OO) 클래스(Class) 또는 오브젝트를 정의하는 데 사용됨
  - 이 시스템은 매우 유연하고 강력해서, 보통은 프로그래머가 없으면 힘들었던 개념 구현이나 툴 작업 거의 전부를 디자이너 스스로 해낼 수 있게 됨
  - 게다가, 언리얼 엔진의 C++ 구현에서 가능한 블루프린트 전용 마크업(Markup)을 통해 프로그래머가 어떤 기반 시스템을 제작하면, 디자이너가 그것을 확장하는 것도 가능함

<p align="center">
    <img src="https://github.com/HaeChan-Jeon/study-record-consolidation/assets/146603024/47168f94-8570-40c0-91f0-27aad223f1c6" alt="image">
</p>

- 언리얼 엔진은 또한 다양한 유형의 에디터를 제공하며, 이를 통해 사용자는 콘텐츠를 생성, 임포트(Import), 정리, 확인 및 관리할 수 있음

# 게임 인스턴스(GameInstance)

## GameInstance의 개념

- GameInstance는 언리얼 엔진에서 게임을 관리하는 고수준의 매니저 클래스임
  - GameInstance 클래스는 게임 레벨을 변경할 때 파괴되지 않으며, 플레이어의 체력, 점수, 탄약 등과 같은 데이터를 레벨 간에 저장할 수 있음
  - 이 데이터는 게임이 실행되는 동안 유지되며, 게임을 종료하면 데이터가 손실됨

- GameInstance는 게임 시작 시 생성되며 GameInstance가 종료될 때까지 파괴되지 않음
  - **독립형 모드**에서는 하나의 GameInstance가 있음
  - 에디터에서 실행할 때는 **PIE(Play-In-Editor)** 인스턴스(Instance)마다 하나의 GameInstance가 생성됨
  - GameInstance는 게임이 시작되는 시점부터 게임이 종료될 때까지 지속되는 객체임

## PIE (Play-In-Editor) 개념

- PIE(Play-In-Editor)는 언리얼 엔진에서 게임을 테스트하고 시뮬레이션하는 기능임
  - 이 모드를 사용하면 파일을 저장하지 않고도 에디터 안에서 플레이어를 스폰시키고 게임을 미리볼 수 있음

- PIE는 다음 두 가지 방법으로 접근할 수 있음

1. 에디터에서 플레이 (Play In Editor, PIE)
- 메인 툴바의 플레이 버튼을 클릭하여 직접 접근할 수 있음
- 이 모드에서는 에디터 안에서 게임을 플레이함

<p align="center">
    <img src="https://github.com/HaeChan-Jeon/study-record-consolidation/assets/146603024/82ec4498-5274-4095-a615-a49c7b5bbc4d" alt="image">
</p>

2. 에디터에서 시뮬레이트 (Simulate In Editor, SIE)
- 플레이 버튼의 드롭다운 메뉴로 (또는 Alt+S 키를 눌러) 접근할 수 있음
- 이 모드에서는 레벨을 시뮬레이션해 봄
- 시뮬레이트 모드는 특히 게임플레이나 애셋에 대한 트윅 반복 작업을 하면서 게임이 어떻게 변하는지를 빠르게 확인할 수 있음

<p align="center">
    <img src="https://github.com/HaeChan-Jeon/study-record-consolidation/assets/146603024/c9c0a67d-89e1-4819-9d9e-b7487cf95c07" alt="image">
</p>

## GameInstance 예시

- 아래 코드는 Unreal Engine에서 게임 인스턴스를 정의하는 클래스임
  - Unreal Engine은 게임을 실행할 때 매우 중요한 개체인 GameInstance를 사용함
  - GameInstance는 게임이 실행되는 동안 유지되는 상태와 데이터를 보유하고 있으며, 전역적으로 액세스할 수 있는 기능을 제공함

```cpp
@include "MyGameInstance.generated.h"

UCLASS()
class HELLOUNREAL_API UMyGameInstance : public UGameInstance
{
    GENERATED_BODY()
};
```

- 이 클래스는 `MyGameInstance.generated.h` 헤더 파일을 선언하고 정의하고 있음
  - 이 파일은 Unreal Engine에서 코드 생성 시 생성된 코드를 포함함
  - 주로 Unreal Engine의 메타 데이터와 관련된 코드가 이 파일에 포함됨

- `UCLASS()` 매크로는 Unreal Engine에서 클래스를 정의하는 데 사용됨
  - 이 매크로는 클래스를 Unreal Engine의 리플렉션(Reflection) 시스템에 등록함
  - 리플렉션(Reflection) 시스템은 런타임에 클래스 및 속성에 대한 정보를 검색하고 조작할 수 있는 기능을 제공함

- `UmyGameInstance` 클래스는 `UGameInstance` 클래스를 상속함
  - `UGameInstance` 클래스는 Unreal Engine에서 기본 게임 인스턴스를 정의하는 클래스임
  - 따라서 `UmyGameInstance` 클래스는 `UGameInstance` 클래스의 기능을 상속하고 확장함

- `GENERATED_BODY()` 매크로는 Unreal Engine의 코드 생성 시스템에서 클래스에 대한 추가 코드를 생성하도록 지시함
  - 이는 주로 리플렉션 및 기타 Unreal Engine 시스템에서 필요로 하는 코드를 자동으로 생성함

- 따라서 위 코드는 Unreal Engine에서 사용할 게임 인스턴스 클래스를 정의하고, 리플렉션 시스템 및 코드 생성 시스템과의 상호 작용을 가능하게 함

## 효율적인 GameInstance 구현을 위한 지침

### GameInstance 수명 주기 이해

- GameInstance는 게임 시작 시 생성되며 게임이 종료될 때까지 유지됨
- 게임을 디자인할 때 이 수명 주기를 인식하는 것이 중요함
- 레벨이나 게임 모드 간에 지속되어야 하는 모든 데이터는 GameInstance에 저장되어야 함

### 레벨별 데이터에 미사용

- GameInstance는 단일 레벨 또는 게임 모드에 종속적인 특정한 데이터를 저장하는 데 사용해서는 안 됨
- 대신 레벨 블루프린트나 GameState 클래스를 이 용도로 사용해야 함

### 전역 데이터 사용

- GameInstance는 플레이어 통계 또는 게임 설정과 같은 여러 레벨 또는 게임 모드에서 액세스해야 하는 데이터를 저장하는 데 이상적임

### 복제 방지

- GameInstance는 기본적으로 복제되지 않으므로 여기에 저장된 모든 데이터는 로컬 시스템에서만 사용할 수 있음
- 여러 클라이언트 간에 데이터를 공유해야 하는 경우 리플리케이트(Replication)된 액터(Actor)를 사용하는 것이 좋음

### 초기화 주의

- 디스크나 네트워크에서 데이터를 로드해야 하는 경우 GameInstance의 초기화를 제대로 수행하기 까다로울 수 있음
- 충돌이나 예기치 않은 동작을 방지하려면 오류 및 예외 사례를 적절하게 처리해야 함

- 이러한 모범 사례를 따르면 GameInstance 클래스를 사용하여 Unreal Engine 게임에서 영구 데이터를 효과적으로 관리할 수 있음

# 게임 흐름 개요

- 엔진 시작 및 게임 실행 프로세스에 대한 방법은 크게 두 가지, 에디터 방법과 독립형 방법임
  - 일반적인 이벤트 순서는, 엔진을 초기화시키고, GameInstance를 생성 및 초기화한 뒤, 레벨을 로드하고, 마지막으로 플레이를 시작함
  - 하지만 독립형 모드와 에디터 모드 사이의 차이점이 있는데, 일부 함수가 호출되는 정확한 순서와, 어떤 함수가 호출되는지가 다름
  - 아래 플로우 차트는 두 방법으로 병렬 실행했을 때 게임 시작 전 수렴할 때까지의 흐름을 보여줌

<p align="center">
    <img src="https://github.com/HaeChan-Jeon/study-record-consolidation/assets/146603024/489e3e73-0983-4b40-ad6d-5db9540208c6" alt="image">
</p>

1. 독립형

- 독립형 모드는, 에디터 외부에서 플레이하는 게임 모드로, 시작시 엔진 초기화에 이어 바로 게임 플레이에 필요한 오브젝트가 생성 및 초기화됨
  - GameInstance와 같은 오브젝트는 (Engine 생성 및 초기화와 별개로) 엔진 시작 전 생성 및 초기화되며, 엔진의 시작 함수 호출 직후 시작 맵이 로드됨
  - 공식적으로 게임플레이가 시작되는 시점은, 레벨이 적합한 게임 모드와 게임 스테이트에 이어 다른 액터를 생성한 이후임

2. 에디터

- 에디터 모드는 '에디터에서 플레이'와 '에디터에서 시뮬레이트'에서 사용되며, 다른 흐름으로 실행됨
  - 엔진은 에디터 실행에 필요하므로 즉시 초기화 및 시작되나, GameInstance와 같은 오브젝트의 생성 및 초기화는 사용자가 버튼을 눌러 PIE 또는 SIE 세션을 실행할 때까지 연기됨
  - 추가로 레벨의 액터를 복제하여 에디터의 레벨에 영향을 끼치도록 하고, GameInstance를 포함한 모든 오브젝트는 각 PIE 인스턴스마다 별도의 사본을 갖음
  - UWorld 클래스의 게임플레이 시작과 함께 에디터 방법과 독립형 방법의 재회가 이루어짐
