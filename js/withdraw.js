document.getElementById("btn-withdraw").addEventListener("click", function () {
  // console.log(90);
  const withvalue = document.getElementById("withdraw-field");
  const newWithDrawFieldString = withvalue.value;
  const finallWithdrawAmount = parseFloat(newWithDrawFieldString);
  withvalue.value = "";
  if (isNaN(finallWithdrawAmount)) {
    alert("please provide a valid input");
    return;
  }
  // console.log(finallWithdrawAmount);

  const previouswithdraw = document.getElementById("withdraw-totall");
  const withdrawTotallAmount = previouswithdraw.innerText;
  const withdrawAmount = parseFloat(withdrawTotallAmount);

  withvalue.value = "";

  const balanceTotallValueWithdraw = document.getElementById("balance-totall");
  const previousBanlaceTotallString = balanceTotallValueWithdraw.innerText;
  const balanceTotallIs = parseFloat(previousBanlaceTotallString);
  if (finallWithdrawAmount > balanceTotallIs) {
    alert("not enought money");
    return;
  }

  const currentWithdrawTotall = finallWithdrawAmount + withdrawAmount;
  previouswithdraw.innerText = currentWithdrawTotall;

  const currentBalanceTotallWithdraw = balanceTotallIs - finallWithdrawAmount;

  balanceTotallValueWithdraw.innerText = currentBalanceTotallWithdraw;
});
