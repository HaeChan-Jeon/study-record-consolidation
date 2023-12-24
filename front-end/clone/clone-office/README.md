# clone-office
 
***

<img src="https://github.com/HaeChan-Jeon/study-record-consolidation/assets/146603024/70f7a375-ebd0-4d4d-a59b-f2af1a987127">

***

## style.scss

1. **전반적인 스타일 설정**
   - `@import url(./reset.scss);`: `reset.scss` 파일을 가져와 초기 스타일을 초기화합니다.
   - `body`: 전체 페이지의 바디에 적용되는 스타일을 정의합니다. 페이지 높이와 너비는 97%로 설정되며, 여백과 테두리가 있습니다. 그리드 시스템을 사용하여 세 개의 열로 나뉘어 있습니다.

```scss
body {
    height: 97vh;
    width: 97vw;
    margin: 10px;
    border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

2. **타이틀 및 섹션 스타일**
   - `.office-title`, `.office-table`, `.home-title`, `.service-title`: 각 요소에 대해 텍스트를 대문자로 변환합니다.
   - `.section-office`, `.section-home-service`, `.section-home`, `.section-service`, `.section`: 각 섹션에 대한 스타일을 정의합니다.

```scss
.office-title, .office-table, .home-title, .service-title {
    text-transform: uppercase;
}
```

3. **사무실 섹션**
   - `.section-office`: 사무실 섹션의 스타일을 정의합니다. 세로 방향으로 나열된 컬럼과 간격을 가지는 플렉스 디스플레이를 사용합니다.
   - `.office-info`: 폰트 크기를 30px로 설정합니다.
   - `.office-table`: 표의 스타일을 정의하고, 리스트 아이템에 대한 스타일을 설정합니다.
   - `.office-meta`: 메타 정보에 대한 스타일을 정의하고, 각각의 div에 스타일을 적용합니다.

```scss
.section-office {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    border-right: 1px solid black;
    .office-info {
        font-size: 30px;
    }
    .office-table {
        margin: -10px;
        margin-bottom: 150px;
        & li {
            border-bottom: 1px solid black;
            padding: 5px 0px 5px 10px;
            &:first-child {
                border-top: 1px solid black;
                background-color: #EEEEEE;
            }
        }
    }
    .office-meta {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 40vh;
        & div {
            display: flex;
            flex-direction: column;
            gap: 5px;
            &:nth-child(2) span:first-child,
            &:nth-child(3) span:first-child {
                font-weight: bold;
            }
        }
    }
}
```

4. **홈 및 서비스 섹션**
   - `.section-home-service`: 홈과 서비스 섹션에 대한 스타일을 정의합니다.
   - `.section-home`, `.section-service`: 각각의 섹션에 대한 배경색과 패딩을 설정합니다.
   - `.home-title`: 홈 섹션의 타이틀에 대한 마진을 지정합니다.
   - `.home-info`, `.service-info`: 정보에 대한 폰트 크기를 설정합니다.

```scss
.section-home-service {
    display: grid;
    grid-template-rows: 4fr 1fr;
    background-color: black;
    gap: 1px;
    border-right: 1px solid black;
}

.section-home, .section-service {
    background-color: white;
    padding: 10px;
}

.section-home {
    .home-title {
        margin-bottom: 50px;
    }

    .home-info {
        margin-bottom: 25px;
    }
    p {
        font-size: 20px;
    }
}

.section-service {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.home-info, .service-info {
    font-size: 50px;
}
```

5. **이미지 섹션**
   - `.section`: 그리드 시스템을 사용하여 페이지의 이미지 섹션을 정의합니다.
   - `.section-img`: 배경 이미지를 설정하고, 그에 따라 그리드의 크기와 위치를 설정합니다.

```scss
.section {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(10, 1fr);
    background-color: black;
    gap: 1px;
    .section-img {
        background-image: url("https://source.unsplash.com/random");
        background-size: cover;
        &:first-child {
            grid-column: span 3;
            grid-row: span 8;
        }
        &:nth-child(2) {
            grid-column: span 3;
            grid-row: span 4;
        }
        &:nth-child(3) {
            grid-column: span 2;
            grid-row: span 2;
        }
        &:nth-child(6) {
            grid-row: span 2;
        }
        &:nth-child(7) {
            grid-column: span 2;
            grid-row: span 2;
        }
        &:nth-child(8) {
            grid-row: span 2;
        }
        &:nth-child(10) {
            grid-column: span 4;
            grid-row: span 2;
        }
    }
}
```

***
