import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

const ChatList = ({ navigation }) => {
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('chats')
      .onSnapshot((snapshot) => {
        const chats = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setChatData(chats);
      });

    return () => unsubscribe();
  }, []);

  const navigateToChat = (chatId) => {
    navigation.navigate('ChatScreen', { chatId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => navigateToChat(item.id)}
          >
            <Avatar
              rounded
              source={{
                uri: 'https://lh3.googleusercontent.com/ogw/AOLn63HtnJK-mW_-dFqxeShtHG6byaWE-Vvs3PMKJFUYdw=s64-c-mo'
              }}
            />
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.chatMessage}>{item.lastMessage}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  chatInfo: {
    marginLeft: 16
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  chatMessage: {
    fontSize: 14,
    color: '#888'
  }
});

export default ChatList;
