import React from "react";

import MealList from '../components/MealList'

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  

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

export default CategoryMealsScreen;
