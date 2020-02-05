import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Container } from './styles';

import Background from '~/components/Background';

export default function SelectProvider() {
  return <Background />;
}

SelectProvider.navigationOptions = ({ navigation }) => ({
  title: 'Select your Provider',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Icon name="chevron-left" size={35} color="#e6b32A" />
    </TouchableOpacity>
  ),
});
