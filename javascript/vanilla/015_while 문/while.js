let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

while (true) {
  console.log("이것은 무한 루프입니다!");
  // 여기에 종료 조건을 추가하지 않으면 무한히 반복됩니다.
  // 일반적으로는 프로그램을 강제로 종료해야 합니다.
}

let count = 0;

while (true) {
  console.log("무한 루프 실행 중...");
  count++;

  if (count >= 5) {
    console.log("루프를 5번 실행했으므로 종료합니다.");
    break; // 무한 루프를 종료하기 위해 break 문 사용
  }
}