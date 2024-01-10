const lotteryNumGroup = document.querySelector('.lotteryNum_group');
const headerPrize = document.querySelector('.header_prize');
const secondPrize = document.querySelector('.second_prize');
const thirdPrize = document.querySelector('.third_prize');
const otherPrize = document.querySelector('.other_prize');
const winningMessage = document.querySelector('.winningMessage');

let data = ['1020800043~1020800044', '1020800760~1020800769'];
let isWinner = false; // 預設為未中獎

function getLotteryNum(){
}

// 拆分號碼
function splitNum(){
    let str = '';
    data.forEach((v)=>{
        let lotteryNumInterval = v.split('~');
        let startNum = parseInt(lotteryNumInterval[0]);
        let endNum = parseInt(lotteryNumInterval[1]);
        // let numOfGroups = (endNum - startNum) + 1;
        for(let i = startNum; i <= endNum; i++){
            let span = document.createElement('span');
            span.textContent = i;
            span.classList.add('d-inline-block', 'px-2', 'py-2');

            if(headerPrize.textContent == i){
                span.classList.add('text-danger', 'fw-bold');
                isWinner = true;
            }else if(secondPrize.textContent == i){
                span.classList.add('text-blue', 'fw-bold');
                isWinner = true;
            }else if(thirdPrize.textContent == i){
                span.classList.add('text-green', 'fw-bold');
                isWinner = true;
            }else if(otherPrize.textContent == i){
                span.classList.add('text-orange', 'fw-bold');
                isWinner = true;
            }
            
            str += span.outerHTML;
        }
    })

    lotteryNumGroup.innerHTML = str;
    displayWinningMessage();
}

splitNum();


function displayWinningMessage(){
    if (isWinner) {
        winningMessage.textContent = `恭喜您中獎!`;
        winningMessage.classList.add('animate_shakeX');
    }else{
        winningMessage.textContent = `您未中獎!`
    }
}