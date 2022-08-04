import React, { useCallback, useRef, useMemo } from "react";
<<<<<<< HEAD
import { StyleSheet, View, Text, Button } from "react-native";
import CompanionBottomSheet from "../components/CompanionBottomSheet";


export default function CompanionProfileScreen({ navigation, route }) {
  return(
      <CompanionBottomSheet />
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