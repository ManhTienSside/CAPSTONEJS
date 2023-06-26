let amountEle = document.getElementById('amount');
let amount = amountEle.value;
function render(amount) {
    amountEle.value = amount;
}


const activeSize = document.querySelectorAll('.sizeItems');
activeSize.forEach(link => {
    link.addEventListener('click', ()=>{
        document.querySelector('.active').classList.remove('active');
        link.classList.add('active');
    })
});

amountEle.addEventListener('input', () =>{
    amount = parseInt(amountEle.value);
    amount = (isNaN(amount)||amount==0)?1:amount;
    render(amount);
});
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    getProductById(myParam);
    console.log(myParam);
}
function getProductById(id) {
    axios({
        method: 'get',
        url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    }).then(function (response) {
        console.log(response.data);
        var id = response.data.content.id;
        var description = response.data.content.description;
        var image = response.data.content.image;
        var name = response.data.content.alias;
        var price = response.data.content.price;
        var quality = document.getElementById('amount').value;
        document.getElementById('nameDetail').innerHTML= name;
        document.getElementById('priceDetail').innerHTML= price;
        document.getElementById('descriptionDetail').innerHTML= description;
        document.getElementById('nameDetail').innerHTML= name;
        document.getElementById('imageDetail').setAttribute("src", image);
        document.getElementById('changeCart').setAttribute("href",`../view/cart.html?id=${id}`);
        doubleId(id);
    }).catch(function (error){
        console.log(error);
    })
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
