import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import { Container, List, Title } from './styles';

export default function Dashboard() {
  const temp = [{ user: { name: 'Anakin', time: '21:39' } }];
  return (
    <Background>
      <Container>
        <Title>Appointments</Title>

        <List
          data={temp}
          keyExtractor={user => String(user.id)}
          renderItem={({ user }) => <Appointment data={user} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" color={tintColor} size={20} />
  ),
};
