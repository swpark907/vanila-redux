import { createStore } from "redux";

const input = document.getElementById("todoInput");
const lists = document.querySelector(".list");
const form = document.querySelector("form");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const initialState = {
  text: [],
  name: [],
};

const addTodo = (todo) => {
  return { type: ADD_TODO, todo };
};

const deleteTodo = (id) => {
  return { type: DELETE_TODO, id };
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.todo, id: Date.now() }];
    case DELETE_TODO:
      return state.filter(list => action.id !== list.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchDeleteTodo = (e) => {
  const $target = e.target.closest("li");
  const id = Number($target.id);
  store.dispatch(deleteTodo(id));
};

const dispatchAddTodo = (todo) => {
  store.dispatch(addTodo(todo));
};

const renderList = () => {
  lists.innerHTML = "";
  const state = store.getState();
  state.map((list) => {
    const li = document.createElement("li");
    li.id = list.id;
    li.innerText = list.text;
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteTodo);
    lists.appendChild(li);
    li.appendChild(btn);
  });
};

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  dispatchAddTodo(todo);
  input.value = "";
};

store.subscribe(renderList);
form.addEventListener("submit", onSubmit);
