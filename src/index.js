
import React from "react";
import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems } from "react-navigation";

import LoginScreen from "./screens/logIn/LogIn";
import SignUpScreen from "./screens/signUp/SignUp";

const AppNavigator = createStackNavigator({

    Login: { screen: LoginScreen },
    SignUp: { screen: SignUpScreen },

}, {
        initialRouteName: "Login",
        mode: "card",
        headerMode: "none"
    });
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;