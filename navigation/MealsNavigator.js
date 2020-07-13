import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

import Colors from '../constans/colors'

const MealsNavigator = createStackNavigator({
  Categories: {screen: CategoriesScreen, headerTitle: "Meal Categories"},
  CategoryMeals: CategoryMealsScreen,
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor:
      Platform.OS === "android" ? Colors.white : Colors.primaryColor,
  }
})

export default createAppContainer(MealsNavigator)