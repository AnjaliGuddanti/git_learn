import {createStore} from  'redux';
import rootReducer from './rootReducer';
import {persistStore,persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig={
    key:'Budget',
    storage: AsyncStorage,
}
const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store=createStore(persistedReducer)
 export const persistor=persistStore(store);
