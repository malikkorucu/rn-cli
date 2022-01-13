import React, {FC,useRef} from 'react';
import {Animated, View,Easing} from 'react-native';
import {Icon} from '../../assets/icons';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import layout from '../../config/layout.json';
import LottieView from 'lottie-react-native';

export const SplashScreen: FC = () => {
  const navigation: StackNavigationProp<any> = useNavigation();
  const progress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress.current, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

  }, []);

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
      <LottieView
        source={require('./loading-circles.json')}
        progress={progress.current}
        loop={true}
        autoPlay={true}
        style={{width: 200, height: 200}}
      />
    </View>
  );
};
