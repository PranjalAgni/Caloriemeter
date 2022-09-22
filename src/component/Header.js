import React from 'react'
import { Image, Pressable, View, Text, Share } from 'react-native';
import ShareImage from '../../assets/share.png';
import { textColor } from '../utils';

function Header() {
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
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
      <Text style={{ fontSize: 40, color: textColor(), fontWeight: "800", fontFamily: "cursive" }}>Calorie Meter</Text>
      <Pressable onPress={onShare}>
        <Image source={ShareImage} style={{ height: 25, width: 25, alignSelf: "center", marginTop: 10 }} />
      </Pressable>
    </View>
  )
}

export default Header;