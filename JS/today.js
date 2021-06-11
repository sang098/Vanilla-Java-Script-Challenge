const today = document.querySelector(".today");

function getDayString(day) {
  if (day === 1) {
    return "월";
  } else if (day === 2) {
    return "화";
  } else if (day === 3) {
    return "수";
  } else if (day === 4) {
    return "목";
  } else if (day === 5) {
    return "금";
  } else if (day === 6) {
    return "토";
  } else if (day === 0) {
    return "일";
  }
}

function getToday() {
  const nowDate = new Date();
  const year = nowDate.getFullYear();
  const month = nowDate.getMonth() + 1;
  const date = nowDate.getDate();
  const day = getDayString(nowDate.getDay());
  today.innerText = `${year}년${month < 10 ? `0${month}` : `${month}`}월${
    date < 10 ? `0${date}` : `${date}`
  }일${day}요일`;
}

getToday();
