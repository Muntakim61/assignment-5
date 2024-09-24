// Mandatory Common Functions
function getMainBalance(){
    const mainText = document.getElementById('main-account').innerText
    const mainAccountBalance = parseFloat(mainText)
    return mainAccountBalance;
}
function updateMainBalance(donation)
{
    // console.log(typeof donation)
    // console.log(donation)
    const mainAccountBalance = getMainBalance();
    // console.log(typeof mainAccountBalance)
    document.getElementById('main-account').innerText = (mainAccountBalance - donation)
}
function calculateNewDonationAmount(a,b)
{
    const c=a+b
    return c
}
function containsLetter(S) {
    const letterPattern=/[a-zA-Z]/;
    return letterPattern.test(S);
}
function getDonatedAmountByID(id){
    const donateText = document.getElementById(id).value
    if(donateText == '')
    {
        alert('Invalid Input.Please try a different input');
        return 0
    }
    if(isNaN(donateText)){
        alert('Invalid Input.Please try a different input');
        return 0
    }
    const donateAmount = parseFloat(donateText);
    if(donateAmount <= 0)
    {
            alert('Invalid Input.Please try a different input');
            return 0
    }
    return donateAmount
}
function getDonatedAccountBalanceByID(id){
    const Balance = document.getElementById(id).innerText
    const BalanceNumber = parseFloat(Balance);
    return BalanceNumber
}
function updateDonatedAmountTextField(id){
    document.getElementById(id).value = '';
}
//Common function ends
// Noakhali donate JS section
document.getElementById('btn-donate-noakhali')
.addEventListener('click',function(e){
    e.preventDefault();
    const noakhaliBalanceNumber = getDonatedAccountBalanceByID('noakhali-donate-account')
    const donateAmount = getDonatedAmountByID('input-donate-noakhali')
    const mA = getMainBalance()
    if(donateAmount<0){
        alert('Invalid Input.Please try a different input')
        updateDonatedAmountTextField('input-donate-noakhali')
    }
    else if(donateAmount > mA){
        alert('Insufficient Balance.Please top up')
        updateDonatedAmountTextField('input-donate-noakhali')
    }
    else{
        const result = calculateNewDonationAmount(donateAmount,noakhaliBalanceNumber)
        document.getElementById('noakhali-donate-account').innerText = result
        updateMainBalance(donateAmount)
        updateDonatedAmountTextField('input-donate-noakhali')
        if(donateAmount!=0){
            writeHistory('noakhali-title',donateAmount)
            my_modal_1.showModal()
        }
    } 
})
// Feni donate JS section
document.getElementById('btn-donate-feni')
.addEventListener('click',function(event){
    event.preventDefault();
    const feniBalanceNumber = getDonatedAccountBalanceByID('feni-donate-account')
    const donateAmount = getDonatedAmountByID('input-donate-feni')
    const mA = getMainBalance()
    if(donateAmount<0){
        alert('Invalid Input.Please try a different input')
        updateDonatedAmountTextField('input-donate-feni')
    }
    else if(donateAmount > mA){
        alert('Insufficient Balance.Please top up')
        updateDonatedAmountTextField('input-donate-feni')
    }
    else{
        const result = calculateNewDonationAmount(donateAmount,feniBalanceNumber)
        document.getElementById('feni-donate-account').innerText = result
        updateMainBalance(donateAmount)
        updateDonatedAmountTextField('input-donate-feni')
        if(donateAmount!=0){
            writeHistory('feni-title',donateAmount)
            my_modal_1.showModal()
        }
            
    } 
})
// Qouta Protest donate JS section
document.getElementById('btn-donate-qouta')
.addEventListener('click',function(e){
    e.preventDefault();
    const quotaBalanceNumber = getDonatedAccountBalanceByID('quota-donate-account')
    const donateAmount = getDonatedAmountByID('input-donate-quota')
    const mA = getMainBalance()
    if(donateAmount<0){
        alert('Invalid Input.Please try a different input')
        updateDonatedAmountTextField('input-donate-quota')
    }
    else if(donateAmount > mA){
        alert('Insufficient Balance.Please top up')
        updateDonatedAmountTextField('input-donate-quota')
    }
    else{
        const result = calculateNewDonationAmount(donateAmount,quotaBalanceNumber)
        document.getElementById('quota-donate-account').innerText = result
        updateMainBalance(donateAmount)
        updateDonatedAmountTextField('input-donate-quota')
        if(donateAmount!=0){
            writeHistory('quota-title',donateAmount)
            my_modal_1.showModal()
        }
    } 
})
