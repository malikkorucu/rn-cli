import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Collapsible from 'react-native-collapsible';



export const CollapsibleView = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* Normal collapsible example  */}
      <View>
        <Pressable
          style={{backgroundColor: 'gray', padding: 5}}
          onPress={() => setIsCollapsed(!isCollapsed)}>
          <Text>asdfasdf</Text>
        </Pressable>
        <Collapsible collapsed={isCollapsed}>
          <View style={{backgroundColor: 'gray', padding: 20}}>
            <Text>Hello</Text>
          </View>
        </Collapsible>
      </View>


    </SafeAreaView>
  );
};
