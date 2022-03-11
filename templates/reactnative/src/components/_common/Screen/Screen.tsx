import React, {FC} from 'react';
import {View} from 'react-native';
import {getStyleShortcuts} from '../../../utils/StyleShortcut';
import layout from '../../../config/layout.json'
import {window,bottomTabHeight} from '@theme';

type Props = {};

export const Screen: FC<Props | any> = ({children, ...props}) => {
  return (
    <View style={[{...getStyleShortcuts(props)}, {
        padding:window.offset,
        paddingBottom:layout.menu === 'bottom' && bottomTabHeight + window.offset,
        backgroundColor:'#dedede',
        flex:1
    }]}>{children}</View>
  );
};
