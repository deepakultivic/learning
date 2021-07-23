import react, {useState, useEffect } from 'react';
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
    return(
        <>
    <Header title="Ultivic" ></Header>
    <Addtodo addTodo={addTodo}/>
    <Todo todo={todos} onDelete={onDelete}/>
   <button onClick={history.goBack}> Go back</button>
    <Footer/>
        </>

        
    );
}
export default Home;