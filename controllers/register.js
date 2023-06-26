const validation = new Validation();
function typeID(nameID) {
    return document.getElementById(nameID).value;
}
function addUser(){
    var gender = document.querySelector("input[name='gender']:checked").value;
    var email = typeID('emailtxt');
    var password = typeID('passtxt');
    var comfirmPassword = typeID('confirmPasstxt');
    var name = typeID('nametxt');
    var phone = typeID('phonetxt');
    var isValid= true;
    isValid &= validation.checkEmpty(email,'spanEmail','please typping input and must not space')
    && validation.checkEmail(email,'spanEmail','Need input correct form email');
    isValid &= validation.checkconfirmpass(password,comfirmPassword,'spanPassword','not matching password')
    && validation.checkPassWord(password,'spanPassword','please correct contain at least 1 numeric character, 1 uppercase character, 1 special character');
    isValid &= validation.checkEmpty(name,'spanName','please typping input and must not space') 
    && validation.checkName(name,'spanName','name just value String');
    isValid &= validation.checkPhone(phone,'spanPhone','number phone need from 9 to 10 number');
    if(isValid){
        var user = new User(email,password,name,gender,phone);
            axios({
                method: 'post',
                url: 'https://shop.cyberlearn.vn/api/Users/signup',
                data: user
            }).then(function (result) {
                //thanhcong
                alert('Đã đăng kí thành công');
                window.location.href="login.html";
            }).catch(function (error) {
                console.log(error);
                alert(error.response.data.message);
            });
    }
}
document.querySelector('.btbRegister').onclick = addUser;