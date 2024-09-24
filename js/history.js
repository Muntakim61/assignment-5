// console.log('History was here')
// document.getElementById('btn-history').addEventListener('click',function(){
//     // console.log('History was clicked')
    
// })
function writeHistory(id)
{
    const divName = document.createElement('div');
    const paragraph1 = document.createElement('p');
    const paragraph2 = document.createElement('p');
    divName.className = 'hero border rounded-xl w-[70%] display: block mx-auto p-8 shadow-lg';
    divName.innerHTML = '<h1>Hello, I am a Hero div!</h1>';
    paragraph1.className = 'font-bold mb-4 text-xl'
    const parent=document.getElementById('transaction-history-content');
    if (parent) {
         parent.appendChild(divName);
    }else
    {
        console.log('The div with id="transaction-history-content" was not found.');
    }


} 