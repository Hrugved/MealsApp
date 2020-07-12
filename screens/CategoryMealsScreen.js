import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

const CategoryMealsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>CategoryMealsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default CategoryMealsScreen;