import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import CameraButton from "../../assets/images/companionButtons/camera_button.png"
import HeartButton from "../../assets/images/companionButtons/heart_button.png"
import ChatButton from "../../assets/images/companionButtons/chat_button.png"
import JournalButton from "../../assets/images/companionButtons/journal_button.png"



export default function CompanionButtons(props) {

  const onCameraButtonPress = () => {
    console.log('camera button press');
    props.navigation.navigate('Camera');
  }

  const onChatButtonPress = () => {
    console.log('chat button press');
    props.navigation.navigate('ChatStack');
  }

  const onHeartButtonPress = () => {
    console.log('heart button press');
  }

  const onJournalButtonPress = () => {
    console.log('journal button press');
  }

  return (
    <View style={styles.container}>
        <View>
            <TouchableOpacity onPress={onCameraButtonPress}>
                <Image source={CameraButton} />
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={onChatButtonPress}>
                <Image source={ChatButton} />
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={onHeartButtonPress}>
                <Image source={HeartButton} />
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={onJournalButtonPress}>
                <Image source={JournalButton} />
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5
  },
});