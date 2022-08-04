import React, { useCallback, useRef, useMemo } from "react";
<<<<<<< HEAD
import { StyleSheet, View, Text, Button, SafeAreaView, Image } from "react-native";
=======
<<<<<<< HEAD
import { StyleSheet, View, Text, Button } from "react-native";
>>>>>>> 59be738ba829b2677dfeeca4851f2f65b34ac18f
import CompanionBottomSheet from "../components/CompanionBottomSheet";
import maxPhone from "../../assets/images/iphone_size_max_green.png"

export default function CompanionProfileScreen({ navigation, route }) {
  return(
    <SafeAreaView style={styles.container}>
      <Image source={maxPhone} />
      <CompanionBottomSheet />
<<<<<<< HEAD
    </SafeAreaView>
=======
=======
import { StyleSheet, View, Text, Button, SafeAreaView, Image } from "react-native";
import CompanionBottomSheet from "../components/CompanionBottomSheet";
import maxPhone from "../../assets/images/iphone_size_max_green.png"

export default function CompanionProfileScreen({ navigation, route }) {
  return(
    <SafeAreaView style={styles.container}>
      <Image source={maxPhone} />
      <CompanionBottomSheet />
    </SafeAreaView>
>>>>>>> origin/main
>>>>>>> 59be738ba829b2677dfeeca4851f2f65b34ac18f
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red'
  },
  contentContainer: {
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
});