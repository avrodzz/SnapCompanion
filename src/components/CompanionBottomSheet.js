import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import CompanionListHeader from "./CompanionListHeader";
import CompanionButtons from "./CompanionButtons"
import CompanionListItem from "./CompanionListItem";
import maxAvatar from "../../assets/images/max_icon_green.png";
import Ionicons from "react-native-vector-icons/Ionicons";


export default function CompanionBottomSheet(props) {
  // hooks
  const sheetRef = useRef(null);

  // variables
  const data = useMemo(
    () =>
      Array(5)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );
  const snapPoints = useMemo(() => [ "22%", "38%", "60%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  const renderItem = useCallback(
    (item) => (
      <View key={item} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );

  return (
      <BottomSheet
        ref={sheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        backgroundStyle={{...styles.contentContainer}}
      >
        <BottomSheetScrollView contentContainerStyle={{...styles.contentContainer}}>
          <CompanionListHeader avatarSrc={maxAvatar} avatarSize={67.61} companionName='Max' companionBirthday='August 3, 2022' />
          <CompanionButtons />
          <CompanionListItem headerTextTitle='Saved Journals'/>
          <CompanionListItem headerTextTitle='Resources'/>
        </BottomSheetScrollView>
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "white",
    borderRadius: 26.6456
  }
});