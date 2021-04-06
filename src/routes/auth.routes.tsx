import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SigIn from '../pages/SignIn';
import SigUp from '../pages/SignUp';


const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Auth.Screen name="SignIn" component={SigIn} />
    <Auth.Screen name="SignUp" component={SigUp} />
  </Auth.Navigator>
)

export default AuthRoutes;
