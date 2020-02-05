import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function SelectDate() {
  return <Background />;
}

SelectDate.navigationOptions = ({ navigation }) => ({
  title: 'Selecione a data',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('SelectProvider')}>
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});
