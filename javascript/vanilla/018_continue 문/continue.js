for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue; // 홀수일 경우 현재 반복을 중단하고 다음 반복으로 이동
  }
  console.log(i); // 짝수만 출력됨
}