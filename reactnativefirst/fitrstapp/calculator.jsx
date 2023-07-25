import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      const regex = /^(\d+(\.\d*)?|\.\d+)([+\-*\/]{1}\d+(\.\d+)?)*([+\-*\/]{1}\d+(\.\d+)?){0,1}[+\-*\/]{0,1}$/;

      if (!regex.test(displayValue)) {
        setDisplayValue('GIVE A VALID INPUT');
        return;
      }

      const lastCharIsOperator = /[+\-*\/]$/.test(displayValue);
      const inputToEvaluate = lastCharIsOperator ? displayValue.slice(0, -1) : displayValue;

      try {
        const result = eval(inputToEvaluate);
        setDisplayValue(result.toString());
      } catch (error) {
        setDisplayValue('GIVE A VALID INPUT');
      }
    } else if (value === 'C') {
      setDisplayValue('');
    } else if (value === 'X') {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      if (/[\+\-\*\.\/]{2,}/.test(value + displayValue)) {
        return;
      }

      if (/[\+\-\*\/]$/.test(value) && /[\+\-\*\/]/.test(displayValue.slice(-1))) {
        return;
      }

      setDisplayValue(displayValue + value);
    }
  };

  const renderButton = (value) => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress(value)}
      >
        <Text style={styles.buttonText}>{value}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <TextInput
          style={styles.displayValue}
          value={displayValue}
          editable={true}
          placeholder="0"
        />
      </View>

      <View style={styles.buttonContainer}>
        {renderButton('C')}
        {renderButton('X')}
        {renderButton('(')}
        {renderButton(')')}
      </View>

      <View style={styles.buttonContainer}>
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton('*')}
      </View>

      <View style={styles.buttonContainer}>
        {renderButton('4')}
        {renderButton('5')}
        {renderButton('6')}
        {renderButton('/')}
      </View>

      <View style={styles.buttonContainer}>
        {renderButton('1')}
        {renderButton('2')}
        {renderButton('3')}
        {renderButton('+')}
      </View>

      <View style={styles.buttonContainer}>
        {renderButton('0')}
        {renderButton('.')}
        {renderButton('=')}
        {renderButton('-')}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
    display:'flex',
      flex: 1,
      backgroundColor: 'skyblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    displayContainer: {
      backgroundColor:'violet',
      borderRadius: 10,
      margin: 5,
      width: '90%',
      height: '15%',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingRight: 10,
    },
    displayForm: {
    
      fontSize: 40,
      color: '#000',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    button: {
      width: 75,
      height: 75,
      backgroundColor: '#D55E00',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
      marginBottom: 10,
    },
     buttonText: {
      color: '#000',
      fontSize: 25,
    },
    
  });
  
    export default Calculator;





