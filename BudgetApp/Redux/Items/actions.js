import { ADD_ITEMS,GET_ITEMS } from "./actionType"

let items=[];

export const getItems =()=> {return async dispatch=>{
    dispatch({
        type:GET_ITEMS,
        payload:items
    })
}}

export const addItem=item=> async dispatch=>{
    items.push(item)
    dispatch({
        type:ADD_ITEMS,
        payload:items
    })
}