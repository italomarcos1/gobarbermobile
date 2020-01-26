import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({ SignIn, SignUp }),
        App: createBottomTabNavigator(
          { Dashboard, Profile },
          {
            tabBarOptions: {
              keyboardHidesBarTab: true,
              activeTintColor: '#000',
              inactiveTintColor: 'rgba(0, 0, 0, 0.6)',
              style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
