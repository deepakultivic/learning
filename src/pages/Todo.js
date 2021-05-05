import React from "react";
import { TodosItem } from "../pages/TodosItem";
export const Todo =(props) =>{
   
    return(
        <>
         <h3>
            todos items list
            {/* {props.todo} */}
            {/* <TodosItem todo={props.todo[0]}/> */}
            {props.todo.map((todo) => {
                return(
                  
                        <TodosItem key={todo.dsfdssdfsdns} onDelete={props.onDelete}/> 
                
                )
            })}
        </h3>
        </>
    );
}
export default Todo;