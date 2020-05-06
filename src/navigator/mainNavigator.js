import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile39524Navigator from '../features/UserProfile39524/navigator';
import Tutorial39523Navigator from '../features/Tutorial39523/navigator';
import NotificationList39495Navigator from '../features/NotificationList39495/navigator';
import Settings39494Navigator from '../features/Settings39494/navigator';
import Settings39486Navigator from '../features/Settings39486/navigator';
import UserProfile39484Navigator from '../features/UserProfile39484/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile39524: { screen: UserProfile39524Navigator },
Tutorial39523: { screen: Tutorial39523Navigator },
NotificationList39495: { screen: NotificationList39495Navigator },
Settings39494: { screen: Settings39494Navigator },
Settings39486: { screen: Settings39486Navigator },
UserProfile39484: { screen: UserProfile39484Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
