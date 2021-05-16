let bluenode = document.querySelector("section .blue");

for (let i = 0; i < bluenode.length; i++) {
  let section = bluenode[i].closest("section");
  let h2 = section.querySelector("h2");
  section.removeChild(h2);
}
