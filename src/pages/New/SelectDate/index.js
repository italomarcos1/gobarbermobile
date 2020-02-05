import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Container } from './styles';

import Background from '~/components/Background';

export default function SelectDate() {
  return <Background />;
}

SelectDate.navigationOptions = ({ navigation }) => ({
  title: 'Select the Date',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('SelectProvider')}>
      <Icon name="chevron-left" size={20} color="#ab2000" />
    </TouchableOpacity>
  ),
});
