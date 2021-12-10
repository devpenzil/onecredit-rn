import 'react-native-gesture-handler';
import React from 'react';
import RootNavigation from './src/routes/rootNavigation';
import {store} from './src/redux/store/store';
import {Provider} from 'react-redux';

const App = () => {
  try {
    return (
      <>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </>
    );
  } catch (err) {
    return null;
  }
};

export default App;
