
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleShee,Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toastRef = useRef();

  const handleLogin = async () => {
    if (email === '' || password === '') {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please provide all the details',
      });
      return;
    }
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'User logged in!',
      });
      navigation.navigate('ChatList'); // Navigate to the ChatList screen
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Error logging in!',
      });
      console.error(error);
    }
  };

  useEffect(() => {
    toastRef.current?.show({
      type: 'info',
      text1: 'Info',
      text2: 'Screen is focused',
    });
    // Clear email and password when the screen is focused
    setEmail('');
    setPassword('');
  }, []);

  const handleRegister = () => {
    navigation.navigate('RegistrationScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.register}>
        Are you a new user?{' '}
        <Text onPress={handleRegister} style={styles.registerLink}>
          Register
        </Text>
      </Text>
      <Toast ref={toastRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffa500',
    padding: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 5,
    width: '100%',
    borderRadius: 5
  },
  button: {
    backgroundColor: '#F08607',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    width: '100%'
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center'
  },
  register: {
    marginTop: 30
  },
  registerLink: {
    color: 'blue',
    fontWeight: 'bold'
  },
  Link: {
    fontSize: 16,
    color: 'blue',
    fontWeight:'bold'
  }
  });
  
  export default LoginScreen;
