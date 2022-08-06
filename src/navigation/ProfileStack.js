import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import CompanionProfileScreen from "../screens/CompanionProfileScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();


export default function ProfileStack({ navigation }) {
  let screenOptions = {

  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="CompanionProfileScreen" component={CompanionProfileScreen} options={{...screenOptions, headerShown: false}} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{...screenOptions, headerTransparent: false}} />
    </Stack.Navigator>
  );
}
