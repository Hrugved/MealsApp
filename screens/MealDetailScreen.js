import React from 'react';
import {View,Text,StyleSheet,ScrollView,Image} from 'react-native'

import HeaderButton from '../components/HeaderButton'
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import DefaultText from '../components/DefaultText'


const ListItem = props => (
  <View style={styles.listItem}>
    <DefaultText>{props.children}</DefaultText>
  </View>
)

const MealDetailScreen = ({navigation}) => {

  const mealId = navigation.getParam('mealId')
  const meal = MEALS.find(meal => meal.id===mealId)

  return (
    <ScrollView>
      <View>
        <Image source={{uri: meal.imageUrl}} style={styles.image} />
        <View style={styles.details}>
            <DefaultText>{meal.duration}m</DefaultText>
            <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
          </View>
        <Text style={styles.title}>Ingredients</Text>
        {meal.ingredients.map(ing => <ListItem key={ing}>{ing}</ListItem>)}
        <Text style={styles.title}>Steps</Text>
        {meal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
      </View>
    </ScrollView>
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
  details:{
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem:{
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
})

export default MealDetailScreen;