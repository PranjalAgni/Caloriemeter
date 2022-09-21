import React, { useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Share, Image, Pressable } from 'react-native';
import Card from './Card';
import { textColor } from '../utils';
import GetStartedImage from '../../assets/get_started.jpeg';
import HistoryImage from '../../assets/history_table.jpg';
import ShareImage from '../../assets/share.png';

function ImagePicker() {
  const [imagePath, setImagePath] = useState();
  const handlePress = async () => {
    const result = await launchCamera();
    console.log(result);
    setImagePath(result.assets[0].uri);
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Get your food calorie | Calorie Meter',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <Text style={{ fontSize: 40, color: textColor(), fontWeight: "800", fontFamily: "cursive" }}>Calorie Meter</Text>
        <Pressable onPress={onShare}>
          <Image source={ShareImage}style={{height: 25, width: 25, alignSelf: "center", marginTop: 10}} />
        </Pressable>
      </View>
      <Card
        image={GetStartedImage}
        title="Get Started"
        onPress={handlePress}
        blurRadius={10}
      />

      <Card
        image={HistoryImage}
        title="History"
        onPress={handlePress}
        blurRadius={10}
      />
      {imagePath && <Image source={{ uri: imagePath }} style={{ height: 200, width: 200 }} />}
    </View>
  )
}

export default ImagePicker;
