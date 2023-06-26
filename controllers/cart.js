const listCart = new ListCart();
function setLocalStorage(){
    localStorage.setItem('cart',JSON.stringify(listCart.arrCart));
}
function getLocalStorage() {
    var showData =JSON.parse(localStorage.getItem('cart'));
    if(showData!== null){
        showCart(showData);
        listCart.arrCart = showData;
    } 
}
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    getbyid(myParam);
}
function getbyid(id) {
axios({
    method: 'get',
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    }).then(function (response) {
        console.log(response.data);
        //them san pham vao local
        var id = response.data.content.id;
        var name = response.data.content.name;
        var price = response.data.content.price;
        var image = response.data.content.image;
        var quality = Number(document.getElementById('amount').value);
        var cardItems = new CardItems(id,name,Number(price),image,quality);
        cardItems.sum();
        listCart.addCart(cardItems);
        setLocalStorage();
        showCart(listCart.arrCart);
    }).catch(function(error){
        console.log(error);
    });
}
function updateCart() {
    var quality = Number(document.getElementById('amount').value);
    var cardItems = new CardItems(id,name,Number(price),image,quality);
    cardItems.sum();
    listCart.updateQualityCart(cardItems);
    setLocalStorage();
    showCart(listCart.arrCart);
}
function showCart(array) {
    var content = '';
    array.map(function(cart){
        var card = `
            <div class="cart__image">
                <img
                class="img-fluid"
                src="${cart.img}"
                alt="sanpham"
                />
            </div>
            <p class="cart__name">${cart.name}</p>
            <div class="cart__price">${cart.price}</div>
            <div class="cart__count">
                <div class="groupNumber">
                    <input id="amount" type="number" min="1" value="${cart.quality}" />
                </div>
            </div>
            <p class="card__sum">${cart.total}</p>
            <div class="card__action">
                <i onclick="deleteCart('${cart.id}')" class=" fa-sharp fa-solid fa-trash"></i>
            </div>
        `
        content +=card;
    })
    document.querySelector('.cart__Items').innerHTML = content;
}
function deleteCart(id) {
    listCart.deleteCart(id);
    showCart(listCart.arrCart);
    setLocalStorage();
}


function getArrayShoes() {
    axios({
        method: 'get',
        url: 'https://shop.cyberlearn.vn/api/Product',
        })
        .then(function (response) {
            showInfo(response.data);
        }).catch(function (error) {
            console.log(error);
        });
}
getArrayShoes();

function showInfo(array) {
    var content = '';
    array.content.map(shoes => {
        var cardItems= 
        `<div class="card">
        <a href="../view/detail.html?id=${shoes.id}">
        <img
            src="${shoes.image}"
            class="card-img-top"
            alt="items"
        />
        <div class="card-body">
            <h5 class="card-title">${shoes.name}</h5>
            <p class="card-text">
            ${shoes.description}
            </p>
            <p class="card-text">$${shoes.price}</p>
            <button class ="btn btn-primary"> Buy Now </button>
        </div>
        </a>
        </div>`
        content += cardItems;
    });
    document.querySelector('.product__cover').innerHTML = content;
}
document.getElementById('txtnotify').onkeyup = function () {
    var name = document.getElementById('txtnotify').value;
    findByCatogogy(name);
}
function findByCatogogy(categoryId) {
    axios({
        method: 'get',
        url: `https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${categoryId}`,
        })
        .then(function (response) {
            console.log(response);
            showInfo(response.data);
        }).catch(function (error) {
            console.log(error);
        });
}
