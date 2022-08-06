import React from "react";
import { StyleSheet, SafeAreaView, Image } from "react-native";
import CompanionBottomSheet from "../components/CompanionBottomSheet";
import maxPhone from "../../assets/images/companion/iphone_size_max_green.png"

export default function CompanionProfileScreen({ navigation, route }) {
  return(
    <SafeAreaView style={styles.container}>
      <Image source={maxPhone} />
      <CompanionBottomSheet navigation={navigation} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red'
  },
});