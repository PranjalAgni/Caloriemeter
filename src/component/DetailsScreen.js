import React, { useEffect } from 'react'
import { Image, Text, useColorScheme, View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Card from './Card';
import Header from './Header';
import { backgroundColor } from '../utils';
import { connect } from 'react-redux';

function DetailsScreen({ route, navigation, dispatch }) {
  const isDarkMode = useColorScheme() === 'dark';
  const imageUri = route.params.imageUri;
  const item = route.params.item;
  const source = route.params.source;
  const color = backgroundColor();
  useEffect(() => {
    if (source === "HomeScreen") {
      const payload = {
        [Date.now()]: {
          calorie: parseInt(Math.random() * 1000),
          uri: route.params.imageUri,
        }
      };
      dispatch({
        type: "ADD_CALORIE_DATA",
        payload,
      });
    }

    return () => { }
  }, []);

  return (
    <View style={{ padding: 20, flex: 1, backgroundColor: "#eee", }}>
      <Header />
      <View style={{
        elevation: 10,
        backgroundColor: "white",
        borderRadius: 20,
      }}>
        <Image
          source={{ uri: item?.uri ?? imageUri }}
          style={{
            width: "100%",
            height: 500,
            alignSelf: "center",
            marginHorizontal: 39,
            borderRadius: 20
          }}
        />
      </View>

      <View style={[styles.card, styles.shadowProp, { backgroundColor: color, height: 50 }]}>
        <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
          <View style={{ flex: 1, alignSelf: 'stretch' }}>
            <Text style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "500",
              color: "green"
            }}>Apple</Text>
          </View>
          <View style={{ flex: 1, alignSelf: 'stretch' }}>
            <Text style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "500",
              color: "green"
            }}>{item?.calorie ?? parseInt(Math.random() * 10000)}Cal</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    width: '100%',
    marginTop: 30,
    overflow: 'hidden'
  },
  shadowProp: {
    // shadowColor: '',
    elevation: 10,
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 10,
    borderColor: "green",
    borderWidth: 2
  },
});

export default connect()(DetailsScreen)
