import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE"

const initialState = {
  toDos: [],
  count: 0,
  address: 'asdf@naver.com'
}

const addToDo = (text) => {
  return {
    type: ADD,
    text
  }
}

const deleteTodo = (id) => {
  return {
    type: DELETE,
    id
  }
}

const reducer = (state=[], action) => {
  switch(action.type) {
    case ADD:
      return [{text: action.text, id: Date.now()}, ...state];
    case DELETE:
      return state.filter(list => list.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteTodo
}

export default store;