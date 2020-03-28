import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

export default function Dashboard() {
  return <Background />;
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" color={tintColor} size={20} />
  ),
};
