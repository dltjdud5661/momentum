
// 동작할 요소 가져오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetings = document.querySelector("#greetings");

// 반복되는 string은 대문자 변수로 저장(오타 오류 방지)
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// local storage에 정보가 없는 경우(첫 화면)
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // local storage에 뭔가를 저장하면 paintGreetings을 호출하는 순간에 그 정보는 이미 local storage에 저장되어 있음
    paintGreetings(); //인자 생략한 이유: 이미 유저정보가 존재하는 걸 알고 있음
}

// 반복된 코드는 함수로 만들기(saving 2 lines of the code)
// paintGreetings 함수가 하는 일은 화면에 텍스트 출력이 다임
function paintGreetings(username){
    greetings.innerText = `Hello, ${username}`;
    greetings.classList.remove(HIDDEN_CLASSNAME);
}


// (1)JS가 local storage에서 유저정보의 유무 확인하기
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);  //show the form
    loginForm.addEventListener("submit", onLoginSubmit); //event listen
}else{
     paintGreetings(savedUsername);  //show the greetings 
}

 
// 로직 : if(savedUsername === null){ //show the form} else{ //show the greetings}
// 구문 : if-else문, addEventListener(), classList.add(), classList.remove(), localStorage.setItem(), localStorage.getItem(), event.preventDefault(), innerText 



