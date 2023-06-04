let form = document.querySelector(".header__form");
let input = document.querySelector(".form__input");
let clear = document.querySelector(".clear");
let todo = document.querySelector(".form__submit");
let wrapper = document.querySelector(".wrapper");

let filledToDo = JSON.parse(window.localStorage.getItem("finish"));
let toDoArr = filledToDo || [];

toDoArr.forEach((element) => {
  localStorage.setItem("inputToDo", element);
});

for (let i = 0; i <= toDoArr.length; i++) {}
toDoArr.forEach((element) => {
  let someThing = document.createElement("li");
  someThing.textContent = element;
  wrapper.appendChild(someThing);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let smth = localStorage.setItem("inputToDo", input.value);

  toDoArr.push(localStorage.getItem("inputToDo"));

  console.log(toDoArr);
  let toDoList = document.createElement("li");
  toDoList.textContent = localStorage.getItem("inputToDo");
  wrapper.appendChild(toDoList);

  let someArr = localStorage.setItem("finish", JSON.stringify(toDoArr));

  console.log(someArr);
});

clear.addEventListener("click", (e) => {
  e.preventDefault();

  localStorage.clear();
  wrapper.innerHTML = "";
  input.value = "";
});


