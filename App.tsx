/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
// import {store, persistor } from './src/store';
import {store, persistor} from './src/store';
import MainNav from './src/navigation';
import {AlertNotificationRoot} from 'react-native-alert-notification';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AlertNotificationRoot>
            <MainNav />
          </AlertNotificationRoot>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
// +        def lintVitalAnalyzeTask = tasks.findByName("lintVitalAnalyze${targetName}")
// +        if (lintVitalAnalyzeTask) {
// +            lintVitalAnalyzeTask.dependsOn(fontCopyTask)
// +        }