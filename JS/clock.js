const clock = document.querySelector(".main-clock");

function getNowTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  clock.innerText = `${hour < 10 ? `0${hour}` : `${hour}`}:${
    minute < 10 ? `0${minute}` : `${minute}`
  }:${second < 10 ? `0${second}` : `${second}`}`;
}

getNowTime();
setInterval(getNowTime, 1000);
