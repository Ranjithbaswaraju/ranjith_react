import React, { useState } from "react";

const CurdAddDel = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const ranjith = (e) => {
    e.preventDefault();

    if (input) {
      setTodos([...todos, input]);
    }
    setInput("");
  };

  const removeHandler=(ind)=>{
    const updatedTodo=todos.filter((item,index)=>index!=ind)
    setTodos(updatedTodo)
  }

  return (
    <>
      <form onSubmit={ranjith}>
        <input type="text" onChange={inputHandler} value={input} />
        <button type="submit">Add Todo</button>

        <ol>
          {todos?.map((item, index) => {
            return (
              <>
                <li>{item}</li>
                <button onClick={()=>removeHandler(index)}>Delete Todo</button>
              </>
            );
          })}
        </ol>
      </form>
    </>
  );
};
export default CurdAddDel;
