// TODO: this file! :)
const inputNum = document.querySelector("input");
const addButton = document.querySelector(".submit-btn");

const numBank = document.getElementById("numberBank");
const bank = numBank.querySelector("output");

addButton.addEventListener("click", (event) => {
    event.preventDefault();

    bank.append(inputNum.value + " "); 
});

