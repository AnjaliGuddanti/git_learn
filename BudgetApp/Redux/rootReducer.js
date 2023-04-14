import {combineReducers} from 'redux';
import itemReducer from '../Redux/Items/reducer';

const rootReducer= combineReducers({
    items:itemReducer
})
export default rootReducer;