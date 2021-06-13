const loginForm = document.getElementById("login-form");
const longinInput = document.getElementById("login-input");
const greeting = document.querySelector(".greeting");

const USER_NAME = "username";
const HIDDEN_CLASS = "hidden";

let nameCheck;

function getGreeting() {
  greeting.innerText = `${nameCheck}님! 오늘도 좋은 하루 보내세요. `;
}

function changeForm() {
  getGreeting();
  loginForm.classList.add(HIDDEN_CLASS);
}

function saveUsername(event) {
  event.preventDefault();
  nameCheck = longinInput.value;
  localStorage.setItem(USER_NAME, nameCheck);
  changeForm();
  longinInput.value = "";
}

function nameInit() {
  nameCheck = localStorage.getItem(USER_NAME);
  if (nameCheck !== null) {
    getGreeting();
  } else {
    loginForm.classList.remove(HIDDEN_CLASS);
  }
}

nameInit();
loginForm.addEventListener("submit", saveUsername);
