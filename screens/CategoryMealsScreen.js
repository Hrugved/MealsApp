import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import MealItem from "../components/MealItem";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  const renderMealItem = ({ item }) => (
    <MealItem
      title={item.title}
      imageUrl={item.imageUrl}
      affordability={item.affordability}
      duration={item.duration}
      complexity={item.complexity}
      onSelect={() => navigation.navigate('MealDetail',{
        mealId: item.id
      })}
    />
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, _) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%"}}
        contentContainerStyle={{alignItems: 'center'}}
      />
    </View>
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
