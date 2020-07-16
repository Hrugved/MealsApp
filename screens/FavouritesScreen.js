import React from "react";
import {useSelector} from 'react-redux'
import { View,Text,StyleSheet } from "react-native";
import {HeaderButtons,Item} from 'react-navigation-header-buttons'

import MealList from "../components/MealList";
import HeaderButton from '../components/HeaderButton'
import DefaultText from "../components/DefaultText";


const FavouritesScreen = ({ navigation }) => {

  const favMeals = useSelector(state => state.meals.favoriteMeals)
  if(!favMeals || favMeals.length===0) {
    return <View style={styles.screen}>
      <DefaultText>You have no favourites meals added!</DefaultText>
    </View>
  }


  return <MealList data={favMeals} navigation={navigation} />;
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
