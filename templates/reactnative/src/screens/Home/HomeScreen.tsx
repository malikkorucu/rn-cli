import React, {FC, useLayoutEffect} from 'react';
import {Button, StatusBar, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TextInput} from '@components';
import layout from '../../config/layout.json';
import { useEffect } from 'react';

export const HomeScreen: FC<any> = () => {
  const navigation: any = useNavigation();

  useEffect(()=> {
    StatusBar.setBarStyle('dark-content');
  },[])

  // useLayoutEffect(() => {
  //   if (layout.menu === 'drawer') {
  //     navigation.setOptions({
  //       headerRight: () => (
  //         <Button title="Drawer" onPress={() => navigation.openDrawer()} />
  //       ),
  //     });
  //   }
  // }, [navigation]);

  return (
   <>
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor:'white'
      }}>
      <Button
        title="Home Detail"
        onPress={() => navigation.navigate('HomeDetail')}
      />
      <TextInput />
      <Text>{JSON.stringify(navigation.getState(), null, 2)}</Text>
    </View>
   </>
  );
};
