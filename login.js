const loginBtn = document.querySelector('#login_btn');
loginBtn.addEventListener('click', ()=>{
    window.location.assign('https://santuhat.github.io/spring-festival-lottery/activity.html');
})

const password = document.querySelector('#password');
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