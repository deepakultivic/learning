import React from "react";
import { TodosItem } from "../pages/TodosItem";
export const Todo =(props) =>{
   
    return(
        <>
        <div className="container py-5 ">
        <h3>
            todos items list
            {/* {props.todo} */}
            {/* <TodosItem todo={props.todo[0]}/> */}
            {props.todo.length==0? "no todos available" :
            props.todo.map((todo, dns) => {
                return(
                  
                        <TodosItem todo={todo} key={dns} onDelete={props.onDelete}/> 
                        // <TodosItem todo={todo} /> 
                
                )
            })}
        </h3>
        </div>
        </>
    );
}
export default Todo;