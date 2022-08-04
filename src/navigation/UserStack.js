import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import { Button } from "react-native";

import { getAuth, signOut } from "firebase/auth";

// Screens
import MapScreen from "../screens/MapScreen";
import CameraScreen from "../screens/CameraScreen";
<<<<<<< HEAD
import SpotlightStack from "./SpotlightStack";
<<<<<<< HEAD
import SpotlightScreen from "../screens/SpotlightScreen";
=======
=======
import SpotlightScreen from "../screens/SpotlightScreen";
>>>>>>> origin/main
>>>>>>> 59be738ba829b2677dfeeca4851f2f65b34ac18f
import CompanionProfileScreen from "../screens/CompanionProfileScreen";
import JournalScreen from "../screens/JournalScreen";

// Stacks
import ChatStack from "./ChatStack";


const Tab = createBottomTabNavigator();

export default function UserStack() {
  const auth = getAuth();
  const user = auth.currentUser;

  let screenOptions = {
    tabBarShowLabel: false,
    headerLeft: () => (
      <Button
        onPress={() => {
          signOut(auth)
            .then(() => {
              // Sign-out successful.
              user = null;
            })
            .catch((error) => {
              // An error happened.
              // should we do something with that error??
            });
        }}
        title="Log Out"
      />
    ),
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}
        initialRouteName="Camera"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            let iconColor;

            if (route.name == "Map") {
              iconName = "ios-location-outline";
              iconColor = focused ? "green" : "grey";
            } else if (route.name === "ChatStack") {
              iconName = "ios-chatbox-outline";
              iconColor = focused ? "#2b83b3" : "grey";
            } else if (route.name === "Camera") {
              iconName = focused ? "ios-scan-circle-outline" : "ios-camera-outline";
              iconColor = focused ? "yellow" : "grey";
            } else if (route.name === "Spotlight") {
              iconName = "ios-play-outline";
              iconColor = focused ? "red" : "grey";
            } else if (route.name === "Companion Profile") {
              iconName = "ios-paw-outline";
              iconColor = focused ? "red" : "grey"
            } else if (route.name === "Journal") {
              iconName = "ios-journal-outline";
              iconColor = focused ? "red" : "grey"
            }
            return <Ionicons name={iconName} size={size} color={iconColor} />;
          },
          tabBarStyle: { backgroundColor: "#000" },
        })}
      >
        <Tab.Screen name="Map" component={MapScreen} options={{...screenOptions, headerShown: false}} />
        <Tab.Screen name="ChatStack" component={ChatStack} options={{ headerShown: false, tabBarShowLabel: false }} />
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{...screenOptions, headerShown: false}} 
        />
        
        <Tab.Screen
<<<<<<< HEAD
          name="Spotlight"
          component={SpotlightScreen}
          options={{...screenOptions, headerShown: true}}
        />
        <Tab.Screen
          name="Companion Profile"
=======
<<<<<<< HEAD
          name="SpotlightStack"
          component={SpotlightStack}
          options={{...screenOptions, headerShown: false}}
        />
        <Tab.Screen
          name="CompanionProfile"
=======
          name="Spotlight"
          component={SpotlightScreen}
          options={{...screenOptions, headerShown: true}}
        />
        <Tab.Screen
          name="Companion Profile"
>>>>>>> origin/main
>>>>>>> 59be738ba829b2677dfeeca4851f2f65b34ac18f
          component={CompanionProfileScreen}
          options={{...screenOptions, headerShown: false}}
        />
        <Tab.Screen
          name="Journal"
          component={JournalScreen}
          options={screenOptions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
