import React, { useEffect, useState } from "react";

const Home = () => {

  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setText("")
  }

  useEffect(() => {console.log(text)}, [text])

  return (
    <>
      <h2>To Do</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
      </form>
      <ul></ul>
    </>
  );
};

export default Home;
