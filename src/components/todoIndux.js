import React,{useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Footer } from './Footer'
import Header from './Header'
import { addTodos,delTodos, removeTodos } from './action'
import addtodo from './reducer/todofunc'

const TodoIndux = () => {
    const [inputdata, setInputdata] = useState("");
  
   const dispatch = useDispatch();
const list = useSelector(state => state.addtodo.list)
console.log(list)
const change =()=>{
    if(!inputdata){
        alert("input field cannot be blank")
    }
  else{
    dispatch(addTodos(inputdata));
    setInputdata('')
  }
}
const additemss =(e)=>{
  if(e.key=== "Enter"){
    dispatch(addTodos(inputdata));
    setInputdata('')
  }
}
    return (
        <>
        <Header/>
            <div className="container">
                <div className="py-5">
                <div className="main-div py-5 text-ceter">
                <div className="todInner">
                    <figure>
                        <figcaption>All you todo items here</figcaption>
                    </figure>
                    <div className="add_items">
                        <input type="text" value={inputdata} onKeyPress={additemss} onChange={(event)=>setInputdata(event.target.value)} />
                        {/* <i className=" fa fa-plus" onClick={()=>dispatch(addTodos(inputdata),setInputdata(""))}></i> */}
                        <i className=" fa fa-plus" onClick={change}></i>
                    </div>
                   
                        {
                            list.map((curelm,index)=>{
                                return(
                          
                                     <div className="updated_value" key={index}>
                                    <h3>{curelm.data} <i className="fa fa-trash" onClick={()=>dispatch(delTodos(curelm.id))}></i> </h3></div>
                             
                                )
                            
                            })
                        }
                        <button className="clear_all" onClick={()=>dispatch(removeTodos())}>clear all</button>
                    
                </div>
            </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default TodoIndux
