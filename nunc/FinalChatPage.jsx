import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FinalChatPage = ({ route }) => {
  const { user } = route.params;
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    fetchChatData();
  }, []);

  const fetchChatData = async () => {
    try {
      const response = await fetch(`http://nfmedia.flickfusion.net/videocall/videocallApiV3_test.php?&action=ListAvailableUsers&APP_VERSION=5.0.0&rooftop_key=0CDDE61B-E251-EB1E-137D-426388FB1D03&current_user_name=${user.user_name}&TYPE=Android`);
      const data = await response.json();
      setChatData(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.sender}>{user.sender}</Text>
      {chatData.map((chatItem) => (
        <View style={styles.chatItem} key={chatItem.id}>
          <Text style={styles.message}>{chatItem.message}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  chatItem: {
    marginBottom: 16,
  },
  sender: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
  },
});

export default FinalChatPage;



