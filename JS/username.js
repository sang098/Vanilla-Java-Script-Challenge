const loginForm = document.getElementById("login-form");
const longinInput = document.getElementById("login-input");
const greeting = document.querySelector(".greeint");

const USER_NAME = "username";
const HIDDEN_CLASS = "hidden";

let nameCheck;

function getGreeting(params) {
  nameCheck = localStorage.getItem(USER_NAME);
  greeting.innerText = `오늘도 좋은 하루 보내세요. ${nameCheck}!`;
}

function changeForm() {
  getGreeting();
  greeting.classList.remove(HIDDEN_CLASS);
  loginForm.classList.add(HIDDEN_CLASS);
}

function saveUsername(event) {
  event.preventDefault();
  const inputName = longinInput.value;
  localStorage.setItem(USER_NAME, inputName);
  changeForm();
  longinInput.value = "";
}

function nameInit() {
  nameCheck = localStorage.getItem(USER_NAME);
  if (nameCheck !== null) {
    greeting.classList.remove(HIDDEN_CLASS);
    getGreeting();
  } else {
    loginForm.classList.remove(HIDDEN_CLASS);
  }
}

nameInit();
loginForm.addEventListener("submit", saveUsername);
