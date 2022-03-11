import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons';
import { TestScreen } from '../../screens/Test/Test';
import { AboutScreen } from '../../screens/About/AboutScreen';
import HomeStack from './../stacks/HomeStack/index';
import { TicketsScreen } from '../../screens/Tickets/Tickets';

export const BottomTabItemList = [
    {
        label: 'Home',
        icon: 'Search',
        component: HomeStack,
        headerShown: false,
        item: faHome,
    },
    {
        label: 'Tickets',
        icon: 'Ticket',
        component: TicketsScreen,
        headerShown: false,
        item: faHome,
    },
    {
        label: 'Support',
        icon: 'Help',
        component: AboutScreen,
        headerShown: true,
        item: faCoffee,
    },
    {
        label: 'My Page',
        icon: 'User',
        component: TestScreen,
        headerShown: true,
        item: faCoffee,
    },
]