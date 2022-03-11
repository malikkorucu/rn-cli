import React, {FC} from 'react';
import {Keyboard, Pressable, View} from 'react-native';
import {getStyleShortcuts} from '../../../utils/StyleShortcut';
import layout from '../../../config/layout.json';
import {window, bottomTabHeight} from '@theme';

type Props = {};

export const Screen: FC<Props | any> = ({children, ...props}) => {
  return (
    <Pressable
      onPress={() => Keyboard.dismiss()}
      style={[
        {...getStyleShortcuts(props)},
        {
          padding: window.offset,
          paddingBottom:
            layout.menu === 'bottom' && bottomTabHeight + window.offset,
          backgroundColor: '#dedede',
          flex: 1,
        },
      ]}>
      {children}
    </Pressable>
  );
};
