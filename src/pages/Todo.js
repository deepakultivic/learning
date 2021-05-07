import React from "react";
import { TodosItem } from "../pages/TodosItem";
export const Todo =(props) =>{
   
    return(
        <>
        <div className="container py-5 ">
        <div>
           <h3 className="heading"> Todos items list</h3>
            {/* {props.todo} */}
            {/* <TodosItem todo={props.todo[0]}/> */}
            {props.todo.length==0? "No todos available" :
            props.todo.map((todo, dns) => {
                return(
                  
                        <TodosItem todo={todo} key={dns} onDelete={props.onDelete}/> 
                        // <TodosItem todo={todo} /> 
                
                )
            })}
        </div>
        </div>
        </>
    );
}
export default Todo;