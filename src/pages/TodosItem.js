import React from "react";
export const TodosItem = ({todo, onDelete}) => {
return(
    <div className="container">
        <h3>
         listing
            
        </h3>
        <p>{todo.title}</p>
        <p>{todo.describe}</p>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
    </div>
);
}