// Mandatory Common Function
function updateBalance(donation)
{
    const mainText = document.getElementById('main-account').innerText
    console.log(typeof mainText)
    console.log(typeof donation)
    console.log(donation)
    const mainAccountBalance = parseFloat(mainText)
    console.log(typeof mainAccountBalance)
    document.getElementById('main-account').innerText = mainAccountBalance-donation
}
// Noakhali JS section
document.getElementById('btn-donate-noakhali')
.addEventListener('click',function(e){
    e.preventDefault();
    // console.log('Noakhali button clicked')
    const donateText = document.getElementById('input-donate-noakhali').value
    const noakhaliBalance = document.getElementById('noakhali-donate-account').innerText
    // console.log(donateText, noakhaliBalance)
    const donateAmount = parseFloat(donateText);
    // Main account balance check
    const m = document.getElementById('main-account').innerText
    // console.log(typeof m)
    const mA = parseFloat(m)
    // console.log(typeof m)
    if(donateAmount<0){
        alert('Invalid Input')
    }
    else if(donateAmount > mA){
        alert('Insufficient Balance.Please top up')
    }
    else{
        const noakhaliBalanceNumber = parseFloat(noakhaliBalance);
        // console.log(donateAmount + noakhaliBalanceNumber)
        const result = donateAmount + noakhaliBalanceNumber
        document.getElementById('noakhali-donate-account').innerText = result
        updateBalance(donateAmount)
    } 
})
// Feni JS section
document.getElementById('btn-donate-feni')
.addEventListener('click',function(event){
    event.preventDefault();
    // console.log('Noakhali button clicked')
    const donateText = document.getElementById('input-donate-feni').value
    const feniBalance = document.getElementById('feni-donate-account').innerText
    // console.log(donateText, noakhaliBalance)
    const donateAmount = parseFloat(donateText);
    // Main account balance check
    const m = document.getElementById('main-account').innerText
    // console.log(typeof m)
    const mA = parseFloat(m)
    // console.log(typeof m)
    if(donateAmount<0){
        alert('Invalid Input')
    }
    else if(donateAmount > mA){
        alert('Insufficient Balance.Please top up')
    }
    else{
        const feniBalanceNumber = parseFloat(feniBalance);
        // console.log(donateAmount + noakhaliBalanceNumber)
        const result = donateAmount + feniBalanceNumber
        document.getElementById('feni-donate-account').innerText = result
        updateBalance(donateAmount)
    } 
})
// Qouta Protest JS section
document.getElementById('btn-donate-qouta')
.addEventListener('click',function(e){
    e.preventDefault();
    // console.log('Noakhali button clicked')
    const donateText = document.getElementById('input-donate-quota').value
    const quotaBalance = document.getElementById('quota-donate-account').innerText
    // console.log(donateText, noakhaliBalance)
    const donateAmount = parseFloat(donateText);
    // Main account balance check
    const m = document.getElementById('main-account').innerText
    // console.log(typeof m)
    const mA = parseFloat(m)
    // console.log(typeof m)
    if(donateAmount<0){
        alert('Invalid Input')
    }
    else if(donateAmount > mA){
        alert('Insufficient Balance.Please top up')
    }
    else{
        const quotaBalanceNumber = parseFloat(quotaBalance);
        // console.log(donateAmount + noakhaliBalanceNumber)
        const result = donateAmount + quotaBalanceNumber
        document.getElementById('quota-donate-account').innerText = result
        updateBalance(donateAmount)
    } 
})
