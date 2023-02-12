document.getElementById('btn-depo').addEventListener('click',function(){
    // console.log('clicked');
    const depoValue = document.getElementById('deposite')
    const newDepositeAmountString = depoValue.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString)

    // console.log(amount);

    const depositTotallValue = document.getElementById('depo-totall')
    const previousDepoTotallString = depositTotallValue.innerText;
    const previousDepoTotall = parseFloat(previousDepoTotallString)
   
   
    
    const currentDepositeTotall = previousDepoTotall + newDepositeAmount
    depositTotallValue.innerText = currentDepositeTotall;

    const balanceTotallValue = document.getElementById('balance-totall');
    const previousBanlaceTotallString = balanceTotallValue.innerText
    const balanceTotallIs = parseFloat(previousBanlaceTotallString);

    const currentBalanceTotall = balanceTotallIs + newDepositeAmount;
    balanceTotallValue.innerText= currentBalanceTotall






    // Avoid old value
    depoValue.value = ''



});