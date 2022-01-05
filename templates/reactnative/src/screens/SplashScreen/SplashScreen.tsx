import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Icon} from '../../assets/icons';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import layout from '../../config/layout.json';

export const SplashScreen: FC = () => {
  const navigation: StackNavigationProp<any> = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      const navigationName =
        layout.menu === 'drawer'
          ? 'DrawerTabNavigation'
          : 'BottomTabNavigation';

      navigation.replace(navigationName);
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Icon name="Car" width={30} height={30} />
      <Text>splash screen</Text>
    </View>
  );
};
