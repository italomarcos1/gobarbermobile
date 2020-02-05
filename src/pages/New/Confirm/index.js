import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Confirm() {
  return <Background />;
}

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirm appointment',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('SelectDate')}>
      <Icon name="chevron-left" size={20} color="#ab2000" />
    </TouchableOpacity>
  ),
});
