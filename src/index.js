
import React from "react";
import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems } from "react-navigation";

import SplashScreen from "./screens/splash/SplashScreen";
import LoginScreen from "./screens/logIn/LogInScreen";
import SignUpScreen from "./screens/signUp/SignUpScreen";

const AppNavigator = createStackNavigator({
    Splash: { screen: SplashScreen },
    LogIn: { screen: LoginScreen },
    SignUp: { screen: SignUpScreen },

}, {
        initialRouteName: "LogIn",
        mode: "card",
        headerMode: "none"
    });
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;