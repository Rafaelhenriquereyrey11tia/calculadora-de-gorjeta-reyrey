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

function receiveTipPercentageValue(value) {
    tipPercentage = value / 100;
    removeClassButtonSelected();
    document.querySelector("#custom-tip").value = "";
    buttonSelected = document.querySelector(`#button-${value}`);
    if (buttonSelected) {
        buttonSelected.classList.add("button-selected");
    }
    calculate();
}

function receiveCustomTipPercentageValue() {
    tipPercentage = (document.querySelector("#custom-tip").valueAsNumber || 0) / 100;
    removeClassButtonSelected();
    calculate();
}

function removeClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected");
        buttonSelected = null;
    }
}

function calculate() {
    if (bill > 0 && tipPercentage > 0 && numberOfPeople > 0) {
        let tipAmountPerson = (bill * tipPercentage) / numberOfPeople;
        let totalPerson = (bill / numberOfPeople) + tipAmountPerson;

        let tipAmountStrong = document.querySelector(".amount strong");
        let totalStrong = document.querySelector(".total strong");

        if (tipAmountStrong) tipAmountStrong.innerText = `$${tipAmountPerson.toFixed(2)}`;
        if (totalStrong) totalStrong.innerText = `$${totalPerson.toFixed(2)}`;
    }
}

function reset() {
    billInput.value = "";
    bill = 0;
    tipPercentage = 0;
    removeClassButtonSelected();
    document.querySelector("#custom-tip").value = "";
    numberOfPeopleInput.value = "";
    numberOfPeople = 0;

    let tipAmountStrong = document.querySelector(".amount strong");
    let totalStrong = document.querySelector(".total strong");

    if (tipAmountStrong) tipAmountStrong.innerText = "$0.00";
    if (totalStrong) totalStrong.innerText = "$0.00";
}
