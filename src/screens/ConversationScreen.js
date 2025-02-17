import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import db from "../../firebase";
import { doc, onSnapshot, updateDoc, arrayUnion } from "firebase/firestore";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { View } from "react-native";

export default function ConversationScreen({ navigation, route }) {
  const [messages, setMessages] = useState([]);
  const { userId } = route.params;
  const chatRef = doc(db, 'Chats', userId);
  console.log('userID in ConversationScreen.js', userId);

  const { user, userData } = useAuthentication();

  useEffect(() => {
    let unsubscribeFromNewSnapshots = onSnapshot(chatRef, (doc) => {
      console.log('New Snapshot!');
      console.log('ConversationScreen.js - doc.data().messages', doc.data().messages, '--->')
      setMessages(doc.data().messages);
    });

    return function cleanupBeforeUnmounting() {
      unsubscribeFromNewSnapshots();
    };
  }, []);

  const onSend = useCallback((messages = []) => {
    console.log('trying to send a message', messages[0], '--->')

    updateDoc(chatRef, {
      // arrayUnion appends the message to the existing array
      messages: arrayUnion(messages[0]),
    });
  }, []);

  const onQuickReplySend = (quickReply) => {
    console.log('quick reply in ConversationScreen.js', quickReply, '--->')
    
    updateDoc(chatRef, {
      // arrayUnion appends the message to the existing array
      messages: arrayUnion(quickReply[0]),
    });
  }
  

  if (!user || !userData) {
    return <View></View>;
  }
  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: user.uid,
        name: userData.name,
      }}
      inverted={false}
      showUserAvatar={true}
      renderUsernameOnMessage={true}
      onQuickReply={quickReply => onQuickReplySend(quickReply)}
      alwaysShowSend={true}
    />
  );
}
