import React, {useState} from 'react'

export  const Addtodo =({addTodo}) =>{
    const [title, setTitle] =useState("");
    const[desc, setDesc] = useState("");
    const submit = (e) =>{
        e.preventDefault()
        if(!title || !desc){
            alert('title or decription cannot be blank');
        }
        addTodo(title,desc);
    }
return(
    <>
 <div className="container mt-5">
 <form onSubmit={submit}>
  <div className="form-group" >
    <label htmlFor="title">Todo title</label>
    <input type="text" className="form-control" value={title} onChange={ (e) =>{setTitle(e.target.value)}} id="title" placeholder="Todo ttitle"/>
   
  </div>
  <div className="form-group">
    <label htmlFor="descritption">Todo Descritption </label>
    <input type="text" className="form-control" onChange={ (e) =>{setDesc(e.target.value)}} value={desc} id="descritption" placeholder="Todo description"/>
  </div>
 
  <button type="submit" className="btn btn-primary brn-sm">Submit</button>
</form>
  
 </div>
 </>
);
}