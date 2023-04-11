import {createStore,applyMiddleware} from  'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
// import persistReducer from 'redux-persist/es/persistReducer';
// import logger from 'redux-logger';
const persistConfig={
    key:'persist-key',
    storage
}
const persistedReducer=persistReducer(persistConfig,rootReducer)

const store=createStore(persistedReducer,applyMiddleware(thunk))
const persistor=persistStore(store);
export default store
export {persistor}