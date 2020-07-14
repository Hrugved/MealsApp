import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";

import DefaultText from './DefaultText'

const GridItem = ({ onSelect, title, duration, complexity, affordability, imageUrl}) => {
  let TouchCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.mealItem}>
      <TouchCmp onPress={onSelect}>
        <View>
          <View style={{...styles.mealRow,...styles.mealHeader}}>
            <ImageBackground source={{uri: imageUrl}} style={styles.bgImage}>
            <View style={styles.titleContainer}><Text style={styles.title} numberOfLines={1}>{title}</Text></View>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow,...styles.mealDetail}}>
            <DefaultText>{duration}m</DefaultText>
            <DefaultText>{complexity.toUpperCase()}</DefaultText>
            <DefaultText>{affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '90%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 20 
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,.3)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: '#fff',
  }
});

export default GridItem;
