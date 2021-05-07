import React from "react";
export const TodosItem = ({todo, onDelete}) => {
return(
    <div className="container ">
       <div className="list">
       <p className="title">{todo.title}</p>
        <p className="descr">{todo.desc}</p>
        <button className="btn btn-danger btn-sm" onClick={ () => {onDelete(todo)}}>Delete</button>
       </div>
    </div>
);
}