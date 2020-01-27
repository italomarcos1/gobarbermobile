import './config/ReactotronConfig';
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { StatusBar } from 'react-native';
import { store, persistor } from '~/store';

import App from './App';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="dark-content" backgroundColor="#333" />
        <App />
      </PersistGate>
    </Provider>
  );
}
