import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const StartPage = () => {
    const navigation = useNavigation();
  
    useEffect(() => {
      // Navigate to the next page after 5 seconds
      const timer = setTimeout(() => {
        navigation.navigate('NextPage');
      }, 5000);
  
      // Clean up the timer when the component unmounts
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <View style={styles.container}>
        <Image
          source={require('./download.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'black',
    },
    logo: {
      width: 200,
      height: 200,
      
    },
  });
  
  export default StartPage;
  