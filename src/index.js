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
  lists.innerHTML = ''
  const state = store.getState();
  state.map((list) => {
    const li = document.createElement('li');
    li.id = list.id;
    li.innerText = list.text;
    const btn = document.createElement('button');
    btn.innerText = 'DEL';
    btn.addEventListener('click', deleteTodo)
    lists.appendChild(li);
    li.appendChild(btn);
  })
  
  // lists.innerHTML = state.map((list) => (
  //   `
  //     <li id='${list.id}'>
  //       ${list.text}
  //       <button>DEL</button>
  //     </li>
  //   `
  // )).join('')
}

const addTodo = todo => {
  store.dispatch({ type: ADD_TODO, todo: todo });
}


const store = createStore(reducer);
store.subscribe(renderList);
const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  addTodo(todo);
  input.value = "";
};

form.addEventListener("submit", onSubmit);
