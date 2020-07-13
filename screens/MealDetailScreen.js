import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

import HeaderButton from '../components/HeaderButton'
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const MealDetailScreen = ({navigation}) => {

  const mealId = navigation.getParam('mealId')
  const meal = MEALS.find(meal => meal.id===mealId)

  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen</Text>
    </View>
  );
}

MealDetailScreen.navigationOptions = ({navigation}) => {
  const mealId = navigation.getParam('mealId')
  const meal = MEALS.find(meal => meal.id===mealId)
  return {
    headerTitle: meal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Favourite' iconName='ios-star' onPress={null} />
      </HeaderButtons> 
    )
  }
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default MealDetailScreen;