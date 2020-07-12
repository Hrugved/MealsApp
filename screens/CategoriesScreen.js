import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoriesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>CategoriesScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoriesScreen;
