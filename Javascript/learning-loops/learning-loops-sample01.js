const calBtn = document.querySelector("section#calculator > button");
const calOutput = document.getElementById("calculated-sum");
const numberInput = document.getElementById("user-number");

// const numberInputValue = numberInput.value; // function 밖에서는 실행 안 됨!!!

function calInputNumber() {
  const numberInputValue = numberInput.value; // "click" event 발생 후 일어나야 함

  // button 클릭하면 input number value 값 0에서 입력 값까지 모두 더함
  let sumNum = 0;
  for (let i = 0; i <= numberInputValue; i++) {
    sumNum += i;
  }

  // 더한 값을 결과창에 보여주기
  calOutput.innerHTML = sumNum;
  calOutput.style.display = "block";
}

calBtn.addEventListener("click", calInputNumber);

//---------------------------------------------------------------------------------------------------

const highlightBtn = document.querySelector("#highlight-links button");
const allAEles = document.querySelectorAll("a"); // querySelectorAll은 array를 반환한다.

// 자바스크립트에서는 모든 데이터가 object(객체)로 저장된다.
// 객체는 key와 value로 이루어져 있다.
// key와 value 모두 property(속성)라고 부른다.
// key와 value가 필요 없으면 array(배열)로 저장된다. === array(배열)은 key와 value가 없는 object이다.
// array(배열)에서 key는 index이다.
// index는 [0]부터 시작한다.
// const aElements = [allAEle]; // 그렇기 때문에 array데이터를 따로 만들 필요가 없다!!!
console.log(allAEles);

function changeBgColor() {
  for (const allAEle of allAEles) {
    allAEle.classList.add("bg-blue");
  }
}

highlightBtn.addEventListener("click", changeBgColor);

//---------------------------------------------------------------------------------------------------

const userDataBtn = document.querySelector("#user-data > button");
const userDataList = document.getElementById("output-user-data");

const userData = {
  name: "Austine",
  age: 34,
  gender: "male",
};

function displayInfo() {
  userDataList.innerHTML = ""; // ""가 없으면 userData가 계속 만들어진다. "click" 이벤트의 시작을 빈칸으로 만드는 작업!!!

  for (const key in userData) {
    // li 요소 생성
    const listEle = document.createElement("li");
    // li 요소에 userData 넣기
    const dataResult = key + ": " + userData[key];
    listEle.textContent = dataResult;
    // ul 요소에 li 요소 넣기
    userDataList.append(listEle);
  }
}

userDataBtn.addEventListener("click", displayInfo);

//---------------------------------------------------------------------------------------------------

const diceNumberInput = document.getElementById("user-target-number");

const diceRollBtn = document.querySelector("#statistics button");

const diceRollProcess = document.getElementById("dice-rolls");

const targetRolls = document.getElementById("output-target-number");
const totalRolls = document.getElementById("output-total-rolls");

function rollDice() {
  diceRollProcess.innerHTML = "";

  let similarDiceNumber = false;
  let numberOfRolls = 0;

  while (!similarDiceNumber) {
    const diceNumberValue = parseInt(diceNumberInput.value);
    targetRolls.textContent = diceNumberValue;

    const dice = Math.ceil(Math.random() * 6);

    const resultNumberEle = document.createElement("li");
    resultNumberEle.textContent =
      "dice: " + diceNumberValue + ", " + "random dice: " + dice;
    diceRollProcess.append(resultNumberEle);

    if (diceNumberValue === dice) {
      similarDiceNumber = true;
    }

    numberOfRolls++;
  }

  totalRolls.textContent = numberOfRolls;
}

diceRollBtn.addEventListener("click", rollDice);
