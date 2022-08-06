import React from "react";
import { StyleSheet, SafeAreaView, Image } from "react-native";
import CompanionBottomSheet from "../components/CompanionBottomSheet";

export default function CompanionProfileScreen({ navigation, route }) {
  const { companionName, companionImageSrc, companionAvatarSrc, companionBirthday } = route.params;

  return(
    <SafeAreaView style={styles.container}>
      <Image source={companionImageSrc} />
      <CompanionBottomSheet companionAvatarSrc={companionAvatarSrc} companionName={companionName} companionBirthday={companionBirthday} navigation={navigation} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red'
  },
});