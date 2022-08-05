import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import CompanionListHeader from "./CompanionListHeader";
import CompanionListItem from "./CompanionListItem";
import catMax1 from "../../assets/catMax1.png";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function BottomSheetComponent() {
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
  const snapPoints = useMemo(() => [ "23%","40%", "60%"], []);

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
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          {/* {data.map(renderItem)} */}
          <CompanionListHeader  avatarSrc={catMax1} avatarSize={67.61} companionName='Cat and Max' companionBirthday='August 3, 2022' />
          {/* <CompanionListItem headerTextTitle='Saved Journals'/>
          <CompanionListItem headerTextTitle='Resources'/> */}
          <TouchableOpacity style={styles.iconContainer}>
              <MaterialCommunityIcons style={{display:"inlineBlock"}} name="hanger" size={30} color="black"  />
              <Text>Change Outfit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconContainer}>
          <Entypo name ="share-alternative" size={30} color="black" />
          <Text>Share </Text>
          </TouchableOpacity>  
          <TouchableOpacity style={styles.iconContainer}>
          <AntDesign name="picture" size={30} color="black" /> 
          <Text>Pose and Background </Text>
          </TouchableOpacity>  
          <TouchableOpacity style={styles.iconContainer}>
          <MaterialCommunityIcons name="face-man-profile" size={30} color="black"/> 
          <Text>Change Selfie</Text>
          </TouchableOpacity>  
        </BottomSheetScrollView>
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
  contentContainer: {
    // display:'flex', 
    // flexDirection: 'row'
  },
  iconContainer: {
    display:"flex", 
    flexDirection:"row",
     alignItems:"center", 
     justifyContent:"left"
  },
});