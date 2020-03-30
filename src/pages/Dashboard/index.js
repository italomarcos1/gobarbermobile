import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import api from '~/services/api';
import { Container, List, Title } from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get('/appointments');
      console.tron.log(response.data);

      setAppointments(response.data);
    }

    loadAppointments();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Appointments</Title>

        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Appointment data={item} />}
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
