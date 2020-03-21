import React, { useMemo } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { DatePickerAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {
  const exhibitedDate = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  async function handleOpenPicker() {
    const { action, year, month, day } = await DatePickerAndroid.open({
      mode: 'spinner',
      date,
    });

    if (action === DatePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day);
      onChange(selectedDate);
    }
  }

  return (
    <Background>
      <Container>
        <DateButton onPress={handleOpenPicker}>
          <Icon name="event" size={20} color="#FFF" />
          <DateText>{exhibitedDate}</DateText>
        </DateButton>
      </Container>
    </Background>
  );
}
