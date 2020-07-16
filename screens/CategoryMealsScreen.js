import React from "react";
import {useSelector} from 'react-redux'
import { View,Text,StyleSheet } from "react-native";

import MealList from '../components/MealList'
import { CATEGORIES } from "../data/dummy-data";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");
  const MEALS = useSelector(state => state.meals.filteredMeals)
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  
  if(displayedMeals.length===0) {
    return <View style={styles.screen}>
      <DefaultText>No meals found matching your filters</DefaultText>
    </View>
  }

  return (
    <MealList data={displayedMeals} navigation={navigation} />
  );
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((item) => item.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryMealsScreen;
