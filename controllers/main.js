function getArrayShoes() {
    axios({
        method: 'get',
        url: 'https://shop.cyberlearn.vn/api/Product',
        
        })
        .then(function (response) {
            console.log(response.data);
            showInfo(response.data);
        }).catch(function (error) {
            console.log(error);
        });
}

getArrayShoes();
function showInfo(array) {
    var content = '';
    array.map(shoes => {
        var cardItems= 
        `<div class="card">
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
            <p>$${shoes.price}</p>
            <a href="./view/detail.html" class="btn btn-primary"
            >Go somewhere</a
            >
        </div>
        </div>`
        content += cardItems;
    });
    document.querySelector('.product__cover').innerHTML = content;
}