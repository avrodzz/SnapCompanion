import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";
import Ionicons from "react-native-vector-icons/Ionicons";
import maxPhone from "../../assets/images/companion/iphone_size_max_green.png"
import maxAvatar from "../../assets/images/companion/max_icon_green.png";
import { Avatar } from "@rneui/themed";
import Kenny from "../../assets/images/bitmoji/kenny.png";
import Alexis from "../../assets/images/bitmoji/alexis.png";
import Nelson from "../../assets/images/bitmoji/nelson.png";
import Andres from "../../assets/images/bitmoji/andres.png";




export default function ChatScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const bitmojiAvatar = [Alexis,Andres,Kenny,maxAvatar,Nelson];
  // const MESSAGE = {
  //   _id: '2',
  //   text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
  //   createdAt: new Date(),
  //   quickReplies: {
  //     type: 'checkbox', // or 'radio',
  //     values: [
  //       {
  //         title: 'Yes',
  //         value: 'yes',
  //       },
  //       {
  //         title: 'Yes, let me show you with a picture!',
  //         value: 'yes_picture',
  //       },
  //       {
  //         title: 'Nope. What?',
  //         value: 'no',
  //       },
  //     ],
  //   },
  //   user: {
  //     _id: '2',
  //     name: 'React Native',
  //   },
  // }
  const onMaxAvatarPress = () => {
    navigation.navigate('CompanionProfileScreen', {
      companionName: 'Max',
      companionImageSrc: maxPhone,
      companionAvatarSrc: maxAvatar,
      companionBirthday: 'August 6, 2022'
    });
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
      <View style={{ height:93}}>
       
      </View>
        
      {users?.map((user,i) => {
        return (
          <View style={styles.userContainer}> 
          <TouchableOpacity
            style={styles.userButton}
            onPress={() => {
              navigation.navigate("Conversation", {
                userId: user,
              });
            }}
            key={user}
          >
            <TouchableOpacity style={styles.userIcon} onPress={onMaxAvatarPress}>
                <Avatar rounded source={bitmojiAvatar[i]} size={45} />
            </TouchableOpacity>
            <Text style={styles.userName}> {user} </Text>
            <Ionicons
              style={styles.userCamera}
              name="ios-camera-outline"
              size={24}
              color="lightgrey"
            />
          </TouchableOpacity>
          
          {/* <View>
          <TouchableOpacity style={styles.userIcon}>
                <Avatar rounded source={Kenny} size={45} />
            </TouchableOpacity>
            <Text style={styles.userName}> Kenny </Text>
            <Ionicons
              style={styles.userCamera}
              name="ios-camera-outline"
              size={24}
              color="lightgrey"
            />
        </View> */}

        {/* <TouchableOpacity style={styles.userIcon}>
                <Avatar rounded source={Alexis} size={45} />
            </TouchableOpacity>
            <Text style={styles.userName}> Alexis </Text>
            <Ionicons
              style={styles.userCamera}
              name="ios-camera-outline"
              size={24}
              color="lightgrey"
            />
          */}

            </View>
        );
      })}

      {/* <Button title='button' onPress={() => {
        const chatRef = doc(db, "Chats", "Companion");

        updateDoc(chatRef, {
          // arrayUnion appends the message to the existing array
          messages: arrayUnion(MESSAGE),
        });
      }
        }>Click Me</Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  }, 
  userContainer: {
    // marginTop: 10, 
    // marginBottom: 10, 
  },
  userButton: {
    padding: 25,
    display: "flex",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  userIcon: {
    position: "absolute",
    left: 20,
    top: 5,
    bottom: 5,
    width: 67.61,
    height: 67.61
  },
  userName: {
    position: "absolute",
    left: 70,
    top: 14,
    fontSize: 18,
  },
  userCamera: {
    position: "absolute",
    right: 15,
    top: 10,
  },
});