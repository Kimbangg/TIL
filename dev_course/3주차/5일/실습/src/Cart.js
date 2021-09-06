export default function Cart({ $target, initialState, onRemove }) {
  const $cart = document.createElement("div");

  $target.appendChild($cart);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const calculateTotalPrice = () => {
    const { basePrice, selectedOptions } = this.state;
    return selectedOptions.reduce((acc, option) => {
      return acc + (basePrice + option.optionPrice) * option.ea;
    }, 0);
  };

  this.render = () => {
    const { productName, basePrice, selectedOptions } = this.state;
    console.log(selectedOptions);

    $cart.innerHTML = `
      <ul>
        ${
          Array.isArray(selectedOptions) &&
          selectedOptions
            .map(
              (option) => `
          <li>${productName} - ${option.optionName} | ${
                basePrice + option.optionPrice
              }, ${option.ea}개</li>
        `
            )
            .join("")
        }
      </ul>
      <div>
        ${calculateTotalPrice()} 원
      </div>
    `;
  };

  this.render();
}
