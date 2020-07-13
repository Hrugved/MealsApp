import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Platform, TouchableNativeFeedback } from "react-native";

const GridItem = ({ onSelect, title, color }) => {
  let TouchCmp = TouchableOpacity
  if(Platform.OS==='android' && Platform.Version>=21) {
    TouchCmp = TouchableNativeFeedback
  }
  return (
    <View style={styles.gridItem}>
       <TouchCmp style={{flex:1}} onPress={onSelect}>
      <View style={{...styles.container,backgroundColor: color}}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
    </TouchCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 15,
    borderRadius: 10,
    overflow: Platform.OS==='android' && Platform.Version>=21  ? 'hidden' : 'visible',
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    textAlign: "right",
  },
});

export default GridItem;
