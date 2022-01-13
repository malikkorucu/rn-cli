import { HomeScreen } from '../../../screens/Home/HomeScreen';
import { HomeDetail } from "../../../screens/HomeDetail/HomeDetail";
import { IScreen } from '../Models/IScreen';

const Screens = [
    {
        title:'Ana Sayfa',
        name: 'HomeScreen',
        component: HomeScreen,
        headerShown: true,
    },
    {
        title:'Detay Sayfası',
        name: 'HomeDetail',
        component: HomeDetail,
        headerShown: true,
    }
] as Array<IScreen>

export default Screens;