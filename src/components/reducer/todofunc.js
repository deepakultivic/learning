const initialState = {
    list:[]
}
const addtodo = (state=initialState, action) =>{
    switch(action.type){
      case "ADD_TODO" :
          const {id, data}= action.payload;
          return{
              ...state,
              list:[
                ...state.list,  {
                    id:id,
                    data:data
                  }
              ]
          } ;
          case "DELETE_TODO" :
          const newList = state.list.filter((curelm)=>curelm.id !== action.id);
            return{
                ...state,
                list:newList
            } ;
            case "REMOVE_todo":
            return { ...state,
            list:[]
        }
          default: return state;
    }

}


export default addtodo;