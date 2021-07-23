import React, { useState,useEffect } from "react";
import "./style.css";
const getLocaItems =( )=>{
    let list = localStorage.getItem('lists');
    console.log(list);
    if(list){
        return JSON.parse(localStorage.getItem('lists'));
    }
    else{
       return [];
    }
}
const Todo = () => {
  const [input, setInput] = useState("");
  const [additemss, setAdditemss] = useState(getLocaItems());
  const additems = () => {
    if (!input) {
    } else {
      setAdditemss([...additemss, input]);
      setInput("");
    }
  };
  const deletitems = (id) => {
    const updateddate = additemss.filter((elem, index) => {
      return index !== id;
    });
    setAdditemss(updateddate);
  };
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(input))
  }, [input]);
  return (
    <>
      <div className="mian-div">
        <figure>
          <img src="" alt="" />
          <figcaption>Add your Todo list</figcaption>
        </figure>
        <div className="additems">
          <input
            type="text"
            name="name"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Add items..."
          />
          <i className="fa fa-plus" onClick={additems} aria-hidden="true"></i>
        </div>
        {additemss.map((elem, index) => {
          return (
            <div className="show_items" key={index}>
              <h3>{elem}</h3>
              <i
                className="fa fa-trash-o"
                onClick={() => deletitems(index)}
                aria-hidden="true"
              ></i>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
