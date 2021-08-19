export default function TodoComments({ $target, initialState }) {
  const $todoComments = document.createElement("div");

  $target.appendChild($todoComments);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { selectedTodo, comments } = this.state;

    if (!selectedTodo || !comments) {
      $todoComments.innerHTML = "";
      return;
    }

    $todoComments.innerHTML = `
      <h2>${selectedTodo.text}의 댓글들</h2>
      <ul>
        ${
          comments.length > 0
            ? comments.map((comment) => `<li>${comment.content}</li>`).join("")
            : "댓글이 없습니다."
        }
      </ul>
    `;
  };

  this.render();
}
