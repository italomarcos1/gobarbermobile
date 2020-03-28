import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import api from '~/services/api';
import { Container, List, Title } from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get('appointments');

      setAppointments(response.data);
    }

    loadAppointments();
  }, []);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map(apnt =>
        apnt.id === id
          ? { ...apnt, canceled_at: response.data.canceled_at }
          : apnt
      )
    );

    Alert.alert(
      'Aviso',
      `Você cancelou o agendamento com o ${response.data.provider.name}.`
    );
  }

  return (
    <Background>
      <Container>
        <Title>Appointments</Title>

        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment data={item} onCancel={() => handleCancel(item.id)} />
          )}
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
