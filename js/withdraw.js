document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFeildValueById('withdraw-feild');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;

    setTextElementValueById('withdraw-total', newWithdrawTotal);


    const previousBalanceAmount = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})


