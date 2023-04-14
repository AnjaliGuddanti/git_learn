import { ADD_ITEMS,GET_ITEMS } from "./actionType"
let initialState={
    items:[{name:"Anjali",phoneNo:"9640216027"}]
}

const itemReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_ITEMS:return{
            ...state,
            items:[...action.payload]
        }
        case GET_ITEMS:return{
            ...state,
            items:[...action.payload]
        }
        default: return state
    }
}
export default itemReducer;
    
