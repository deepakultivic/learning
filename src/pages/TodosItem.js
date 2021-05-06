import React from "react";
export const TodosItem = ({todo, onDelete}) => {
return(
    <div className="container py-3">
        <p>{todo.title}</p>
        <p className="my-3">{todo.desc}</p>
        <button className="btn btn-danger btn-sm" onClick={ () => {onDelete(todo)}}>Delete</button>
    </div>
);
}