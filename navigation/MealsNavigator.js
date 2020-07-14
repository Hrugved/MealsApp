import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"; // for android`ish look
import {createDrawerNavigator} from 'react-navigation-drawer'
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import FiltersScreen from '../screens/FiltersScreen'
import Colors from "../constants/colors";
import { Platform } from "react-native";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  }, 
  headerTintColor:
    Platform.OS === "android" ? Colors.white : Colors.primaryColor,
}

const MealsNavigator = createStackNavigator(
  {
    Categories: { screen: CategoriesScreen, headerTitle: "Meal Categories" },
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const favNavigator =  createStackNavigator({
  Favorite: FavouritesScreen,
  MealDetail: MealDetailScreen
}, {defaultNavigationOptions: defaultStackNavOptions})

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS==='android' ? <Text style={{fontFamily: 'open-sans'}}>Meals</Text> : 'Meals'
    },
  },
  Favorite: {
    screen: favNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.accentColor,
      tabBarLabel: Platform.OS==='android' ? <Text style={{fontFamily: 'open-sans'}}>Favourites</Text> : 'Favourites'
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.white,
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
          labelStyle: {
            fontFamily: 'open-sans'
          }
        },
      });

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
}, {defaultNavigationOptions: defaultStackNavOptions})

const MainNavigator = createDrawerNavigator({
  MealsFav: {screen: MealsFavTabNavigator, navigationOptions: {drawerLabel: 'Meals'}},
  Filters: FiltersNavigator,
}, {
  contentOptions:{
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
})

export default createAppContainer(MainNavigator);
