// 1. 명령형

// 버튼을 3개를 만든다.
const $button1 = document.createElement("button");
$button1.textContent = "버튼1";
$button1.className = "button1";
let buttonon1ClickCount = 0;

const $button2 = document.createElement("button");
$button2.textContent = "버튼2";
$button2.className = "button2";
let buttonon2ClickCount = 0;

const $button3 = document.createElement("button");
$button3.textContent = "버튼3";
$button3.className = "button3";
let buttonon3ClickCount = 0;

// 만든 버튼을 화면에 그린다.

const $main = document.querySelector("#app");
$main.appendChild($button1);
$main.appendChild($button2);
$main.appendChild($button3);

// const toggleButton = ($button) => {
//   if ($button.style.textDecoration === "line-through") {
//     $button.style.textDecoration = "none";
//   } else {
//     $button.style.textDecoration = "line-through";
//   }
// };

// 버튼을 클릭하면 삭선이 그어진다.
document.querySelectorAll("button").forEach(($button) => {
  $button.addEventListener("click", (e) => {
    const { target } = e;

    if (target.style.textDecoration === "line-through") {
      target.style.textDecoration = "none";

      if (target.className === "button1") {
        buttonon1ClickCount += 1;
        target.textContent = `버튼 1의 토글 횟수 ${buttonon1ClickCount}`;
      }
    } else {
      target.style.textDecoration = "line-through";
    }
  });
});
