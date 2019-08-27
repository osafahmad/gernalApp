import { createSwitchNavigator, createAppContainer } from "react-navigation";

import RootStackNavigator from "./stackNavigator/StackNavigator";
import Drawer from "./drawerNavigator/DrawerNavigator";

const AppSwitchNavigator = createSwitchNavigator({
    // Welcome: { screen: WelcomeScreen },
    Root: {
        //splash and login component
        screen: RootStackNavigator
    },
    Home: { screen: Drawer }
});

const AppContainer = createAppContainer(AppSwitchNavigator);
export default AppContainer;