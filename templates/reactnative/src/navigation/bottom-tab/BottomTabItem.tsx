import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {Icon} from '../../assets/icons';
import {BottomTabItemList} from './_BottomTabItemList';
import {color, font} from '@theme';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {
  onPress: any;
  label: string;
  isFocused: boolean;
  routesLength?: number;
  currentIndex?: number;
  bottomTabConfig?: any;
};

export const BottomTabItem: FC<Props> = props => {
  const {onPress, label, isFocused, currentIndex, bottomTabConfig} = props;

  return (
    <View style={{flex: 1}}>
      {BottomTabItemList.map(
        item =>
          item.label === label && (
            <View
              key={item.label}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={onPress}
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <Icon
                  name={item.icon}
                  color={isFocused ? color.secondary : color.dark}
                  width={bottomTabConfig.iconSize}
                  height={30}
                />
                <Text
                  style={{
                    color: isFocused ? color.secondary : color.dark,
                    fontSize: bottomTabConfig.fontSize,
                    fontFamily: font.medium,
                  }}>
                  {item.label}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: 1,
                  height: 35,
                  backgroundColor: color.border,
                  position: 'absolute',
                  right: 0,
                }}></View>
            </View>
          ),
      )}
    </View>
  );
};
