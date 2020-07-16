import {MEALS} from "../../data/dummy-data"
import { TOGGLE_FAVOURITE, SET_FILTERS } from "../actions/meals"

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_FAVOURITE: return toggleFavourite(state,action.id)
    case SET_FILTERS: return setFilters(state,action.filters)
    default: return state;
  }
  return state
}

const toggleFavourite = (state,id) => {
  const existingIndex = state.favoriteMeals.findIndex(item => item.id===id)
  if(existingIndex>=0) {
    const favoriteMeals = [...state.favoriteMeals]
    favoriteMeals.splice(existingIndex,1)
    return {...state,favoriteMeals:favoriteMeals}
  } else {
    const meal = state.meals.find(item => item.id===id)
    return {...state,favoriteMeals: state.favoriteMeals.concat(meal)}
  }
}

const setFilters = (state,filters) => {
  const filteredMeals = state.meals.filter(meal => {
    if(filters.glutenFree && !meal.isGlutenFree) {
      return false
    }
    if(filters.lactoseFree && !meal.isLactoseFree) {
      return false
    }
    if(filters.vegetarian && !meal.isVegetarian) {
      return false
    }
    if(filters.vegan && !meal.isVegan) {
      return false
    }
    return true
  })
  return {...state,filteredMeals: filteredMeals}
}


export default mealsReducer