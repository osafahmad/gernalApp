import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems } from "react-navigation";

import HomeScreen from "../../screens/home/HomeScreen";

const Drawer = createDrawerNavigator({
    Main: { screen: HomeScreen },
}, {
        initialRouteName: "Main",
        // contentComponent: CustomDrawerHeaderComponent,
        // drawerBackgroundColor: colors.appBlue,
        drawerWidth: 200,
        // contentOptions: {
        //     labelStyle: {
        //         // fontFamily: 'SomeFont',
        //         color: colors.white,
        //         fontSize: fonts.size.regular
        //     },
        // }
    })

// const AppContainer = createAppContainer(Drawer);

export default Drawer;