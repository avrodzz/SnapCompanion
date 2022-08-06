import React from "react";
import { Alert, Modal, StyleSheet,Text, Pressable, View, Image, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import CameraButton from "../../assets/images/companionButtons/camera_button.png"
import HeartButton from "../../assets/images/companionButtons/heart_button.png"
import ChatButton from "../../assets/images/companionButtons/chat_button.png"
import JournalButton from "../../assets/images/companionButtons/journal_button.png"
import { useState } from "react";

export default function CompanionButtons(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [journalNameInput, onChangeJournalNameInput] = useState("");

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
    setModalVisible(true);
    props.navigation.navigate('Journal')
  }

  const onSubmitButtonPress = () => {
    setModalVisible(false);
    props.navigation.navigate('Journal', {
        journalName: journalNameInput
    })
    onChangeJournalNameInput("");
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
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <SafeAreaView style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Name Your Journal</Text>
            <View style={styles.contentInputContainer}>
                <TextInput
                    style={styles.contentInput}
                    onChangeText={onChangeJournalNameInput}
                    value={journalNameInput}
                />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onSubmitButtonPress}
            >
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, .2)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#FFFC00",
  },
  textStyle: {
    color: 'black',
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  contentInputContainer: {
    margin: 15,
    backgroundColor: "#E9E9E9",
    width: 200,
  },
});