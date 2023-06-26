function ListCart() {
    this.arrCart = [];
    this.addCart = function (cardItems) {
        this.arrCart.push(cardItems);
    }
    this.findCart = function (id) {
        var findOfIndex = -1;
        this.arrCart.map(function(cardItems,index){
            if(cardItems.id === id){
                findOfIndex = index;
                return;
            }
        });
        
    }
    this.deleteCart = function (id) {
        var deleteIndex = this.findCart(id);
        if(deleteIndex>-1){
            this.arrCart.splice(deleteIndex,1);
        }
    }
    this.updateQualityCart = function (quality) {
        var index = this.findCart(cart.id);
        if(index>-1) {
            this.arrCart[index]=quality;
        }
    }
}