import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({}) => {
  const state = useSelector(state=>state)
  const id = useParams().id;
  const toDo = state.find((todo) => todo.id === Number(id));

  return (
    <>
    </>
  );
};

export default Detail;
