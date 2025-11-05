let countEl = document.getElementById("count-el");
let passengerCount = 0;
console.log(countEl);
function increment() {
    passengerCount = passengerCount + 1;
    countEl.innerText = passengerCount;

}