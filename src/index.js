import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  // reducer
  switch (action.type) {
    case "ADD":
      return (count = count + 1);
    case "MINUS":
      return (count = count - 1);
    default:
      return;
  }
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: "ADD" });
console.log(countStore.getState());
