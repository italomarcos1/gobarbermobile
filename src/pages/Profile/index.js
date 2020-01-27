import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import { Container, Title } from './styles';

export default function Profile() {
  return (
    <Background>
      <Container>
        <Title>Profile</Title>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person-outline" size={20} color={tintColor} />
  ),
};
