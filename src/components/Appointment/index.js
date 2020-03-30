import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Avatar, Container, Left, Info, Name, Time } from './styles';

export default function Appointment({ data }) {
  return (
    <Container>
      <Left>
        <Avatar
          source={{
            uri: `https://api.adorable.io/avatar/50/${data.provider.name}.png`,
          }}
        />
        <Info>
          <Name>{data.provider.name}</Name>
          <Time>21:39</Time>
        </Info>
      </Left>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}
