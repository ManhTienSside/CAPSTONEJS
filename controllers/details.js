let amountEle = document.getElementById('amount');
let amount = amountEle.value;
function render(amount) {
    amountEle.value = amount;
}
//plus
function handPlus() {
    amount++;
    render(amount);
}
document.getElementById('plus').onclick = handPlus;
//minus
function handMnus() {
    if(amount>1){
        amount--;
    }
    render(amount);
}
document.getElementById('minus').onclick = handMnus;

amountEle.addEventListener('input', () =>{
    amount = parseInt(amountEle.value);
    amount = (isNaN(amount)||amount==0)?1:amount;
    render(amount);
});

const activeSize = document.querySelectorAll('.sizeItems');
activeSize.forEach(link => {
    link.addEventListener('click', ()=>{
        document.querySelector('.active').classList.remove('active');
        link.classList.add('active');
    })
})