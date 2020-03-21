import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import { Container, HourList, Hour, Title } from './styles';

export default function SelectDate({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [schedule, setSchedule] = useState([]);

  const provider = navigation.getParam('provider');

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: { date: date.getTime() },
      });

      setSchedule(response.data);
    }

    loadSchedule();
  }, [date, provider.id]);

  function selectHour(time) {
    navigation.navigate('Confirm', { provider, time });
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />

        <HourList
          data={schedule}
          keyExtractor={item => item.time}
          renderItem={({ item }) => (
            <Hour
              onPress={() => selectHour(item.value)}
              enabled={item.available}
            >
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}

SelectDate.navigationOptions = ({ navigation }) => ({
  title: 'Selecione a data',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});
