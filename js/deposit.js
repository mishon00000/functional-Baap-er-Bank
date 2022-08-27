function getInputFeildValueById(inputFeildId) {
    const inputFeild = document.getElementById(inputFeildId);
    const inputFeildValueString = inputFeild.value;
    console.log(inputFeildId);
    const inputFeildValue = parseFloat(inputFeildValueString);
    inputFeild.value = ' ';
    return inputFeildValue;

}
function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;

}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFeildValueById('deposit-feild');
    const previousDepositTotal = getTextElementValueById('deposit-total');
    const newDepositTotal = newDepositAmount + previousDepositTotal;

    setTextElementValueById('deposit-total', newDepositTotal);


    const previousBalanceAmount = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})


