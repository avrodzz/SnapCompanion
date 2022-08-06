import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Button } from "react-native";

// Screens
import ChatScreen from "../screens/ChatScreen";
import ConversationScreen from "../screens/ConversationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { getAuth, signOut } from "firebase/auth";
import StatBar from "../components/StatBar";
import CompanionProfileScreen from "../screens/CompanionProfileScreen";


const Stack = createStackNavigator();

export default function ChatStack({ navigation }) {

  const auth = getAuth();
  const user = auth.currentUser;

  let screenOptions = {
    tabBarShowLabel: false,
    headerLeft: () => (
      <StatBar screen="chat" navigation={navigation} />
    ),
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={screenOptions}
      />
      <Stack.Screen name="CompanionProfileScreen" component={CompanionProfileScreen} options={{...screenOptions, headerShown: false}} />
      <Stack.Screen name="Conversation" component={ConversationScreen}  options={{headerShown: true}} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
