import {Dimensions} from 'react-native';

const window = {
  windowOffset: 16,
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width,
};

const fontSize = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

const padding = [5, 10, 15, 20, 25, 30, 35, 40, 45];

export {window, fontSize, padding};