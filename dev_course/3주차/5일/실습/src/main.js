import ProductPage from "./ProductPage.js";

const $app = document.querySelector(".app");

new ProductPage({
  $target: $app,
  initialState: {
    productId: 1,
  },
});
