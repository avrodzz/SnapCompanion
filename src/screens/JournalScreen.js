import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
// import { TextArea, Box, Center, NativeBaseProvider, extendTheme } from "native-base";

export default function JournalScreen(props) {
//   const [textAreaValue, setTextAreaValue] = useState("");
  const [contentInput, onChangeContentInput] = useState("");

  const demoValueControlledTextArea = e => {
    setTextAreaValue(e.currentTarget.value);
  };


  return(
    <View style={styles.container}>
        <View style={styles.titleTextContainer}>
           <Text style={styles.titleText}>Title</Text> 
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
            <Button title='Save' style={styles.saveButton}></Button>
        </View>
        
    </View>
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
  saveButtonContainer: {

  },
  saveButton: {

  }
});