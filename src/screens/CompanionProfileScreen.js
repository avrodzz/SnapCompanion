import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import CompanionBottomSheet from "../components/CompanionBottomSheet";

export default function CompanionProfileScreen({ navigation, route }) {
  return(
      <CompanionBottomSheet />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
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