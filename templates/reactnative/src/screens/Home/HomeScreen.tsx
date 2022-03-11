import React, {FC, useLayoutEffect, useState} from 'react';
import {Alert, Button, StatusBar, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import layout from '../../config/layout.json';
import {useEffect, useRef} from 'react';
import {DateTimePicker} from './../../components/DateTimePicker/DateTimePicker';
import BottomSheet from './../../components/BottomSheet/BottomSheet';
import {CollapsibleView, AccordionList, Block} from '@components';
import {toast} from '../../utils/ToastMessage';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button as Btn, Text, Screen} from '@components';
import {color, font} from '@theme';

export const HomeScreen: FC<any> = () => {
  const navigation: any = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const bottomsheet = useRef() as any;

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor(color.primary);
  }, []);

  useLayoutEffect(() => {
    if (layout.menu === 'drawer') {
      navigation.setOptions({
        headerRight: () => (
          <Button title="Drawer" onPress={() => navigation.openDrawer()} />
        ),
      });
    }
  }, [navigation]);

  return (
    <>
      <Screen px={10}>
        <Btn
          type="primary"
          title="Button Title"
          onPress={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 3000);
          }}
          disabled={loading}
          loading={loading}
        />

        <Block>
          <Text ff={font.regular}>test text</Text>
        </Block>
        {/* <View style={{marginBottom: 5}}>
          <Button
            title="Home Detail"
            onPress={() => navigation.navigate('HomeDetail')}
          />
        </View>
        <View style={{marginBottom: 5}}>
          <Button
            title="Show Date Picker"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
        <View style={{marginBottom: 5}}>
          <Button
            title="Bottom Sheet"
            onPress={() => bottomsheet.current.open()}
          />
        </View> */}
        {/* <DateTimePicker visible={modalVisible} setVisible={setModalVisible} /> */}
        {/* <CollapsibleView /> */}
        {/* <BottomSheet
          ref={bottomsheet}
          height={500}
          openDuration={300}
          closeOnDragDown
          closeOnPressMask>
          <Text>aslşdkfjasşldfkj</Text>
        </BottomSheet> */}
        <Button
          title="Toast message"
          onPress={() => {
            toast.success('success message');
            // toast.error('aşdsfkjşdslfj');
          }}
        />
      </Screen>
    </>
  );
};
