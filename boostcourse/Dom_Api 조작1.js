// [1] 몇가지 유용한 속성 [ tagName, textContent, nodeType ]
// 1. a.tagName  => Table, Div etc
// 2. a.innerHTML => 하위의 HTML 출력
// 3. a.elementChild => 첫번째 값이 출력

// [2]이동 [ firstChild, firstElementChild ]

// [3] DOM 조작 [ Remove, Append, Insert, replaceChild .. ]

var div = document.createElement("div");
var str = document.createTextNode("오늘 하루는 정말 좋아");
div.appendChild(str);

// [4] 디테일한 조작 예시

var base = docuemnt.querySelector(".w3-table-all tr:nth-child(3");
var parent = docuemnt.querySelector(".w3-table-all tbody");
var div = docuemnt.createElement("div");
var str = document.createTextNode("여기에 추가됐어요");
div.append(str);

parent.insertBefore(div, base);

// [5] HTML 문자열로 처리해주는 DOM API ( inner .. );
let getter = parent.innerHTML;
parent.innerHTML = "hello world";
