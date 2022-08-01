import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Button } from "react-native";
import { collection, doc, getDocs, updateDoc, arrayUnion } from "firebase/firestore";
import db from "../../firebase";
import { useAuthentication } from "../utils/hooks/useAuthentication";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function ChatScreen({ navigation}) {
  const [users, setUsers] = useState([]);
  
  // const { user, userData } = useAuthentication();

  const MESSAGE = {
    _id: '2',
    text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
    createdAt: new Date(),
    quickReplies: {
      type: 'checkbox', // or 'radio',
      values: [
        {
          title: 'Yes',
          value: 'yes',
        },
        {
          title: 'Yes, let me show you with a picture!',
          value: 'yes_picture',
        },
        {
          title: 'Nope. What?',
          value: 'no',
        },
      ],
    },
    user: {
      _id: '2',
      name: 'React Native',
    },
  }
  

  async function getUsers() {
    const querySnapshot = await getDocs(collection(db, "Chats"));
    querySnapshot.forEach((doc) => {
      setUsers((users) => [...users, doc.id]);
    });
  }

  useEffect(() => {
    getUsers();
  }, []);

  console.log("userId in ChatScreen.js:", users)

  return (
    <View style={styles.container}>
      {users?.map((user) => {
        return (
          <TouchableOpacity
            style={styles.userButton}
            onPress={() => {
              navigation.navigate("Conversation", {
                userId: user,
              });
            }}
            key={user}
          >
            <Ionicons
              style={styles.userIcon}
              name="ios-person-outline"
              size={36}
              color="lightgrey"
            />
            <Text style={styles.userName}> {user} </Text>
            <Ionicons
              style={styles.userCamera}
              name="ios-camera-outline"
              size={24}
              color="lightgrey"
            />
          </TouchableOpacity>
        );
      })}
      <Button title='button' onPress={() => {
        const chatRef = doc(db, "Chats", "Companion");

        updateDoc(chatRef, {
          // arrayUnion appends the message to the existing array
          messages: arrayUnion(MESSAGE),
        });
      }
        }>Click Me</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  userButton: {
    padding: 25,
    display: "flex",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  userIcon: {
    position: "absolute",
    left: 5,
    top: 5,
  },
  userName: {
    position: "absolute",
    left: 50,
    top: 14,
    fontSize: 18,
  },
  userCamera: {
    position: "absolute",
    right: 15,
    top: 10,
  },
});



