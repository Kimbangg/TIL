let mango = document.createElement("li");
let mangoText = document.createTextNode("Mango");

mango.appendChild(mangoText);

let parent = document.querySelector("ul");
parent.appendChild(mango);
