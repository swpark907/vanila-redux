import { createStore } from "redux";

const input = document.getElementById("todoInput");
const lists = document.querySelector(".list");
const form = document.querySelector("form");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const initialState = {
  text: [],
  name: [],
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {text: action.todo, id: Date.now()}];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const renderList = () => {
  const state = store.getState();
  lists.innerHTML = state.map((list) => (
    `
      <li id='${list.id}'>
        ${list.text}
      </li>
    `
  )).join('')
}


const store = createStore(reducer);
store.subscribe(renderList);
const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  store.dispatch({ type: ADD_TODO, todo: todo });
  input.value = "";
  console.log(store.getState());
  
};

form.addEventListener("submit", onSubmit);
