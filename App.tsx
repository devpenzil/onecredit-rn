import 'react-native-gesture-handler';
import React from 'react';
import RootNavigation from './src/routes/rootNavigation';
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './src/redux/store/store';
import {Provider} from 'react-redux';

const App = () => {
  try {
    return (
      <>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigation />
          </PersistGate>
        </Provider>
      </>
    );
  } catch (err) {
    return null;
  }
};

export default App;
