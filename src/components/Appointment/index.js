import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { formatRelative, parseISO } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import pt from 'date-fns/locale/pt';

import { Avatar, Container, Info, Left, Name, Time } from './styles';

Icon.loadFont();

export default function Appointment({ data, onCancel }) {
  const parsedDate = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      addSuffix: true,
      locale: pt,
    });
  }, [data.date]);

  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar_id
              ? data.provider.avatar_id.url
              : `https://api.adorable.io/avatars/50/${data.provider.name}.png`,
          }}
        />
        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{parsedDate}</Time>
        </Info>
      </Left>

      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
