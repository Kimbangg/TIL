export default function Header({ $target, text }) {
  const $header = document.createElement("h1");

  console.log($target);

  this.render = () => {
    $header.textContent = text;
  };

  this.render();
}
