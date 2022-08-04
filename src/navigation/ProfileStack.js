import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import CompanionProfileScreen from "../screens/CompanionProfileScreen";
import ProfileScreen from "../screens/ProfileScreen";
import StatBar from '../components/StatBar'

const Stack = createStackNavigator();


export default function SpotlightStack({ navigation }) {
  let screenOptions = {
    // tabBarShowLabel: false,
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="CompanionProfileScreen" component={CompanionProfileScreen} options={{...screenOptions, headerShown:true}} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{...screenOptions, headerTransparent:true}}/>
    </Stack.Navigator>
  );
}
