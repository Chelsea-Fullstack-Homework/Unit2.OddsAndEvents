// TODO: this file! :)
const searchForum = document.querySelector("form");
const addButton = document.querySelector(".submit-btn");
const inputNum = document.getElementById("number");

searchForum.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(inputNum.value);
});

