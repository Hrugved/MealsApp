import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

const FavouritesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>FavouritesScreen</Text>
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

export default FavouritesScreen;