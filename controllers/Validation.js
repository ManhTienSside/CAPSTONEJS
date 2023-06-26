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
    this.checkName = function (type,span,message) {
        var pattern = 
        /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if(type.match(pattern)){
            // hop le
            // document.getElementById(span).innerHTML = '';
            // document.getElementById(span).style.display ='none' ;
            return true;
        }
        // ko ho kle
        document.getElementById(span).innerHTML = message;
        document.getElementById(span).style ='block' ;
        return false;
    }
    this.checkEmail = function(type,span,message) {
        var pattern =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if(type.match(pattern)){
            // hop le
            document.getElementById(span).innerHTML = '';
            document.getElementById(span).style.display ='none' ;
            return true;
        }
        // ko ho kle
        document.getElementById(span).innerHTML = message;
        document.getElementById(span).style ='block' ;
        return false;
    }
    this.checkPhone = function(type,span,message) {
        var pattern =  /^[0-9]+$/;
        if(type.match(pattern) && type.length >= 9 && type.length <=10 ){
            // hop le
            document.getElementById(span).innerHTML = '';
            document.getElementById(span).style.display ='none' ;
            return true;
        }
        // ko ho kle
        document.getElementById(span).innerHTML = message;
        document.getElementById(span).style ='block' ;
        return false;
    }
    this.checkconfirmpass = function (pass,confirm,span,massage) {
        if(pass == confirm){
            document.getElementById(span).innerHTML = '';
            document.getElementById(span).style.display ='none' ;
            return true;
        }
        document.getElementById(span).innerHTML = massage;
        document.getElementById(span).style ='block' ;
        return false;
    }
    this.checkPassWord = function (value,span,message) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,10}$/;
        if(value.match(pattern)){
            document.getElementById(span).innerHTML = '';
            document.getElementById(span).style.display  ='none' ;
            return true;
        }else {
            document.getElementById(span).innerHTML = message;
            document.getElementById(span).style.display  ='block';
        }
    }
}
