// 랜덤번호 지정
// 유저가 번호를 입력한다. 그리고 go 라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면 맞췄습니다!
// 랜덤번호 < 유저번호 down
// 랜덤번호 > 유저번호 up
// reset 버튼 누르면 게임 리셋
// 5번의 기회를 다 쓰면 게임 끝(더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려주고 기회 안 깎음
// 유저가 이미 입력한 숫자를 또 입력하면 알려주고 기회 안 깎음

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click", play);

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

function play(){
    let userValue = userInput.value;
    if(userValue < computerNum){
        resultArea.textContent = "UP!!!";
    }else if(userValue > computerNum){
        resultArea.textContent = "DOWN!!!";
    }else{
        resultArea.textContent = "맞추셨습니다!!!";
    }
}

pickRandomNum();