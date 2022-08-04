import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import CompanionListHeader from "./CompanionListHeader";
import CompanionButtons from "./CompanionButtons"
import CompanionListItem from "./CompanionListItem";
import maxAvatar from "../../assets/images/max_icon_green.png";
import Ionicons from "react-native-vector-icons/Ionicons";

<<<<<<< HEAD:src/components/CompanionBottomSheet.js
export default function CompanionBottomSheet() {
=======

export default function CompanionBottomSheet(props) {
>>>>>>> origin/main:src/components/BottomSheetComponent.js
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
  const snapPoints = useMemo(() => [ "29%", "38%", "60%"], []);

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
          {/* <View>
          <TouchableOpacity>
                <Ionicons name='chatbox' size={10} />;
          </TouchableOpacity>
            </View> */}
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