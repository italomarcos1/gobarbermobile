import './config/ReactotronConfig';
import React from 'react';
import 'react-native-gesture-handler';
import { Text, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#333" />
      <Text>Hey you</Text>
    </>
  );
}
