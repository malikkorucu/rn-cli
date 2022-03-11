import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/stacks/_MainStack';
import {StatusBar, Text, View} from 'react-native';
import {Toast, BaseToast, ErrorToast} from '@components';
import {Provider} from 'react-redux';
import store, {persistor} from './src/setup/redux/Store';
import {PersistGate} from 'redux-persist/integration/react';

const App: FC = () => {
  const toastConfig = {
    success: ({text1, ...props}: any) => (
      <View style={{padding: 10, width: '100%', height: 60}}>
        <View
          style={{
            height: 60,
            width: '100%',
            backgroundColor: 'green',
            borderRadius: 10,
          }}>
          <Text>{text1}</Text>
          <Text>{props?.uuid}</Text>
        </View>
      </View>
    ),
    error: ({text1, ...props}: any) => (
      <View style={{padding: 10, width: '100%', height: 60}}>
        <View
          style={{
            height: 60,
            width: '100%',
            backgroundColor: 'red',
            borderRadius: 10,
          }}>
          <Text>{text1}</Text>
          <Text>{props?.uuid}</Text>
        </View>
      </View>
    ),
  };

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Text>Loading</Text>}>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <MainStack />
          </NavigationContainer>
        </PersistGate>
      </Provider>
      <Toast config={toastConfig} />
    </>
  );
};

export default App;
