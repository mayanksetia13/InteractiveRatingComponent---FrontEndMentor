// Selecting Elements

const ratingBtns = document.querySelectorAll(".list-items button");
const submitBtn = document.querySelector(".submit-btn");
const containerCards = document.querySelectorAll(".container");
const resultString = document.querySelector(".feedback-string");

console.log(ratingBtns);

let selectedValue;
let curCard = 0;

ratingBtns.forEach((btn, i) => {
    btn.addEventListener("click", function (e) {
        selValue = e.target;
        console.log(selValue.value);
        if (i === selValue.value - 1) {
            btn.style.backgroundColor = "hsl(25, 97%, 53%)";
            btn.style.color = "white";
        }
        submitBtn.addEventListener("click", function () {
            curCard++;
            containerCards[0].classList.add("hide");
            resultString.textContent = `You selected ${selValue.value} out of 5`;
            containerCards[curCard].classList.remove("hide");
        });
    });
});
