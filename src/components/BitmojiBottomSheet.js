import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import Cat_Max from "../../assets/images/bitmoji/cat_max_green.png";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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
  const snapPoints = useMemo(() => ["13.5%","40%"], []);

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
          <Image source={require('../../assets/images/bitmojiIcons/hanger.png')} style={{height:40,width:40}}></Image>
              <Text style={styles.textContent}>   Change Outfit</Text>
              <MaterialIcons name="arrow-forward-ios" size={23} color="gray" style={{marginLeft:155}}></MaterialIcons>
          </TouchableOpacity>
          <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  }}
/>
          <TouchableOpacity style={styles.iconContainer}>
          <Image source={require('../../assets/images/bitmojiIcons/share.png')} style={{height:40,width:40}}></Image>
          <Text style={styles.textContent} >   Share </Text>
          <MaterialIcons name="arrow-forward-ios" size={23} color="gray" style={{marginLeft:213}}></MaterialIcons>
          </TouchableOpacity>  
          <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  }}
/>
          <TouchableOpacity style={styles.iconContainer}>
          <Image source={require('../../assets/images/bitmojiIcons/image.png')} style={{height:40,width:40}}></Image>
          <Text style={styles.textContent}>   Pose and Background </Text>
          <MaterialIcons name="arrow-forward-ios" size={23} color="gray" style={{marginLeft:92}}></MaterialIcons>
          </TouchableOpacity>  
          <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  }}
/>
          <TouchableOpacity style={styles.iconContainer}>
          <Image source={require('../../assets/images/bitmojiIcons/selfie.png')} style={{height:40,width:40}}></Image>
          <Text style={styles.textContent}>   Change Selfie</Text>
          <MaterialIcons name="arrow-forward-ios" size={23} color="gray" style={{marginLeft:157}}></MaterialIcons>
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
     justifyContent:"left",
     marginLeft: 33,
     padding: 4,
    //  borderWidth: 0.2,
    //  borderColor: "#D3D3D3",
     
  },
  textContent:{
    fontSize: 17,
  }
});