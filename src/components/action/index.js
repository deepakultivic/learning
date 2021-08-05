export const incNumber = () => {
    return { 
        type: "INCREMENT" 
    }
}
export const decNumber = () => { 
    return {
         type: "DECREMENT"
         } 
        }
export const addTodos =(data) =>{
  return{
      type: "ADD_TODO",
      payload :{
          id: new Date().getTime().toString(),
          data:data
      }
  }
}
export const delTodos =(id) =>{
    return{
        type: "DELETE_TODO",
        id
    }
  }
  export const removeTodos =() =>{
    return{
        type: "REMOVE_todo",
    }
  }