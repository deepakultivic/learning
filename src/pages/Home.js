import react, {useState, useEffect,useReducer } from 'react';
import Header from '../components/Header';
import Todo from "../pages/Todo";
import  {Addtodo} from "../pages/AddTodo";
import {Footer} from "../components/Footer";  
import '../App'
import { useHistory } from 'react-router-dom'

function Home(){

    const history = useHistory();
    let initTodo;
    if(localStorage.getItem("todos") ===null ){
        initTodo = [];
    }
    else{
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    const onDelete = (todo) =>{
        console.log("this is for deleting purpose", todo);
        setTodo(todos.filter((e) => {
            return e!==todo;
        }));
        localStorage.setItem("todos", JSON.stringify(todos))
    }
    const addTodo = (title, desc) => {
        console.log("i ma adding this todo ", title, desc);
        let sno;
        if(todos.length===0){
            sno=0;
        }
        else{
           sno=todos[todos.length-1].sno+1;   
        }
       
        const myTodo = {
            sno:sno,
            title:title,
            desc:desc,
        }
        setTodo([... todos,myTodo]);
        console.log("myTodo");
        localStorage.setItem("todos", JSON.stringify(todos))
    }
    const [todos, setTodo] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
      
    }, [todos])
    const indec = (state,action) =>{
        if(action.type === "INC" ){
            return state = state + 1;
        }
        if(action.type === "DEC" ){
            return state = state - 1;
        }
    }
    
     const [state, dispatch] = useReducer(indec, 0)
     useEffect(() => {
         if(state>=0 ){
        document.title = `chat (${state})`}
        else{
            document.tittle = `chat`
            console.log(document.tittle)
        }
     }
  
     )
  
    return(
        <>
    <Header title="Ultivic" ></Header>
    <Addtodo addTodo={addTodo}/>
    <Todo todo={todos} onDelete={onDelete}/>
   <button onClick={history.goBack}> Go back</button>
    <div className="container py-5 border border-transparent">
        <button onClick={()=>dispatch({type:"INC"})} >+</button>
        <p>{state}</p>
        <button className="mix-blend-normal	" onClick={()=>dispatch({type:"DEC"})}>-</button>
    </div>
    {/* my cards */}
    <div className="container">
    <div className="my_cards_outer grid grid-cols-5 md:gap-10">
<div className="py-5 col-span-1">
        <div className="rounded overflow-hidden shadow-lg ">
            <img src="/assets/images/iphone.jpg" alt="" className="w-full" />
        </div>
</div>
{/*  */}
<div className="py-5 col-span-1">
        <div className="rounded overflow-hidden shadow-lg ">
            <img src="/assets/images/iphone.jpg" alt="" className="w-full" />
        </div>
</div>
<div className="py-5">
        <div className="rounded overflow-hidden shadow-lg">
            <img src="/assets/images/iphone.jpg" alt="" className="w-full" />
        </div>
</div>
    </div>
    
    </div>
    <Footer/>

        </>

        
    );
}
export default Home;