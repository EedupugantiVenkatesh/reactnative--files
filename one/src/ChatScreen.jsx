import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { View, TouchableOpacity, Image, TextInput, FlatList, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import ImageView from 'react-native-image-viewing';

const ChatScreen = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [textMessage, setTextMessage] = useState('');
  const route = useRoute();
  const { chatId } = route.params;

  useEffect(() => {
    const unsubscribeListener = firestore()
      .collection('chats')
      .doc(chatId)
      .collection('messages')
      .orderBy('createdAt', 'asc')
      .onSnapshot((querySnapshot) => {
        const messages = querySnapshot.docs.map((doc) => {
          const firebaseData = doc.data();

          const data = {
            _id: doc.id,
            createdAt: firebaseData.createdAt,
            ...firebaseData,
            user: {
              _id: firebaseData.user._id,
              name: firebaseData.user.displayName,
            },
          };

          return data;
        });

        setMessages(messages);
      });

    return () => unsubscribeListener();
  }, [chatId],);

  const handleSend = async () => {
    if (textMessage.trim() === '') return;

    firestore()
      .collection('chats')
      .doc(chatId)
      .collection('messages')
      .add({
        text: textMessage.trim(),
        createdAt: new Date().getTime(),
        chatId: chatId,
      
        user: {
          _id: auth().currentUser.uid,
          displayName: auth().currentUser.displayName,
          photoURL: auth().currentUser.photoURL,
        },
      })
      .then(() => {
        setTextMessage('');
      })
      .catch((error) => {
        console.log('Error sending message: ', error);
      });
  };

  const handleImageSend = () => {
    ImagePicker.openCamera({
      mediaType: 'photo',
      includeBase64: true,
    })
      .then((response) => {
        if (!response.didCancel) {
          const source = { uri: response.path };

          firestore()
            .collection('chats')
            .doc(chatId)
            .collection('messages')
            .add({
              image: { uri: response.path, base64: response.data },
              createdAt: new Date().getTime(),
              user: {
                _id: auth().currentUser.uid,
                displayName: auth().currentUser.displayName,
                photoURL: auth().currentUser.photoURL,
              },
            });
        }
      })
      .catch((error) => {
        console.log('ImagePicker Error: ', error);
      });
  };

  const renderMessage = ({ item }) => {
    const isCurrentUser = item.user._id === auth().currentUser.uid;

    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
        {isCurrentUser ? (
          <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-end' }}>
          <View style={{ marginRight: 8 }}>
            {item.image ? (
              <TouchableWithoutFeedback onPress={() => setSelectedImage(item.image)}>
                <Image source={{ uri: item.image.uri }} style={{ width: 120, height: 120, borderRadius: 8 }} />
              </TouchableWithoutFeedback>
            ) : (
              <Text style={{ backgroundColor: '#ebebeb', padding: 8, borderRadius: 8 }}>{item.text}</Text>
            )}
          </View>
          {item.image && (
            <ImageView
              images={[{ uri: item.image.uri }]}
              imageIndex={0}
              visible={selectedImage === item.image}
              onRequestClose={() => setSelectedImage(null)}
            />
          )}
        </View>
      ) : (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
          <View style={{ marginLeft: 8 }}>
            {item.image ? (
              <TouchableWithoutFeedback onPress={() => setSelectedImage(item.image)}>
                <Image source={{ uri: item.image.uri }} style={{ width: 120, height: 120, borderRadius: 8 }} />
              </TouchableWithoutFeedback>
            ) : (
              <Text style={{ backgroundColor: '#ffffff', padding: 8, borderRadius: 8 }}>{item.text}</Text>
            )}
          </View>
          {item.image && (
            <ImageView
              images={[{ uri: item.image.uri }]}
              imageIndex={0}
              visible={selectedImage === item.image}
              onRequestClose={() => setSelectedImage(null)}
            />
          )}
        </View>
      )}
    </View>
  );
};

return (
  <View style={{ flex: 1 }}>
    <FlatList
      data={messages.slice().reverse()}
      renderItem={renderMessage}
      keyExtractor={(item) => item._id}
      contentContainerStyle={{ padding: 8 }}
      inverted
    />
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
      <TextInput
        style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 20, padding: 8, marginRight: 8 }}
        placeholder="Type a message..."
        value={textMessage}
        onChangeText={setTextMessage}
      />
      <TouchableOpacity onPress={handleImageSend}>
        <Icon name="camerao" type="antdesign" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSend} style={{ marginLeft: 8 }}>
        <Icon name="send" type="material" size={24} color="black" />
      </TouchableOpacity>
    </View>
  </View>
);
};

export default ChatScreen;
