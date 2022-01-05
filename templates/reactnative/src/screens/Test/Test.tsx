import {PagerExample} from '../../Animation/CustomHandler';
import React from 'react';
import {Text, View} from 'react-native';
import AnimatedListExample from '../../Animation/LayoutReanimation/AnimatedList';
import { Carousel } from '../../Animation/LayoutReanimation/Carousel';
import { CustomLayoutAnimationScreen } from '../../Animation/LayoutReanimation/CustomLayout';
import { DefaultAnimations } from '../../Animation/LayoutReanimation/DefaultAnimations';
import { Modal } from '../../Animation/LayoutReanimation/Modal';
import { MountingUnmounting } from '../../Animation/LayoutReanimation/MountingUnmounting';
import { NativeModals } from '../../Animation/LayoutReanimation/NativeModals';
import { SpringLayoutAnimation } from '../../Animation/LayoutReanimation';
import { WaterfallGridExample } from '../../Animation/LayoutReanimation/WaterfallGridExample';

export const TestScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Test page</Text>
    </View>
  );
};
