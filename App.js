import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
import {AppLoading} from 'expo'

import MealsNavigator from "./navigation/MealsNavigator";

const fetchFonts = () => {
  return Font.loadAsync([
    { "open-sans": require("./assets/fonts/OpenSans-Regular.ttf") },
    { "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf") },
  ]);
};

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  if (!assetsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setAssetsLoaded(true)}
      />
    );
  }

  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
