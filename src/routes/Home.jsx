import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

const Home = ({toDos}) => {
  const [text, setText] = useState("");
  const state = useSelector(state=> state);
  const dispatch = useDispatch();
  const addTodo = text => dispatch(actionCreators.addToDo(text));

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <>
      <h2>To Do</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
      </form>
      <ul>{state.map((todo)=> (
        <ToDo {...todo} key={todo.id}></ToDo>
      ))}</ul>
    </>
  );
};

export default Home;
