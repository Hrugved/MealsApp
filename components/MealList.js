import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import MealItem from "../components/MealItem";

const MealList = ({ data, navigation }) => {

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
    <View style={styles.list}>
      <FlatList
        data={data}
        keyExtractor={(item, _) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%"}}
        contentContainerStyle={{alignItems: 'center'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MealList;
