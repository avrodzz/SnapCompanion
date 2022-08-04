import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


export default function CompanionButtons(props) {

  return (
    <View style={styles.container}>
        <View>
            <TouchableOpacity>
                <Ionicons name='chatbox' size={10} />;
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // marginBottom: 15
  },
  avatarContainer: {
    marginLeft: 23.98,
    marginRight: 19.32
  },
  headerTextContainer: {

  },
  companionNameContainer: {
    marginTop: 5,
    marginBottom: 5
  },
  companionName: {
    fontSize: 21.98
  },
  companionBirthdayContainer: {

  },
  companionBirthday: {

  }
});