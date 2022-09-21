import React, { useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Share, Image, Pressable, useColorScheme } from 'react-native';
import Card from './Card';
import { textColor } from '../utils';
import GetStartedImage from '../../assets/get_started.jpeg';
import HistoryImage from '../../assets/history_table.jpg';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Header from './Header';

function HomeScreen({ navigation }) {
  const handlePress = async () => {
    const result = await launchCamera();
    console.log(result);
    navigation.push("Details", { imageUri: result.assets[0].uri });
  }

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{ padding: 20, flex: 1, backgroundColor: isDarkMode ? Colors.black : Colors.white, }}>
      <Header />
      <Card
        image={GetStartedImage}
        title="Get Started"
        onPress={handlePress}
        blurRadius={10}
      />

      <Card
        image={HistoryImage}
        title="History"
        blurRadius={10}
      />
    </View>
  )
}

export default HomeScreen;
