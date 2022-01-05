import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../../screens/Home/HomeScreen';
import {AboutScreen} from '../../screens/About/AboutScreen';
import {BottomTabContainer} from './BottomTabContainer';
import {View, Text} from 'react-native';
import HomeStack from '../stacks/HomeStack';
import {BottomTabItemList} from './_BottomTabItemList';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTabContainer {...props} />}>
      {BottomTabItemList.map((item: any) => (
        <Tab.Screen
          key={item.label}
          options={{headerShown: item.headerShown}}
          name={item.label}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
};
