import React, {FC} from 'react';
import {Text as T} from 'react-native';
import {color as c, font as f} from '@theme';

type Props = {
  ff?: string;
  fs?: number;
  color?: string;
  style?: any;
};

export const Text: FC<Props> = ({children, ...props}) => {
  const {ff, fs, color} = props;

  return (
    <T
      style={{
        fontFamily: ff || f.regular,
        color: color || c.dark,
        fontSize: fs || 14,
      }}
      allowFontScaling={false}
      {...props}>
      {children}
    </T>
  );
};
