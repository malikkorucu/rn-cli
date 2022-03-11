import React, {FC} from 'react';
import {
  View,
  TouchableOpacity,
  GestureResponderEvent,
  ActivityIndicator,
} from 'react-native';
import styles from './style';
import {Text} from '../Text/Text';
import {color} from '@theme';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  type: 'primary' | 'secondary';
  disabled?: boolean | any;
  loading?: boolean;
  title: string;
};

export const Button: FC<Props> = props => {
  const {onPress, disabled, type, loading, title} = props;

  const buttonTypes = {
    primary: {
      container: {
        backgroundColor: color.secondary,
      },
      text: {
        color: color.white,
      },
    },
    secondary: {},
  } as any;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[
        buttonTypes[type].container,
        styles.container,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}>
      {loading && (
        <View style={{flexDirection: 'row'}}>
          <ActivityIndicator color={color.white} style={{paddingRight: 12}} />
          <Text style={[buttonTypes[type].text, styles.text]}>
            Please Wait ...
          </Text>
        </View>
      )}

      {!loading && (
        <Text style={[buttonTypes[type].text, styles.text]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
