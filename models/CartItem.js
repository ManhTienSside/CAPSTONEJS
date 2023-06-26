function CardItems(id,name,price,img,quality) {
    this.id = id;
    this.name= name;
    this.price = price;
    this.img = img;
    this.quality =quality;
    this.total = 0;
    this.sum = function () {
        this.total = this.price * this.quality;
    }
}