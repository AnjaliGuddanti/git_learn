
import 'react-native-gesture-handler';

import React from 'react';
import HomeStack from './Routes/HomeStack';
import { NavigationContainer } from '@react-navigation/native';
import store,{persistor} from './Redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
function App(): JSX.Element {
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <HomeStack/>
        </NavigationContainer>
      </PersistGate>
     
    </Provider>
        
  
     
   
    
  );
}



export default App;
