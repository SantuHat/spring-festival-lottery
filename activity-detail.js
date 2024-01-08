const lotteryNumGroup = document.querySelector('.lotteryNum_group');

let data = ['1020800036~1020800037', '1020800042~1020800044'];

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
            str += `<span class="d-inline-block px-2 py-2">${i}</span>`
        }
    })
    lotteryNumGroup.innerHTML = str;
}
splitNum();