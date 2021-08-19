import { getItem } from "./storage.js";
import App from "./App.js";

const initialState = getItem("todos", []);
const $app = document.querySelector(".app");
console.log($app);
new App({
  $target: $app,
  initialState,
});
