import React, {FC} from 'react';
import {TextInput, TextInputBase, TextInputComponent} from 'react-native';
import {Block} from '../Block/Block';
import styles from './style';
import {Text} from './../Text/Text';

type Props = {
  placeholder?: string;
  onChange?: ((text: string) => void) | undefined;
  value?: any;
  errorMessage?: string;
};

export const Input: FC<Props | any> = props => {
  const {placeholder,onChange,value,errorMessage} = props; // prettier-ignore

  return (
    <>
      <Block style={[styles.container, errorMessage && styles.errorContainer]}>
        <TextInput
          onChangeText={onChange}
          placeholder={placeholder}
          style={[styles.input, errorMessage && styles.errorInput]}
          allowFontScaling={false}
          value={value}
          {...props}
        />
      </Block>
      {errorMessage && (
        <Block px={10}>
          <Text fs={11} color="red">
            <Text color="red">{'\u2022'} </Text>
            {errorMessage}
          </Text>
        </Block>
      )}
    </>
  );
};
