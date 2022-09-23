import React, { useEffect, useState } from 'react'
import { Image, Text, useColorScheme, View, StyleSheet, SectionList, Pressable } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Card from './Card';
import Header from './Header';
import { backgroundColor, textColor } from '../utils';
import { connect } from 'react-redux';




function HistoryScreen({ route, navigation, dispatch, calorie }) {
  const Item = ({ item }) => {
    const date = item.date;
    const time = new Date(parseInt(date)).toLocaleTimeString();
    const handlePress = () => {
      navigation.push("Details", { item: item, source: "History" });
    }
    return (
      <Pressable style={styles.item} onPress={handlePress}>
        <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
        <View style={styles.content}>
          <Text style={[styles.itemName,]}>Apple</Text>
          <Text style={[styles.itemCalorie]}>{item.calorie} Cal</Text>
          <Text style={[styles.itemTime]}>{time}</Text>
        </View>
      </Pressable>
    );
  };
  const [items, setItems] = useState([]);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const historyItems = {};
    Object.keys(calorie).forEach((key) => {
      const date = new Date(parseInt(key)).toDateString();
      if (!historyItems[date]) historyItems[date] = [];
      historyItems[date].push({ ...calorie[key], date: key });
    });
    const data = [];
    Object.keys(historyItems).forEach((key) => {
      historyItems[key].reverse();
      data.push({
        title: key,
        data: historyItems[key],
      })
    });
    data.reverse();
    setItems(data);
    return () => { }
  }, []);

  return (
    <View style={{ padding: 20, flex: 1, backgroundColor: "#eee", }}>
      <Header />
      <SectionList
        sections={items}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        ListEmptyComponent={<Text style={[styles.title]}>No Data</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: "800",
    fontSize: 25,
    fontFamily: "cursive",
    color: "#000",
  },
  title: {
    color: "#fff",
    fontSize: 20,
  },
  item: {
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 8,
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    elevation: 10,
    width: "98%",
    alignSelf: "center",
    borderRadius: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    marginLeft: 40,
  },
  itemName: {
    color: "black",
    fontSize: 25,
    fontWeight: "800",
    // alignSelf: "center"
  },
  itemCalorie: {
    color: "green",
    fontSize: 20,
    // alignSelf: "center"
  },
  itemTime: {
    textAlign: "right",
    color: "black",
    fontSize: 15,
    marginTop: 20
  }
});

const mapStateToProps = (state) => ({ calorie: state.calorie })

export default connect(mapStateToProps)(HistoryScreen)
