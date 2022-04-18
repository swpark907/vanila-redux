import { createStore } from "redux";

const input = document.getElementById("todoInput");
const lists = document.querySelector(".list");
const form = document.querySelector("form");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.state];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  store.dispatch({ type: ADD_TODO, state: todo });
  input.value = "";
};

form.addEventListener("submit", onSubmit);
