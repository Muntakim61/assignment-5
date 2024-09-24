function showSectionById(id){
    // hide all the sections
    document.getElementById('transaction-history-section').classList.add('hidden')
    document.getElementById('main-donation-section').classList.add('hidden')
    // show selected sections
    document.getElementById(id).classList.remove('hidden')
    document.getElementById('main-body').classList.remove('h-screen')
    document.getElementById('main-body').classList.add('h-[70%]')
}
function changeColorById(id){
    document.getElementById('btn-donation').classList.remove('bg-[#B4F461]')
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]')
    document.getElementById('btn-history').classList.remove('bg-neutral-300')
    document.getElementById('btn-donation').classList.remove('bg-neutral-300')
    if(id == 'btn-donation'){
        document.getElementById(id).classList.add('bg-[#B4F461]');
        document.getElementById('btn-history').classList.add('bg-neutral-300');
    }
    else if(id == 'btn-history'){
        document.getElementById(id).classList.add('bg-[#B4F461]');
        document.getElementById('btn-donation').classList.add('bg-neutral-300');
    }
}