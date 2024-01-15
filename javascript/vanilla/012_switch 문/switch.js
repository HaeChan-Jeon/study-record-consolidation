let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = '월요일';
    break;
  case 2:
    dayName = '화요일';
    break;
  case 3:
    dayName = '수요일';
    break;
  default:
    dayName = '기타';
}

console.log(`오늘은 ${dayName}입니다.`);
