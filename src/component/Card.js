import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, Pressable } from 'react-native';
import { backgroundColor, textColor } from '../utils';
// import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function Card({ title, image, onPress, blurRadius }) {
  const color = backgroundColor();
  return (
    <Pressable style={[styles.card, styles.shadowProp, { backgroundColor: color }]} onPress={onPress}>
      <View>
        <ImageBackground
          source={image}
          blurRadius={blurRadius}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={[styles.text, {color: textColor()}]}>{title}</Text>
        </ImageBackground>
        {/* <Image source={{ uri: "https://reactjs.org/logo-og.png" }} style={{ height: 200, width: 200 }} /> */}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    borderRadius: 12,
    width: '100%',
    marginVertical: 10,
    overflow: 'hidden'
  },
  shadowProp: {
    shadowColor: 'black',
    elevation: 10,
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  image: {
    justifyContent: "center",
  },
  text: {
    fontSize: 42,
    lineHeight: 200,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "#aaa",
    textShadowRadius: 10,
    fontFamily: "cursive",
  },
});
