import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

function ToDo({ text, onBtnClick, id }) {

  console.log(onBtnClick)
  

  return (
    <li>
      <Link to={`/${id}`}>
      {text}, {id} <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  );
}

export default ToDo;
