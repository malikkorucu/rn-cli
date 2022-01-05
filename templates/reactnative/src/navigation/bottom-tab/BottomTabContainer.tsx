import React, {FC, useState, useEffect} from 'react';
import {Keyboard, View} from 'react-native';
import {BottomTabItem} from './BottomTabItem';
import AnimatedTabBar from './AnimatedTabBar';

export const BottomTabContainer: FC<any> = props => {
  const {state, descriptors, navigation} = props;
  const [showTab, setShowTab] = useState(true);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setShowTab(false));
    Keyboard.addListener('keyboardDidHide', () => setShowTab(true));
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  return (
    <>
      {showTab && (
        <View
          style={{
            height: 64,
            flexDirection: 'row',
          }}>
          <AnimatedTabBar />
          {/* {state.routes.map((route: any, index: number) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
            const isFocused = state.index === index;
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
            return (
              <BottomTabItem
                isFocused={isFocused}
                key={index}
                label={label}
                onPress={onPress}
              />
            );
          })} */}
        </View>
      )}
    </>
  );
};
