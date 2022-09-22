/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import LottieSplashScreen from "react-native-lottie-splash-screen";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import RootNavigator from './src/navigation/RootNavigator';

import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const store = configureStore();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    setTimeout(() => {
      LottieSplashScreen.hide();
    }, 2000);
  }, []);


  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <View
          style={{
            height: "100%"
          }}>
          <RootNavigator />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
