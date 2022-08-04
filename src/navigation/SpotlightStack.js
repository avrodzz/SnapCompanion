import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import SpotlightScreen from "../screens/SpotlightScreen";
import ProfileScreen from "../screens/ProfileScreen";
import StatBar from '../components/StatBar'

const Stack = createStackNavigator();


export default function SpotlightStack({ navigation }) {
  let screenOptions = {
    // tabBarShowLabel: false,
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Spotlight" component={SpotlightScreen} options={{...screenOptions, headerShown:true}} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{...screenOptions, headerTransparent:true}}/>
    </Stack.Navigator>
  );
}
