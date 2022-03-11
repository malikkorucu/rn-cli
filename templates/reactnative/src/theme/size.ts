import { Dimensions } from 'react-native';

const window = {
  offset: 16,
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

const fontSize = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

const padding = [5, 10, 15, 20, 25, 30, 35, 40, 45];

const bottomTabHeight = window.height < 680 ? 50 : 80

export { window, fontSize, padding, bottomTabHeight };