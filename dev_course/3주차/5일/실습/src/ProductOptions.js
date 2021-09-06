export default function ProductOptions({ $target, initialState, onSelect }) {
  const $select = document.createElement("select");

  $target.appendChild($select);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const createOptionFullName = ({ optionName, optionPrice, stock }) => {
    return `${optionName}  | ${
      optionPrice > 0 ? `(옵션가 :${optionPrice}) ` : ""
    } | ${stock > 0 ? `재고 :  ${stock}` : "재고 없음"}`;
  };

  $select.addEventListener("change", (e) => {
    const optionId = parseInt(e.target.value);

    const option = this.state.find((option) => option.optionId === optionId);

    if (option) {
      onSelect(option);
    }
  });

  this.render = () => {
    if (this.state && Array.isArray(this.state)) {
      $select.innerHTML = `
        <option>선택하세요</option>
        ${this.state
          .map(
            (option) =>
              `<option ${option.stock === 0 ? "disabled" : ""} value="${
                option.optionId
              }">${createOptionFullName(option)}</option>`
          )
          .join("")}
      `;
    }
  };

  this.render();
}
