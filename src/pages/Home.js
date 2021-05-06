import react, {useState } from 'react';
import Header from '../components/Header';
import Todo from "../pages/Todo";
import  {Addtodo} from "../pages/AddTodo";
function Home(){
    const onDelete = (todo) =>{
        console.log("this is for deleting purpose", todo);
        setTodo(todos.filter((e) => {
            return e!==todo;
        }))
    }
    const addTodo = (title, desc) => {
        console.log("i ma adding this todo ", title, desc);
        let sno;
        if(todos.length==0){
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
    }
    const [todos, setTodo] = useState([
        {
            sno: 1,
            title: 'hi are you there',
            desc: "am looking somthing for you special"
        },
        {
            sno: 2,
            title: 'hi are you fine',
            desc: "am looking somthing for you special"
        },
        {
            sno: 4,
            title: 'hi are you crazy',
            desc: "am looking somthing for you special"
        },
    ] );
    return(
        <>
    <Header title="Ultivic" ></Header>
    <Addtodo addTodo={addTodo}/>
    <Todo todo={todos} onDelete={onDelete}/>
   
        </>
    );
}
export default Home;