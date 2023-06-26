function setLocalStorage(account) {
    localStorage.setItem('account',JSON.stringify(account));
}
function getLocalStorage() {
    var acc = JSON.parse(localStorage.getItem('account'));
    if(acc!== null){
        
    }
}
getLocalStorage();
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



