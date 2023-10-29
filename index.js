// TODO: this file! :)
const inputNum = document.querySelector("input");
const addButton = document.querySelector(".submit-btn");

const bank = document.getElementById("numberBank").querySelector("output");
let bankedNumbers = [12,13,14,15,16,17];
bank.append("12,13,14,15,16,17");

const sortO = document.getElementById("sortOne");
const sortA = document.getElementById("sortAll");
const oddOutput = document.getElementById("odds").querySelector("output");
const evenOutput = document.getElementById("evens").querySelector("output");

addButton.addEventListener("click", (event) => {
    event.preventDefault();
    bank.innerText = "";
    bankedNumbers.push(inputNum.value);
    bank.innerText = bankedNumbers;
});

sortO.addEventListener("click", () => {
    if (bankedNumbers.length !== 0) {
        let popped = bankedNumbers.pop(); 
        if (popped % 2 === 0) {
            evenOutput.append(popped + ",");
        } else {
            oddOutput.append(popped + ",");
        }
        bank.innerText = bankedNumbers;
    }
});

sortA.addEventListener("click", () => {
    if (bankedNumbers.length !== 0) {
        for (let bankedNumber of bankedNumbers) {
            if (bankedNumber % 2 === 0) {
                evenOutput.append(bankedNumber + ",");
            } else {
                oddOutput.append(bankedNumber + ",");
            }
        }
        bankedNumbers = [];
        bank.innerText = "";
    }
});
