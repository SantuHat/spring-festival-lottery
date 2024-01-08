import Swal from "sweetalert2";
const exchangeBtn = document.querySelector('.exchange_btn');
const memberPoint = document.querySelector('.memberPoint');
const exchangeJutPoint = document.querySelector('#exchangeJutPoint');
const lotteryNumGroup = document.querySelector('.lotteryNum_group');
let lotteryNum = 1020800001;


// 點擊兌換按鈕
exchangeBtn.addEventListener('click', () => {
    // 兌換提示框
    Swal.fire({
        title: '確認兌換',
        text: '此次兌換將會得到?組抽獎號碼',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '是',
        cancelButtonText: '否',
        confirmButtonColor: "#a98152",
    }).then((result) => {
        if (result.isConfirmed) {
            let currentMemberPoint = parseInt(memberPoint.value);
            let exchangedPoint = parseInt(exchangeJutPoint.value);
            // 檢查是否有足夠的點數進行兌換
            if (currentMemberPoint >= exchangedPoint && exchangedPoint !== 0) {
                // 更新會員點數並清空輸入框
                memberPoint.value = currentMemberPoint - exchangedPoint;
                exchangeJutPoint.value = '';
                
                // 抽獎號碼暫時用+1呈現
                lotteryNumGroup.innerHTML += `<span class="d-inline-block px-2 py-2">${lotteryNum}</span>`
                lotteryNum++;

                // 顯示兌換成功訊息
                Swal.fire({
                    title: '兌換成功',
                    icon: 'success',
                    confirmButtonColor: "#a98152"
                });
            } else {
                // 如果會員點數不足，顯示錯誤訊息
                Swal.fire({
                    title: '錯誤',
                    text: '會員點數不足或沒有選擇兌換的點數!',
                    icon: 'error',
                    confirmButtonColor: "#a98152"
                });
            }
        } 
    });
})


// 拆分號碼
let data = ['1020800036~1020800037', '1020800042~1020800044'];
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
