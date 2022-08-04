import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import CameraButton from "../../assets/images/camera_button.png"
import HeartButton from "../../assets/images/heart_button.png"
import ChatButton from "../../assets/images/chat_button.png"



export default function CompanionButtons(props) {

  return (
    <View style={styles.container}>
        <View>
            <TouchableOpacity>
                <Image source={CameraButton} />
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity>
                <Image source={ChatButton} />
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity>
                <Image source={HeartButton} />
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