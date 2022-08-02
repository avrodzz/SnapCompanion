import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import UserAvatar from 'react-native-user-avatar';

export default function CompanionListHeader(props) {

  return (
    <View style={styles.container}>
        <View style={styles.avatarContainer}>
            <UserAvatar size={props.avatarSize} name={props.companionName}></UserAvatar>
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