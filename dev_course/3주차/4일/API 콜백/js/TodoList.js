export default function TodoList({ $target, initialState, onClick }) {
  const $todoList = document.createElement("div");
  $target.appendChild($todoList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $todoList.innerHTML = `
      <h1>Simple TodoList</h1>
      <ul>
        ${this.state
          .map((todo) => `<li data-id="${todo.id}">${todo.text}</li>`)
          .join("")}
      </ul>
    `;

    $todoList.querySelectorAll("li").forEach(($li) => {
      $li.addEventListener("click", (e) => {
        const { id } = e.target.dataset;

        if (id) {
          onClick(parseInt(id));
        }
      });
    });
  };

  this.render();
}
