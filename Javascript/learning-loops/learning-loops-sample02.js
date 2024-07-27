// input number 값
const inputNumber = document.querySelector("#user-number");
// button 값
const sumBtn = document.querySelector("#calculator > button");
// p 결과창 값
const pEle = document.querySelector(".output");

function sumNumber() {
  // input number value 값
  let inputNumberValue = parseInt(inputNumber.value);
  console.log(inputNumberValue);
  // button 클릭 -> input number value 값 0에서 입력 값까지 모두 더하기
  let defaultNum = 0;
  for (let i = 0; i <= inputNumberValue; i++) {
    defaultNum += i; // <---------------------------------- 이부분 더 숙지하기!!!!!
  }
  // 더한 값 p 결과창에 띄우기
  pEle.style.display = "block";
  pEle.textContent = defaultNum;
}
sumBtn.addEventListener("click", sumNumber);

//----------------------------------------------------------------------------------------------------

// button 값
const colorBtn = document.querySelector("#highlight-links > button");
// p안에 있는 a 값
const aElements = document.querySelectorAll("#highlight-links  a");

// button 클릭 -> p안에 있는 a 배경색 변경
function changeBgColor() {
  for (const aElement of aElements) {
    aElement.classList.add("highlight");
  }
}
colorBtn.addEventListener("click", changeBgColor);

//----------------------------------------------------------------------------------------------------

// button 값
const dataBtn = document.querySelector("#user-data > button");
// ul 값
const ulEle = document.querySelector("#user-data > ul");

// objects 값 작성
const myData = {
  name: "Austine",
  age: 34,
  gender: "male",
};

// button click -> ul에 objects 값 넣기
function postData() {
  ulEle.innerHTML = " ";
  for (const key in myData) {
    const myDataValue = myData[key];
    const myDataKey = key;

    // li 요소 생성
    const liEle = document.createElement("li");
    // li 요소에 myData 넣기
    liEle.textContent = myDataKey + ": " + myDataValue;
    // li 요소 ul에 넣기
    ulEle.appendChild(liEle);
  }
}

dataBtn.addEventListener("click", postData);

//----------------------------------------------------------------------------------------------------

// input number 값, value 값
const targetNumber = document.getElementById("user-target-number");
// button 값
const diceBtn = document.querySelector("#statistics > button");
// ul 값
const diceUlEle = document.getElementById("dice-rolls");

// button click -> 1~6 사이 랜덤 숫자 선택
function rollDiceTillSame() {
  diceUlEle.innerHTML = " ";

  const targetNumberValue = parseInt(targetNumber.value);
  console.log(typeof targetNumberValue);

  let roleDice = false;
  let rollTimes = 0;

  while (!roleDice) {
    if (targetNumberValue < 1 || targetNumberValue > 6) {
      alert("1 ~ 6 사이를 고르세요");
      roleDice = true;
      break; // 루프를 빠져나간다
    }

    // input number 값 하고 랜덤 숫자가 같을때까지 랜덤 숫자 돌리기
    rollTimes++;
    const randomNum = Math.ceil(Math.random() * 6);
    console.log(typeof randomNum);

    // li요소 생성
    const diceLiEle = document.createElement("li");
    // li요소에 결과창 입력
    diceLiEle.textContent = `random dice: ${randomNum} chosen num: ${targetNumberValue}`;
    // ul에 결과창 띄우기
    diceUlEle.appendChild(diceLiEle);

    // 숫자가 같으면 반복을 멈춤
    if (randomNum === targetNumberValue) {
      roleDice = true;
    }

    // -> input number 값은 Y에
    const selectedNumEle = document.getElementById("output-target-number");
    selectedNumEle.textContent = targetNumberValue;
    // -> 반복 횟수는 X에
    const totalRollsEle = document.getElementById("output-total-rolls");
    totalRollsEle.textContent = rollTimes;
  }
}

diceBtn.addEventListener("click", rollDiceTillSame);
