const loginBtn = document.querySelector('#login_btn');
loginBtn.addEventListener('click', ()=>{
    window.location.assign('https://santuhat.github.io/spring-festival-lottery/activity.html');
})

const password = document.querySelector('.password');
const phone = document.querySelector('.phone');
const visibilityOn = document.querySelector('.visibility_on');
const visibilityOff = document.querySelector('.visibility_off');

function eyesShow(e){
    console.log(e.target.nodeName);
    if(e.target.nodeName === 'SPAN'){
        visibilityOn.style.display = 'block';
        visibilityOff.style.display = 'none';
        password.type = 'text';
    }
}

function eyesClose(e){
    if(e.target.nodeName === 'SPAN'){
        visibilityOn.style.display = 'none';
        visibilityOff.style.display = 'block';
        password.type = 'password';
    }
}

visibilityOn.addEventListener('click', eyesClose);
visibilityOff.addEventListener('click', eyesShow);

const alertPhone = document.querySelector('.alert_phone');
const alertPwd = document.querySelector('.alert_pwd');

password.addEventListener('change', () => {
    if(password.value === '' || checkPassword(password.value) == false){
        alertPwd.textContent = `密碼格式不正確(至少 6~12 位英數字)`;
    }else{
        alertPwd.textContent = '';
    }
})

phone.addEventListener('change', () => {
    if(phone.value === '' || validatePhone(phone.value) == false){
        alertPhone.textContent = `請填寫正確的電話格式`;
        return;
    }else{
        alertPhone.textContent = '';
    }
})

function checkPassword(password) {
    let pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[a-z]).{6,20}$/;
    if (password.match(pwd)) {
        return true;
    } 
    return false;
}

function validatePhone(phone) {
    if (/^[09]{2}\d{8}$/.test(phone)) {
        return true;
    }
    return false;
}