const todoForm = document.getElementById("todo-form");
const quest = document.getElementById("quest");
const reward = document.getElementById("reward");
const todoList = document.querySelector(".todo-list");
const finishedList = document.querySelector(".finished-list");
const submitBtn = document.getElementById("submit-btn");

const PENDING_KEY = "pending";
const FINISHED_KEY = "finished";

let pendingQuest = [];
let finishedArray = [];

function paintFinished(item) {
  const li = document.createElement("li");
  li.id = item.id;
  const playerName = document.createElement("strong");
  playerName.innerText = `${localStorage.getItem("username")}`;
  const time = document.createElement("span");
  time.innerText = ` 님이 ${item.date}에 `;
  const span = document.createElement("span");
  span.innerText = `${item.quest}을(를) 완료하여 `;
  const strong = document.createElement("strong");
  strong.innerText = `${item.reward === "" ? `보람` : `${item.reward}`}`;
  const decoText = document.createElement("span");
  decoText.innerText = `을(를) 얻었습니다!`;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "✖";
  deleteBtn.addEventListener("click", deleteFinished);
  li.appendChild(playerName);
  li.appendChild(time);
  li.appendChild(span);
  li.appendChild(strong);
  li.appendChild(decoText);
  li.appendChild(deleteBtn);
  finishedList.appendChild(li);
}

function loadQuest() {
  pendingQuest = localStorage.getItem(PENDING_KEY);
  if (pendingQuest !== null) {
    pendingQuest = JSON.parse(localStorage.getItem(PENDING_KEY));
    pendingQuest.forEach((item) => paintQuest(item));
  } else {
    pendingQuest = [];
  }
  finishedArray = localStorage.getItem(FINISHED_KEY);
  if (finishedArray !== null) {
    finishedArray = JSON.parse(localStorage.getItem(FINISHED_KEY));
    finishedArray.forEach((item) => paintFinished(item));
  } else {
    finishedArray = [];
  }
}

function deleteFinished(event) {
  const li = event.target.parentElement;
  li.remove();
  finishedArray = finishedArray.filter(
    (item) => parseInt(item.id, 10) !== parseInt(li.id, 10)
  );
  localStorage.setItem(FINISHED_KEY, JSON.stringify(finishedArray));
}

function deleteQuest(event) {
  const li = event.target.parentElement;
  li.remove();
  pendingQuest = pendingQuest.filter(
    (item) => parseInt(item.id, 10) !== parseInt(li.id, 10)
  );
  localStorage.setItem(PENDING_KEY, JSON.stringify(pendingQuest));
}

// 연습

function paintQuest(item) {
  const li = document.createElement("li");
  li.id = item.id;
  const span = document.createElement("span");
  span.innerText = item.quest;
  const decoTextOne = document.createElement("span");
  decoTextOne.innerText = `을(를) 해서`;
  const strong = document.createElement("strong");
  strong.innerText = item.reward;
  const decoTextTwo = document.createElement("span");
  decoTextTwo.innerText = `을(를) 얻자!`;
  const finishBtn = document.createElement("button");
  finishBtn.innerText = "✔";
  finishBtn.classList.add("check-color");
  finishBtn.addEventListener("click", addFinished);
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "✖";
  deleteBtn.addEventListener("click", deleteQuest);
  li.appendChild(span);
  li.appendChild(decoTextOne);
  li.appendChild(strong);
  li.appendChild(decoTextTwo);
  li.appendChild(deleteBtn);
  li.appendChild(finishBtn);
  todoList.appendChild(li);
}

function addQuest(event) {
  event.preventDefault();
  const tempQuest = quest.value;
  const tempReward = reward.value;
  quest.value = "";
  reward.value = "";

  // obj연습
  const questObj = {
    quest: tempQuest,
    reward: tempReward,
    id: Date.now(),
  };
  paintQuest(questObj);
  pendingQuest.push(questObj);
  localStorage.setItem(PENDING_KEY, JSON.stringify(pendingQuest));

  // 연습
}
function addFinished(event) {
  const finishedDate = new Date();
  const hour = finishedDate.getHours();
  const minute = finishedDate.getMinutes();
  event.preventDefault();
  const parentTemp = event.target.parentElement;
  const finishedObj = {
    quest: parentTemp.querySelector("span").innerText,
    reward: parentTemp.querySelector("strong").innerText,
    id: parentTemp.id,
    date: `${hour < 10 ? `0${hour}` : `${hour}`}:${
      minute < 10 ? `0${minute}` : `${minute}`
    }`,
  };
  // console.log(finishedObj);
  finishedArray.push(finishedObj);
  console.log(finishedArray);
  localStorage.setItem(FINISHED_KEY, JSON.stringify(finishedArray));
  paintFinished(finishedObj);
  deleteQuest(event);
}

// 연습 컷
loadQuest();
todoForm.addEventListener("submit", addQuest);
console.log(quest);
