let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = '월요일';
  case 2:
    dayName = '화요일';
  case 3:
    dayName = '수요일';
  default:
    dayName = '기타';
}

console.log(`오늘은 ${dayName}입니다.`);

let month = 5;
let season;

switch (month) {
  case 12:
  case 1:
  case 2:
    season = '겨울';
    break;
  case 3:
  case 4:
  case 5:
    season = '봄';
    break;
  case 6:
  case 7:
  case 8:
    season = '여름';
    break;
  case 9:
  case 10:
  case 11:
    season = '가을';
    break;
  default:
    season = '올바르지 않은 월';
}

console.log(`이번 달은 ${season}입니다.`);