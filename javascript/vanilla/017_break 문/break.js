for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // 반복문 종료
  }
  console.log(i);
}

outerLoop: for (let i = 0; i < 5; i++) {
  innerLoop: for (let j = 0; j < 5; j++) {
    console.log(`i: ${i}, j: ${j}`);
    if (i === 2 && j === 2) {
      break outerLoop; // outerLoop 레이블을 사용하여 외부 반복문을 탈출
    }
  }
}