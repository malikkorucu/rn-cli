
import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/stacks/_MainStack';
import { StatusBar } from 'react-native';

const App: FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
