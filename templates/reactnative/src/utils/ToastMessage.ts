
import { Platform } from 'react-native';
import {Toast} from '../components/ToastMessage/lib'

const topOffset = Platform.select({
    ios: 50,
    android: 0,
});

export const showToast = (data: any) => {  
    Toast.show({
        type: 'tomatoToast',
        position: 'top',
        visibilityTime: 2000,
        text1: data.type === 'success' ? 'Başarılı !' : 'Hata !',
        text2: 'Lütfen bilgileriniz kontrol ediniz...',
        topOffset,
        ...data,
    });
};