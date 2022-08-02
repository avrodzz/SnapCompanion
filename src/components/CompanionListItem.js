import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function CompanionListItem(props) {

  return (
    <View style={styles.container}>
       <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>{props.headerTextTitle}</Text>
       </View>
       <View style={styles.listContentContainer}>
            
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15
  },
  headerTextContainer: {
    marginLeft: 23.98
  },
  headerText: {
    fontSize: 21.98
  },
  listContentContainer: {
    marginLeft: 23.98,
    width: 342.04,
    height: 100,
    backgroundColor: '#E9E9E9'
  }
});