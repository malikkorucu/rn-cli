import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons';
import { TestScreen } from '../../screens/Test/Test';
import { AboutScreen } from '../../screens/About/AboutScreen';
import HomeStack from '../stacks/HomeStack/index';

export const BottomTabItemList = [
    {
        label: 'Home',
        icon: 'Car',
        component:HomeStack,
        headerShown:false,
        item: faHome,
    },
    {
        label: 'About',
        icon: 'Car',
        component:AboutScreen,
        headerShown:true,
        item: faCoffee,
    },
    {
        label: 'Test',
        icon: 'Car',
        component:TestScreen,
        headerShown:true,
        item: faCoffee,
    },
]