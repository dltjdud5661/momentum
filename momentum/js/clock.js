// 시계 만드는 법 : h2를 받아와서 innerText 하기
const clock = document.querySelector('h2#clock');

// maxlength = 2 만들기 + 유형 변환
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock();
setInterval(getClock, 1000);
// 웹사이트가 load 되자마자 getClock()을 실행하고, 1초마다 다시 실행시킴
