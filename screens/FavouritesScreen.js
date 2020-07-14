import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {HeaderButtons,Item} from 'react-navigation-header-buttons'

import MealList from "../components/MealList";
import HeaderButton from '../components/HeaderButton'
import { MEALS } from "../data/dummy-data";


const FavouritesScreen = ({ navigation }) => {
  const displayedMeals = MEALS.filter(
    (meal) => meal.id == "m1" || meal.id == "m2"
  );

  return <MealList data={displayedMeals} navigation={navigation} />;
};

FavouritesScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {navigation.toggleDrawer()}}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavouritesScreen;
