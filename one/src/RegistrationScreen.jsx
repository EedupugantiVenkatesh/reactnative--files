import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please provide all the details',
      });
      return;
    }

    try {
      const { user } = await auth().createUserWithEmailAndPassword(email, password);
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Registration successful!',
      });
      navigation.navigate('LoginScreen');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Email address already exists. Please log in instead.',
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Error registering user!',
        });
        console.error(error);
      }
    }
  };

  const handleLoginNavigation = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
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
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLoginNavigation}>
        <Text style={styles.login}>Already have an account? <Text style={styles.loginLink}>Login</Text></Text>
      </TouchableOpacity>
      <Toast ref={(ref) => Toast.setRef(ref)} />
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
    width: 350,
    borderRadius: 5,
    height: 50,
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
  login: {
    marginTop: 20,
  },
  loginLink: {
    marginTop: 20,
    fontSize:16,
    color: 'blue'
  }
});

export default RegistrationScreen;

