import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {enableScreens} from 'react-native-screens'
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
 
import MealsNavigator from "./navigation/MealsNavigator";
import mealsReducer from "./store/reducers/meals"

enableScreens() // performance...android->Fragments and ios->UI-view-controller

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer)

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require('./assets/fonts/OpenSans-Regular.ttf'),
    "open-sans-bold": require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  if (!assetsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setAssetsLoaded(true)}
        onError={() => console.log(error)}
      />
    );
  }

  return <Provider store={store}><MealsNavigator /></Provider>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
