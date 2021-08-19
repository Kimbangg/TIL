function TodoForm({ $target, onSumbit }) {
  const $form = document.createElement("form");

  $target.appendChild($form);

  let isInit = false;

  this.render = () => {
    $form.innerHTML = `
      <input type="text" name="todo"/>
      <button>Add</button>
    `;

    if (!isInit) {
      $form.addEventListener("submit", (e) => {
        e.preventDefault();

        const $todo = $form.querySelector("input[name=todo]");
        const text = $todo.value;

        if ($todo.value.length >= 2) {
          onSumbit(text);
        } else {
          alert("2글자 이상 작성을 하세요");
        }

        $todo.value = "";
      });

      isInit = true;
    }
  };

  this.render();
}
