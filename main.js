let billInput = document.querySelector("#bill");
billInput.addEventListener("input", receiveBillValue);

let numberOfPeopleInput = document.querySelector("#people");
numberOfPeopleInput.addEventListener("input", receiveNumberOfPeopleValue);

let bill = 0;
let tipPercentage = 0;
let numberOfPeople = 0;
let buttonSelected = null;

function receiveBillValue() {
    bill = billInput.valueAsNumber || 0;
    calculate();
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = numberOfPeopleInput.valueAsNumber || 0;
    calculate();
}


