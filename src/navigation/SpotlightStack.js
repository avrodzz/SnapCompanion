import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import SpotlightScreen from "../screens/SpotlightScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

let screenOptions = {
  tabBarShowLabel: false,
  headerLeft: () => (
    <StatBar screen="map" navigation={navigation} />
  ),
};

export default function SpotlightStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Spotlight" component={SpotlightScreen} options={{...screenOptions, headerShown:true}} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{...screenOptions, headerTransparent:true}}/>
    </Stack.Navigator>
  );
}
