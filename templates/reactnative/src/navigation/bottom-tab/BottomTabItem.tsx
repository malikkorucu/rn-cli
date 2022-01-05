import React, { FC } from 'react';
import { Pressable, View, Text } from 'react-native';
import { Icon } from '../../assets/icons';
import { BottomTabItemList } from './_BottomTabItemList';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
    onPress: any;
    label: string;
    isFocused: boolean
}

export const BottomTabItem: FC<Props> = (props) => {
    const { onPress, label, isFocused } = props;

    return (
        <View style={{flex:1}}>
            {
                BottomTabItemList.map(item => (
                    item.label === label && (
                        <TouchableOpacity
                            onPress={onPress}
                            key={item.label}
                            style={{height:'100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name={item.icon} width={24} height={24} />
                            <Text style={{ color: isFocused ? 'red' : 'black' }}>{item.label}</Text>
                        </TouchableOpacity>
                    )
                ))
            }
        </View>
    )
}