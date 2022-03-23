// Creating the variables

const billInput = document.querySelector('#bill')
const inputs = document.querySelectorAll('.percent')
const customInputCtn = document.querySelector('#custom')
const peopleCountInput = document.querySelector('#people')
const zeroPeopleError = document.querySelector('#error');

const tipAmtCtn = document.querySelector('.tip-amt-ctn .amt-num-ctn span');
const totalTipCtn = document.querySelector('.total-amt-ctn .amt-num-ctn span')
const resetBtn = document.querySelector('.reset-btn')


// UI Events

window.addEventListener('DOMContentLoaded', reset);

billInput.addEventListener('input', showBill);

// Select Tip percent
let tipPercent = 0;
inputs.forEach(input => {
    input.addEventListener('click', (e) => {
        tipPercent = parseInt(e.target.dataset.key);
        console.log("Tip Entered : ", tipPercent);
        showBill();
    })
});

customInputCtn.addEventListener('input', showBill);

peopleCountInput.addEventListener('input', showBill)

function showBill() {

    // Entering the Bill Amount
    let billAmount = parseFloat(billInput.value)
    console.log("Bill Amount is: ", billAmount)

    // Custom tip percent
    let customTip = (customInputCtn.value)
    console.log("Custom tip is: ", customTip)

    // Choosing between given tip percent and the custom tip percent.
    if (customTip !== "") {
        tipPercent = customTip;
        console.log("tip Percent: ", tipPercent)
    } else if (tipPercent === undefined) {
        console.log("Tip Entered : ", tipPercent);
        tipPercent = 0;
        console.log("tip Percent: ", tipPercent)
    }

    // Entering the People Count
    console.log(peopleCountInput.value);
    peopleCount = peopleCountInput.value;
    if (peopleCount === "") peopleCount = 1;
    if (peopleCount === '0') {
        console.log("Hey ERORRRR...............")
        zeroPeopleError.style.visibility = 'visible';
        peopleCountInput.style.outline = '2px solid red';
    } else {
        zeroPeopleError.style.visibility = 'hidden';
        peopleCountInput.style.outline = 'none';
    }
    peopleCount = parseInt(peopleCount);
    console.log("People Count is: ", peopleCount)


    let [tipAmountPerPerson, totalAmountPerPerson] = calculateAmount(billAmount, tipPercent, peopleCount);

    tipAmtCtn.textContent = `$${tipAmountPerPerson}`;
    totalTipCtn.textContent = `$${totalAmountPerPerson}`;
}

// Reseting the calculator
resetBtn.addEventListener('click', reset);

// Function to Reset everything
function reset() {
    billInput.value = "";
    inputs.forEach(input => {
        input.checked = false;
    })
    customInputCtn.value = "";
    peopleCountInput.value = "";

    tipAmtCtn.textContent = `$0.00`;
    totalTipCtn.textContent = `$0.00`;

}

// Funtion to calculate the tip amount and total amount per person
function calculateAmount(billAmt, tipPercent, peopleCount) {

    let tipAmt = 0,
        totalAmt = 0;

    let percentAmt = (billAmt * tipPercent) / 100;
    console.log("percent Amount is: ", percentAmt);
    tipAmt = (percentAmt) / peopleCount;
    console.log("tip amount per person is: ", tipAmt)
    totalAmt = (billAmt + percentAmt) / peopleCount;
    console.log("total amount per person is: ", totalAmt)

    return [tipAmt, totalAmt];
}