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
              keyboardHidesTabBar: true,
              activeTintColor: '#333',
              inactiveTintColor: 'rgba(51, 51, 51, 0.6)',
              style: {
                backgroundColor: '#666',
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
