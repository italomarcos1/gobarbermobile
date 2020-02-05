import React, { useMemo } from 'react';
import { DatePickerAndroid } from 'react-native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {
  const formattedDate = useMemo(
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
          <DateText>{formattedDate}</DateText>
        </DateButton>
      </Container>
    </Background>
  );
}
