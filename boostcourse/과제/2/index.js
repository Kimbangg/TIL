let mango = document.createElement("li");
let mangoText = document.createTextNode("Mango");
mango.appendChild(mangoText);

let parent = document.querySelector("ul");
let banana = document.querySelector("li:nth-child(3)");
parent.insertBefore(mango, banana);
