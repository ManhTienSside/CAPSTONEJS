function Validation() {
    this.checkEmpty = function(type,span,message) {
        if(type === ''){
            document.getElementById(span).innerHTML = message;
            document.getElementById(span).style ='block' ;
            return false;
        }else{
            return true;
        }
    }
}