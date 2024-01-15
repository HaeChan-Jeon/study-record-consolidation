for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (;;) {
  console.log("이것은 무한 루프입니다!");
  // 여기에 종료 조건을 추가하지 않으면 무한히 반복됩니다.
  // 일반적으로는 Ctrl+C 등을 사용하여 수동으로 종료해야 합니다.
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}