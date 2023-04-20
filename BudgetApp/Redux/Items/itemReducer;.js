import { ADD_ITEMS,GET_ITEMS } from "./actionType"
const initialState=[]

const itemReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_ITEMS:{ 
            return [
                ...state,
                action.payload
        ]}
        default: return state
    }
}
export default itemReducer;
    
