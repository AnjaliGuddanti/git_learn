import { ADD_ITEMS,GET_ITEMS } from "./actionType"

export function addItem(item){
    return{
        type:ADD_ITEMS,
        payload:item
    }
}
export function getItems(){
    return{
        type:GET_ITEMS
    }
}
