import './config/ReactotronConfig';
import React from 'react';
import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from '~/store';

import App from './App';

export default function Index() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="rgba(0,0,0, 0.67)"
          />
          <App />
        </PersistGate>
      </Provider>
    </>
  );
}
