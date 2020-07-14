import React,{useState, useEffect, useCallback} from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import Colors from '../constants/colors'

const FilterSwitch = ({label,state,onChange}) => {
  return (
    <View style={styles.filterContainer}>
        <Text>{label}</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }}
          thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
          value={state}
          onValueChange={onChange}
        />
      </View>
  )
}

const FiltersScreen = ({navigation}) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian]= useState(false);

  const saveFilters = useCallback(() => { // useCallback <= it will prevent create infinte loop
    const appliedFilters = {
      gluten: isGlutenFree,
      lactose: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    }
  }, [isGlutenFree,isLactoseFree,isVegan,isVegetarian])

  useEffect(() => {
    navigation.setParams({'save': saveFilters})
  }, [saveFilters]) // dont mention 'navigation' as depedency <= it will prevent create infinte loop

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch label='gluten-free' state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />
      <FilterSwitch label='Lactose-free' state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)} />
      <FilterSwitch label='Vegan' state={isVegan} onChange={newValue => setIsVegan(newValue)} />
      <FilterSwitch label='Vegetarian' state={isVegetarian} onChange={newValue => setIsVegetarian(newValue)} />
    </View>
  );
};

FiltersScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navigation.getParam('save')}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 15
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 5,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15 
  },
});

export default FiltersScreen;
