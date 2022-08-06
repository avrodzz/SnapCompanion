import React from "react";
import { createStackNavigator } from "@react-navigation/stack";



// Screens
import ChatScreen from "../screens/ChatScreen";
import ConversationScreen from "../screens/ConversationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import JournalScreen from "../screens/JournalScreen";
import { getAuth, signOut } from "firebase/auth";
import StatBar from "../components/StatBar";
import CompanionProfileScreen from "../screens/CompanionProfileScreen";


const Stack = createStackNavigator();

export default function ChatStack({ navigation }) {

  const auth = getAuth();
  const user = auth.currentUser;

  let screenOptions = {
    tabBarShowLabel: false,
    // headerShown: false,
    header: () => (
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
      <Stack.Screen name="Conversation" component={ConversationScreen}  options={{...screenOptions, headerShown: false}} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{...screenOptions, headerShown: false}}/>
      <Stack.Screen name="Journal" component={JournalScreen} options={{...screenOptions, headerShown: false}}/>
    </Stack.Navigator>
  );
}
