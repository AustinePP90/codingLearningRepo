// input 값(타이핑 영역) 구하기
const inputText = document.getElementById("product-name");
// span 값(기본 글자수 영역) 구하기
const chars = document.getElementById("remaining-chars");

const textMaxLength = 60; // span 최대값 하드코딩

function alertTextValue() {
  // input 타이핑 값, 타이핑 글자수 구하기
  const textValue = inputText.value;
  const textValueLength = textValue.length;
  // span(60)값에서 input 타이핑 글자수 빼기
  const remainChars = textMaxLength - textValueLength; //
  // 뺀 값을 span 값에 입력(업데이트)
  chars.textContent = remainChars;
  // 업데이트 된 span 값이 10이하이면 글자색, 배경색 변경
  if (remainChars === 0) {
    inputText.classList.add("error");
    chars.classList.add("error");
  } else if (remainChars <= 10) {
    inputText.classList.add("warning");
    chars.classList.add("warning");
    inputText.classList.remove("error");
    chars.classList.remove("error");
  } else {
    inputText.classList.remove("warning");
    chars.classList.remove("warning");
  }
}

inputText.addEventListener("input", alertTextValue);
