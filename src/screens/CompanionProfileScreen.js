import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";
import CompanionBottomSheet from "../components/CompanionBottomSheet";

export default function CompanionProfileScreen({ navigation, route }) {
  return(
    <SafeAreaView style={styles.container}>
      <CompanionBottomSheet />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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