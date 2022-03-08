import React, {FC, useLayoutEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from '../../assets/icons';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'setup';
import Button from 'components/LiquidSwipe/Button';
import * as auth from '../../redux/auth/authRedux';

const HeaderRight: FC<any> = ({setCount, count}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        style={{
          padding: 16,
          flexDirection: 'row',
          borderColor: '#dedede',
          borderWidth: 1,
        }}
        onPress={() => setCount(count + 1)}>
        <Icon name="Car" />
        <Text style={{marginLeft: 10}}>Custom</Text>
      </TouchableOpacity>
    </View>
  );
};

export const HomeDetail: FC<any> = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const test = useSelector<RootState>(({auth}) => auth.test) as string;

  // Page specific header options !
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight count={count} setCount={setCount} />,
    });
  }, [navigation, count]);

  return (
    <View style={{flex: 1, padding: 16}}>
      <Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(auth.actions.setTest('test text'));
          }}>
          <Text>CLICK</Text>
        </TouchableOpacity>
        <Text>{count}</Text>
        <Text>{test}</Text>
      </Text>
    </View>
  );
};
