
// import {AppRegistry} from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import { PersistGate } from 'redux-persist/integration/react'
// AppRegistry.registerComponent(appName, () => App);



import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Provider } from "react-redux";
import App from './App';
import { persistor, store } from "./src/store/index";


class MainApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>

            </Provider>
        );
    }
};


AppRegistry.registerComponent(appName, () => MainApp);

// AppRegistry.registerComponent('MedicineProject', () => MainApp);