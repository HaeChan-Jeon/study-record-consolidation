const arr = [1, 2, 3];

arr.forEach(console.log);

// node index

// 1 0 [ 1, 2, 3 ]
// 2 1 [ 1, 2, 3 ]
// 3 2 [ 1, 2, 3 ]

// code runner는 Ctrl + Alt + N을 사용하여 js 파일을 실행

// 1 0 [ 1, 2, 3 ]
// 2 1 [ 1, 2, 3 ]
// 3 2 [ 1, 2, 3 ]

arr.forEach(alert);

// 위 코드를 사용하면 오류가 발생함. 이는 alert 함수가 브라우저에서만 동작하는 클라이언트 사이드 Web API이기 떄문임