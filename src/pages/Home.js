import react from 'react';
import Header from '../components/Header';
import Todo from "../pages/Todo";
function Home(){
    const onDelete = (todo) =>{
        console.log("this is for deleting purpose", todo);
    }
    let todo = [
        {
            sno: 1,
            title: 'hi are you there',
            describe: "am looking somthing for you special"
        },
        {
            sno: 2,
            title: 'hi are you fine',
            describe: "am looking somthing for you special"
        },
        {
            sno: 2,
            title: 'hi are you crazy',
            describe: "am looking somthing for you special"
        }
    ]
    return(
        <>
    <Header title="Ultivic" ></Header>
    <Todo todo={todo} onDelete={onDelete}/>
        </>
    );
}
export default Home;