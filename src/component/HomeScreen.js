import React, { useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Share, Image, Pressable, useColorScheme } from 'react-native';
import Card from './Card';
import { textColor } from '../utils';
import GetStartedImage from '../../assets/get_started.jpeg';
import HistoryImage from '../../assets/history_table.jpg';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Header from './Header';
import CustomModal from './Modal';

function HomeScreen({ navigation }) {
  const [modal, setModal] = useState(false);
  const handleCamera = async () => {
    const result = await launchCamera();
    navigation.push("Details", { imageUri: result.assets[0].uri, source: "HomeScreen" });
    setModal(false);
  }

  const handleHistory = () => {
    navigation.push("History");
  }

  const handleGallery = async () => {
    const result = await launchImageLibrary();
    navigation.push("Details", { imageUri: result.assets[0].uri, source: "HomeScreen" });
    setModal(false);
  }

  const handlePress = () => {
    setModal(true);
  }

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{ padding: 20, flex: 1, backgroundColor: "#eee", }}>
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
        onPress={handleHistory}
      />
      <CustomModal
        visible={modal}
        onCamera={handleCamera}
        onGallery={handleGallery} onClose={() => {
          setModal(false);
        }} />
    </View>
  )
}

export default HomeScreen;
