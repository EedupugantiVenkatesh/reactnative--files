import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Calculator from './calculator';
function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Calculator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
