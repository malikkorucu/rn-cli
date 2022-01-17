import { SplashScreen } from "../../../screens/SplashScreen/SplashScreen";
import { BottomTabNavigation } from './../../bottom-tab/BottomTabNavigation';
import { DrawerMenuNavigaiton } from '../../drawer/DrawerMenuNavigation';
import AnimationDrawerNavigation from "../../drawer/AnimationDrawerNavigation";

const Screens = [
    {
        name: 'Splash',
        component: SplashScreen,
        headerShown: true
    },
    {
        name: 'DrawerTabNavigation',
        component: AnimationDrawerNavigation,
        headerShown: true
    },
    {
        name: 'BottomTabNavigation',
        component: BottomTabNavigation,
        headerShown: true
    },
]

export default Screens;