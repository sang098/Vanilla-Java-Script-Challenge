const background = ["0", "1", "2", "3", "4", "5", "6"];
// const background = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];

function choseImage() {
  const randomImage = background[Math.floor(Math.random() * background.length)];
  const choseBg = document.createElement("img");
  choseBg.src = `./img/${randomImage}.jpeg`;
  //   choseBg.src = `./img/${randomImage}`;
  choseBg.classList.add("background");
  document.getElementById("background-img").appendChild(choseBg);
  // document.body.appendChild(choseBg);
}

choseImage();
