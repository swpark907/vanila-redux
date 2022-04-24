import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({ toDos }) => {
  const id = useParams().id;
  const toDo = toDos.find((todo) => todo.id === Number(id));
  console.log(toDo);

  return (
    <>
    {/* {toDo.text} */}
      {toDo ? (
        <>
          {toDo.text}
          Created at: {toDo.id}
        </>
      ) : (
        <span>null</span>
      )}
    </>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    toDos: state,
  };
}

export default connect(mapStateToProps)(Detail);
