const validation = new Validation();

function setLocalStorage(account) {
    localStorage.setItem('account',JSON.stringify(account));
}
function getLocalStorage() {
    JSON.parse(localStorage.getItem('account'));
}
getLocalStorage();

function account() {
    var email = document.getElementById('emailLogin').value;
    var password = document.getElementById('passLogin').value;
    var isValid = true;
    isValid &= validation.checkEmpty(email,'spanEmail','please typping input and must not space')
    && validation.checkEmail(email,'spanEmail','Need input correct form email');
    isValid &=validation.checkEmpty(password,'spanPassword','please typping input and must not space')
    && validation.checkPassWord(password,'spanPassword','please correct contain at least 1 numeric character, 1 uppercase character, 1 special character');
    if(isValid){
        var user = {
            email: email,
            password: password,
        };
        axios({
            method: 'post',
            url: 'https://shop.cyberlearn.vn/api/Users/signin',
            data: user
        }).then(function (result) {
            //thanhcong
            console.log(result.data);
            setLocalStorage(result.data.content);
            window.location.href="../index.html";
        }).catch(function (error) {
            console.log(error);
            alert('Đăng Nhập Thất Bại');
        });
    }
}
document.querySelector('.btbAccount').onclick =account; 