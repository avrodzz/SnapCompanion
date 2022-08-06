import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import Cat_Max from "../../assets/images/bitmoji/cat_max_green.png";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";
import BitmojiListHeader from "./BitmojiListHeader";


export default function BitmojiBottomSheet() {
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

  // Does not show bitmoji options page
  // const snapPoints = useMemo(() => ["13.5%"], []);

  // Does show bitmoji options on page (if we do not have time to style use the snap points above)
  const snapPoints = useMemo(() => ["13.5%","40%", "60%"], []);

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
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer} >
          <BitmojiListHeader avatarSrc={Cat_Max} avatarSize={67.61} name='Cat Tolentino' username='catandnova'/>
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