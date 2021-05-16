let reds = document.querySelectorAll(".red");
let parent = document.querySelector("ul");

for (let i = 0; i < reds.length; i++) {
  parent.removeChild(reds[i]);
}
