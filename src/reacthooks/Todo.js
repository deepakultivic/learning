import React, { useState } from "react";

const Todo = () => {
  const [mydata, setMydata] = useState(tododata);
  const delItems = (id) => {
    const newtodo = mydata.filter((items) => {
      return items.id !== id;
    });
    setMydata(newtodo);
  };
  return (
    <div className="demo">
      {mydata.map((items) => {
        return (
         <div key={items.id}>
              <h1 
            style={{
              background: "#ddd",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            Name:{items.name} Age:{items.age}{" "}
            <button
              onClick={() => delItems(items.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </h1>
         </div>
          
        );
      })}

    </div>
  );
};
const tododata = [
  {
    id: 0,
    name: "deepak",
    age: 22,
  },
  {
    id: 2,
    name: "deepak",
    age: 22,
  },
  {
    id: 3,
    name: "deepak",
    age: 22,
  },
];
export default Todo;
