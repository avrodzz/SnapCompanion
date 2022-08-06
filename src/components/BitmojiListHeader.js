import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar, NativeBaseProvider } from "native-base";


export default function BitmojiListHeader(props) {

  return (
    <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <NativeBaseProvider>
            <Avatar source={props.avatarSrc} />
          </NativeBaseProvider>
        </View>
       
        <View style={styles.headerTextContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{props.name}</Text>
            </View>
            <View style={styles.usernameContainer}>
                <Text style={styles.username}>{props.username}</Text>
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
  nameContainer: {
    marginTop: 5,
    marginBottom: 5
  },
  name: {
    fontSize: 21.98
  },
  usernameContainer: {

  },
  username: {

  }
});