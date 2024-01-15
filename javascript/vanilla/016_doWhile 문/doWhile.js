let number;

do {
  number = parseInt(prompt("양수를 입력하세요:"));
} while (number <= 0);

console.log(`입력한 양수: ${number}`);