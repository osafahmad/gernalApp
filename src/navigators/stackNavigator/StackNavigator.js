
import React from "react";
import ReactNavigation,{ createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems } from "react-navigation";
import {NavigationConfig} from "../stackViewTransitionConfigs/TransitionConfig"; //customs animations

import SplashScreen from "../../screens/splash/SplashScreen";
import LoginScreen from "../../screens/logIn/LogInScreen";
import SignUpScreen from "../../screens/signUp/SignUpScreen";
const AppNavigator = createStackNavigator({
    Splash: { screen: SplashScreen },
    LogIn: { screen: LoginScreen },
    SignUp: { screen: SignUpScreen }

}, {
        initialRouteName: "LogIn",
        mode: "card",
        headerMode: "none",
        transitionConfig: NavigationConfig
        
        //the fllowing is for left to right
    //   transitionConfig: () =>
    //       ReactNavigation.StackViewTransitionConfigs.SlideFromRightIOS
      });
// const AppContainer = createAppContainer(AppNavigator);
export default AppNavigator;