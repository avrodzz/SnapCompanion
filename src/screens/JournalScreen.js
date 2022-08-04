import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Button, TextInput } from "react-native";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import db from "../../firebase";
import { useAuthentication } from "../utils/hooks/useAuthentication";

export default function JournalScreen({route}) {
//   const [journalName, setJournalName] = useState("");
  const { journalName } = route.params;
  const [contentInput, onChangeContentInput] = useState("");
  const { user, userData } = useAuthentication();

  const demoValueControlledTextArea = e => {
    setTextAreaValue(e.currentTarget.value);
  };

  const onSave = () => {
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
        <View style={styles.titleTextContainer}>
           <Text style={styles.titleText}>{journalName ? journalName : 'Title'}</Text> 
        </View>
        <View style={styles.contentInputContainer}>
            <TextInput
                style={styles.contentInput}
                onChangeText={onChangeContentInput}
                value={contentInput}
                multiline
            />
        </View>
        <View style={styles.saveButtonContainer}>
            <Button title='Save' style={styles.saveButton} onPress={onSave}></Button>
        </View>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
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
    margin: 15,
    backgroundColor: "#FFF",
    height: 100
  },
  contentInput: {

  },
  saveButtonContainer: {

  },
  saveButton: {

  }
});