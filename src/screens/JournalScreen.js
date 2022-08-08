import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, ImageBackground } from "react-native";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import db from "../../firebase";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import CameraButton from "../../assets/images/journalButtons/camera_button_yellow.png"
import VoiceButton from "../../assets/images/journalButtons/voice_button_yellow.png"
import JournalButton from "../../assets/images/journalButtons/journal_button_yellow.png"
import JournalBackground from "../../assets/images/journalButtons/snap_journal_background_more_space.png"

export default function JournalScreen({route}) {
  const [contentInput, onChangeContentInput] = useState("");
  const { user, userData } = useAuthentication();

  const demoValueControlledTextArea = e => {
    setTextAreaValue(e.currentTarget.value);
  };

  const onSave = () => {
    const { journalName } = route.params;
    const userRef = doc(db, "Users", user.uid);
    console.log('userRef', userRef.path)
    if(journalName){
        console.log('journalName', journalName)
        const journalRef = doc(userRef, "journals", journalName)
        console.log('journalRef', journalRef.path)
        setDoc(journalRef, {
           content: contentInput,
           lastEdited: new Date()
        }).catch(
            e => console.log('here firebase error ', e)
        )
    }
  }

  return(
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity style=></TouchableOpacity> */}
      <ImageBackground source={JournalBackground} style={styles.image}>
        {/* <View style={styles.titleTextContainer}>
           <Text style={styles.titleText}>Snap Journal</Text>
        </View> */}
        <View style={styles.contentInputContainer}>
            <TextInput
                style={styles.contentInput}
                onChangeText={onChangeContentInput}
                value={contentInput}
                multiline
            />
        </View>
        <View style={styles.journalButtonContainer}>
            <View>
                <TouchableOpacity onPress={() => console.log('voice journal button press')}>
                    <Image source={VoiceButton} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => console.log('camera journal button press')}>
                    <Image source={CameraButton} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => console.log('journal journal button press')}>
                    <Image source={JournalButton} />
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.saveButtonContainer}>
            {/* <Button title='Save' style={styles.saveButton} onPress={onSave} /> */}
            <TouchableOpacity onPress={onSave}>
              <Text>Save</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 15
  },
  titleTextContainer: {
    marginTop: 15,
    marginBottom: 15,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 30
  },
  contentInputContainer: {
    marginTop: 80,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "#FFF",
    height: 500,
    borderWidth: 1,
    borderRadius: 26.6456,
  },
  contentInput: {
    padding: 10
  },
  journalButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  saveButtonContainer: {
    marginTop: 20,
    marginBottom: 10,
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  saveButton: {
    color: 'red',
    marginBottom: 10
  }
});