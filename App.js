

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Routs from "./src/index"; //For all routs or all screens of project

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Routs />
    </SafeAreaView>
  );
};

export default App;