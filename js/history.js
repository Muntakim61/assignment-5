function writeHistory(id , amount)
{
    const divName = document.createElement('div');
    const paragraph1 = document.createElement('p');
    const paragraph2 = document.createElement('p');
    divName.className = 'hero border rounded-xl w-[70%] display: block mx-auto p-8 shadow-2xl mb-8';
    paragraph1.className = 'font-bold mb-4 text-xl'
    const ptext = document.getElementById(id).innerText
    console.log(ptext)
    console.log('Donated Tk ' + amount + ' to ' + ptext)
    paragraph1.innerText = ('Donated Tk ' + amount + ' to ' + ptext)
    paragraph2.innerText = ('Date : ' + new Date())
    console.log(paragraph1.value)

    divName.appendChild(paragraph1)
    divName.appendChild(paragraph2)
    const parent = document.getElementById('transaction-history-content');
    parent.appendChild(divName)


} 