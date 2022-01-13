import { SplashScreen } from "../../../screens/SplashScreen/SplashScreen";
import { BottomTabNavigation } from '../../bottom-tab/BottomTabNavigation';
import { DrawerMenuNavigaiton } from '../../drawer/DrawerMenuNavigation';

const Screens = [
    {
        name: 'Splash',
        component: SplashScreen,
        headerShown: true
    },
    {
        name: 'DrawerTabNavigation',
        component: DrawerMenuNavigaiton,
        headerShown: true
    },
    {
        name: 'BottomTabNavigation',
        component: BottomTabNavigation,
        headerShown: true
    },
]

export default Screens;