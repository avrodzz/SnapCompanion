import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

export default function TextInputComponent(props) {

  const [contentInput, onChangeContentInput] = useState("");

  const demoValueControlledTextArea = e => {
    setTextAreaValue(e.currentTarget.value);
  };

  return(
    
    <View style={props.styles}>
        <TextInput
            style={styles.contentInput}
            onChangeText={onChangeContentInput}
            value={contentInput}
            multiline
        />
    </View>
  )
}

const styles = StyleSheet.create({
  contentInputContainer: {
    margin: 15,
    backgroundColor: "#FFF",
    height: 100
  }
});