let apple = document.querySelector("li:nth-child(1)");
let strawberry = document.querySelector("li:nth-child(5)");
let parent = document.querySelector("ul");

parent.insertBefore(apple, strawberry);
