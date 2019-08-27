

import React, { Fragment } from 'react';
import {
  SafeAreaView,
} from 'react-native';

import Routs from "./src/navigators/index"; //For all routs or all screens of project

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Routs />
    </SafeAreaView>
  );
};

export default App;