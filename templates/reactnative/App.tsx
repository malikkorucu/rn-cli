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
    success: (props: any) => (
      <BaseToast
        {...props}
        style={{borderLeftColor: 'green'}}
        contentContainerStyle={{paddingHorizontal: 15}}
        text1Style={{
          fontSize: 15,
          fontWeight: '400',
        }}
        text2Style={{color: 'red'}}
      />
    ),
    error: (props: any) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 17,
        }}
        text2Style={{
          fontSize: 15,
        }}
      />
    ),
    tomatoToast: ({text1, props}: any) => (
      <View style={{height: 60, width: '100%', backgroundColor: 'yellow'}}>
        <Text>{text1}</Text>
        <Text>{props?.uuid}</Text>
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
