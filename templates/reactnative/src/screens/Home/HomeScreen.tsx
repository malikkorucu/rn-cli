import React, {FC, useLayoutEffect, useState} from 'react';
import {Button, StatusBar, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import layout from '../../config/layout.json';
import {useEffect, useRef} from 'react';
import {DateTimePicker} from './../../components/DateTimePicker/DateTimePicker';
import BottomSheet from './../../components/BottomSheet/BottomSheet';
import {CollapsibleView, AccordionList} from '@components';
import { showToast } from '../../utils/ToastMessage';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HomeScreen: FC<any> = () => {
  const navigation: any = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const bottomsheet = useRef() as any;

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
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
      <View
        style={{
          flex: 1,
          padding: 16,
          backgroundColor: 'white',
        }}>
        <View style={{marginBottom: 5}}>
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
        </View>
        <DateTimePicker visible={modalVisible} setVisible={setModalVisible} />
        <CollapsibleView />
        <BottomSheet
          ref={bottomsheet}
          height={500}
          openDuration={300}
          closeOnDragDown
          closeOnPressMask>
          <Text>aslşdkfjasşldfkj</Text>
        </BottomSheet>
        <Button title="Toast message" onPress={()=> {
         showToast('asfdasdfasf');
        }}/>
      </View>
    </>
  );
};
