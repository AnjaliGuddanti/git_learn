import { ADD_ITEMS,GET_ITEMS } from "./actionType"
export const addItem =()=>async dispatch=>{
    dispatch({
        type:ADD_ITEMS,
        payload:items
    })
}
export const getItems =()=> {return async dispatch=>{
    dispatch({
        type:GET_ITEMS,
        payload:[{name:'anjali',phoneNo:'8765432'}]
    })
}}