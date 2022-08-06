import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "@rneui/themed";


export default function CompanionListHeader(props) {

  return (
    <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Avatar rounded source={props.avatarSrc} size={props.avatarSize} />
        </View>
       
        <View style={styles.headerTextContainer}>
            <View style={styles.companionNameContainer}>
                <Text style={styles.companionName}>{props.companionName}</Text>
            </View>
            <View style={styles.companionBirthdayContainer}>
                <Text style={styles.companionBirthday}>Your companion since {props.companionBirthday}</Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15
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