// import React, { useState } from 'react';
// import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// const CreditCardForm = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [cardHolder, setCardHolder] = useState('');
//   const [expirationMonth, setExpirationMonth] = useState('month');
//   const [expirationYear, setExpirationYear] = useState('year');
//   const [cvv, setCVV] = useState('');

//   return (
//     <View style={styles.container}>
//       <View style={styles.cardContainer}>
//         <View style={styles.front}>
//           <View style={styles.image}>
//             <Image source={require('./images/chip.png')} />
//             <Image source={require('./images/visa.png')} />
//           </View>
//           <Text style={styles.cardNumberBox}>{cardNumber || '####  ####  ####  ####'}</Text>
//           <View style={styles.flexbox}>
//             <View style={styles.box}>
//               <Text style={styles.label}>card holder</Text>
//               <Text style={styles.cardHolderName}>{cardHolder || 'full name'}</Text>
//             </View>
//             <View style={styles.box}>
//               <Text style={styles.label}>expires</Text>
//               <View style={styles.expiration}>
//                 <Text style={styles.expMonth}>{expirationMonth}</Text>
//                 <Text style={styles.expYear}>{expirationYear}</Text>
//               </View>
//             </View>
//           </View>
//         </View>
//         <View style={styles.back}>
//           <View style={styles.stripe} />
//           <View style={styles.box}>
//             <Text style={styles.label}>cvv</Text>
//             <View style={styles.cvvBox} />
//             <Image source={require('./images/visa.png')} />
//           </View>
//         </View>
//       </View>
//       <View style={styles.form}>
//         <View style={styles.inputBox}>
//           <Text style={styles.label}>card number</Text>
//           <TextInput
//             style={styles.input}
//             maxLength={16}
//             value={cardNumber}
//             onChangeText={setCardNumber}
//           />
//         </View>
//         <View style={styles.inputBox}>
//           <Text style={styles.label}>card holder</Text>
//           <TextInput
//             style={styles.input}
//             value={cardHolder}
//             onChangeText={setCardHolder}
//           />
//         </View>
//         <View style={styles.flexbox}>
//           <View style={styles.inputBox}>
//             <Text style={styles.label}>expiration mm</Text>
//             <TextInput
//               style={styles.input}
//               value={expirationMonth}
//               onChangeText={setExpirationMonth}
//             />
//           </View>
//           <View style={styles.inputBox}>
//             <Text style={styles.label}>expiration yy</Text>
//             <TextInput
//               style={styles.input}
//               value={expirationYear}
//               onChangeText={setExpirationYear}
//             />
//           </View>
//           <View style={styles.inputBox}>
//             <Text style={styles.label}>cvv</Text>
//             <TextInput
//               style={styles.input}
//               maxLength={4}
//               value={cvv}
//               onChangeText={setCVV}
//             />
//           </View>
//         </View>
//         <TouchableOpacity style={styles.submitButton}>
//           <Text style={styles.submitButtonText}>Submit</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   cardContainer: {
//     height: 200,
//     marginBottom: 20,
//   },
//   front: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     padding: 20,
//     borderRadius: 10,
//     backfaceVisibility: 'hidden',
//   },
//   image: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   cardNumberBox: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   flexbox: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   box: {
//     flex: 1,
//     marginBottom: 10,
//   },
//   label: {
//     fontSize: 12,
//     color: '#888',
//     marginBottom: 5,
//   },
//   cardHolderName: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   expiration: {
//     flexDirection: 'row',
//   },
//   expMonth: {
//     marginRight: 5,
//   },
//   expYear: {
//     marginLeft: 5,
//   },
//   back: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     padding: 20,
//     borderRadius: 10,
//     backfaceVisibility: 'hidden',
//     transform: [{ rotateY: '180deg' }],
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
//   stripe: {
//     height: 40,
//     backgroundColor: '#888',
//     marginBottom: 10,
//   },
//   cvvBox: {
//     height: 40,
//     backgroundColor: '#fff',
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#888',
//   },
//   form: {
//     flex: 1,
//   },
//   inputBox: {
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#888',
//     padding: 10,
//   },
//   submitButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default CreditCardForm;






// import React, { useState } from 'react';
// import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { CreditCardInput } from 'react-native-credit-card-input';

// const CreditCardForm = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [cardHolder, setCardHolder] = useState('');
//   const [expirationMonth, setExpirationMonth] = useState('');
//   const [expirationYear, setExpirationYear] = useState('');
//   const [cvv, setCVV] = useState('');

//   const handleCardChange = (cardData) => {
//     setCardNumber(cardData.number);
//     setCardHolder(cardData.name);
//     setExpirationMonth(cardData.expiry.split('/')[0]);
//     setExpirationYear(cardData.expiry.split('/')[1]);
//     setCVV(cardData.cvc);
//   };

//   const formatCardNumber = (input) => {
//     // Remove all non-digit characters from the input
//     const digitsOnly = input.replace(/\D/g, '');

//     // Insert a space after every 4 digits
//     const formatted = digitsOnly.replace(/(\d{4})(?=\d)/g, '$1 ');

//     return formatted;
//   };

//   const handleCardNumberChange = (input) => {
//     const formatted = formatCardNumber(input);
//     setCardNumber(formatted);
//   };

//   return (
//     <View style={styles.container}>
//       <ImageBackground source={require('./images/6.jpeg')} style={styles.backgroundImage}>
//         <View style={styles.cardContainer}>
//           <View style={styles.front}>
//             <View style={styles.image}>
//               <Image source={require('./images/chip.png')} style={styles.chipImage} />
//               <Image source={require('./images/visa.png')} style={styles.visaImage} />
//             </View>
//             <Text style={styles.cardNumberBox}>{cardNumber || '################'}</Text>
//             <View style={styles.flexbox}>
//               <View style={styles.box}>
//                 <Text style={styles.label}>Card Holder</Text>
//                 <Text style={styles.cardHolderName}>{cardHolder || 'Full Name'}</Text>
//               </View>
//               <View style={styles.box}>
//                 <Text style={styles.label1}>Expires</Text>
//                 <View style={styles.expiration}>
//                   <Text style={styles.expMonth}>{expirationMonth}</Text>
//                   <Text style={styles.expYear}>{expirationYear}</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//           <View style={styles.back}>
//             <View style={styles.stripe} />
//             <View style={styles.box}>
//               <Text style={styles.label}>CVV</Text>
//               <View style={styles.cvvBox} />
//               <Image source={require('./images/visa.png')} style={styles.visaImage} />
//             </View>
//           </View>
//         </View>
//       </ImageBackground>
//       <View style={styles.form}>
//         <View style={styles.inputBox}>
//           <Text style={styles.label}>Card Number</Text>
//           <TextInput
//             style={styles.input}
//             maxLength={19} // Increased maxLength to account for spaces
//             value={cardNumber}
//             onChangeText={handleCardNumberChange} // Updated the onChangeText handler
//             keyboardType="numeric" // Set the keyboardType to numeric for better input experience
//           />
//         </View>
//         <View style={styles.inputBox}>
//           <Text style={styles.label}>Card Holder</Text>
//           <TextInput
//             style={styles.input}
//             value={cardHolder}
//             onChangeText={setCardHolder}
//           />
//         </View>
//         <View style={styles.flexbox}>
//           <View style={styles.inputBox}>
//             <Text style={styles.label}>Expiration Month</Text>
//             <TextInput
//               style={styles.input}
//               value={expirationMonth}
//               onChangeText={setExpirationMonth}
//             />
//           </View>
//           <View style={styles.inputBox}>
//             <Text style={styles.label}>Expiration Year</Text>
//             <TextInput
//               style={styles.input}
//               value={expirationYear}
//               onChangeText={setExpirationYear}
//             />
//           </View>
//           <View style={styles.inputBox}>
//             <Text style={styles.label}>CVV</Text>
//             <TextInput
//               style={styles.input}
//               maxLength={4}
//               value={cvv}
//               onChangeText={setCVV}
//             />
//           </View>
//         </View>
//         <TouchableOpacity style={styles.submitButton}>
//           <Text style={styles.submitButtonText}>Submit</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   cardContainer: {
//     height: 170,
//     marginBottom: 20,
//   },
//   front: {
//     flex: 1,
//     padding: 20,
//     borderRadius: 20,
//     backfaceVisibility: 'hidden',
//   },
//   image: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   chipImage: {
//     width: 50,
//     height: 30,
//     borderRadius: 5,
//   },
//   visaImage: {
//     width: 50,
//     height: 30,
//   },
//   cardNumberBox: {
//     fontSize: 18,
//     marginTop: 20,
//     marginLeft: 60,
//   },
//   flexbox: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   box: {
//     flex: 1,
//     marginBottom: 10,
//   },
//   label: {
//     fontSize: 12,
//     color: '#888',
//     marginTop: 10,
//   },
//   label1: {
//     fontSize: 12,
//     color: '#888',
//     marginTop: 10,
//     marginLeft: 80,
//   },
//   cardHolderName: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   expiration: {
//     flexDirection: 'row',
//   },
//   expMonth: {
//     marginRight: 5,
//     marginLeft: 80,
//   },
//   expYear: {
//     marginLeft: 5,
//   },
//   back: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     padding: 20,
//     borderRadius: 10,
//     backfaceVisibility: 'hidden',
//     transform: [{ rotateY: '180deg' }],
//   },
//   stripe: {
//     height: 40,
//     backgroundColor: '#888',
//     marginBottom: 10,
//   },
//   cvvBox: {
//     height: 40,
//     backgroundColor: '#fff',
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#888',
//   },
//   form: {
//     marginTop: 20,
//   },
//   inputBox: {
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#888',
//     padding: 5,
//   },
//   submitButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default CreditCardForm;











import React, { useState, useRef } from 'react';
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [cvv, setCVV] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;
  const 

  const handleCardChange = (cardData) => {
    setCardNumber(cardData.number);
    setCardHolder(cardData.name);
    setExpirationMonth(cardData.expiry.split('/')[0]);
    setExpirationYear(cardData.expiry.split('/')[1]);
    setCVV(cardData.cvc);
  };

  const formatCardNumber = (input) => {
    // Remove all non-digit characters from the input
    const digitsOnly = input.replace(/\D/g, '');

    // Insert a space after every 4 digits
    const formatted = digitsOnly.replace(/(\d{4})(?=\d)/g, '$1 ');

    return formatted;
  };

  const handleCardNumberChange = (input) => {
    const formatted = formatCardNumber(input);
    setCardNumber(formatted);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    Animated.timing(flipAnimation, {
      toValue: isFlipped ? 0 : 180,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
    backgroundColor: 'blue',
  };
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
    backgroundColor: 'blue',

  };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={flipCard}>
          <Animated.View style={[styles.cardContainer, frontAnimatedStyle]}>
            <View style={styles.front}>
              <View style={styles.image}>
                <Image source={require('./images/chip.png')} style={styles.chipImage} />
                <Image source={require('./images/visa.png')} style={styles.visaImage} />
              </View>
              <Text style={styles.cardNumberBox}>{cardNumber || '################'}</Text>
              <View style={styles.flexbox}>
                <View style={styles.box}>
                  <Text style={styles.label}>Card Holder</Text>
                  <Text style={styles.cardHolderName}>{cardHolder || 'Full Name'}</Text>
                </View>
                <View style={styles.box}>
                  <Text style={styles.label}>Expires</Text>
                  <View style={styles.expiration}>
                    <Text style={styles.expMonth}>{expirationMonth}</Text>
                    <Text style={styles.expYear}>{expirationYear}</Text>
                  </View>
                </View>
              </View>
            </View>
            <Animated.View style={[styles.back, backAnimatedStyle]}>
              <View style={styles.stripe} />
              <View style={styles.box}>
                <Text style={styles.label}>CVV</Text>
                <View style={styles.cvvBox} />
                <Image source={require('./images/visa.png')} style={styles.visaImage} />
              </View>
            </Animated.View>
          </Animated.View>
        </TouchableOpacity>
      <View style={styles.form}>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Card Number</Text>
          <TextInput
            style={styles.input}
            maxLength={19} // Increased maxLength to account for spaces
            value={cardNumber}
            onChangeText={handleCardNumberChange} // Updated the onChangeText handler
            keyboardType="numeric" // Set the keyboardType to numeric for better input experience
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Card Holder</Text>
          <TextInput
            style={styles.input}
            value={cardHolder}
            onChangeText={setCardHolder}
          />
        </View>
        <View style={styles.flexbox}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Expiration Month</Text>
            <TextInput
              style={styles.input}
              value={expirationMonth}
              onChangeText={setExpirationMonth}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Expiration Year</Text>
            <TextInput
              style={styles.input}
              value={expirationYear}
              onChangeText={setExpirationYear}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={styles.input}
              maxLength={4}
              value={cvv}
              onChangeText={setCVV}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    cardContainer: {
      height: 200,
      marginBottom: 20,
    },
    front: {
      flex: 1,
      padding: 20,
      borderRadius: 20,
      backfaceVisibility: 'hidden',
    },
    image: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    chipImage: {
      width: 50,
      height: 30,
      borderRadius: 5,
    },
    visaImage: {
      width: 50,
      height: 30,
    },
    cardNumberBox: {
      fontSize: 18,
      marginTop: 20,
      marginLeft: 60,
    },
    flexbox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    box: {
      flex: 1,
      marginBottom: 10,
    },
    label: {
      fontSize: 12,
      color: '#888',
      marginTop: 10,
    },
   
    cardHolderName: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    expiration: {
      flexDirection: 'row',
    },
    expMonth: {
      marginRight: 5,
      marginLeft: 80,
    },
    expYear: {
      marginLeft: 5,
    },
    back: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      padding: 20,
      borderRadius: 10,
      backfaceVisibility: 'hidden',
      transform: [{ rotateY: '180deg' }],
      marginBottom:0,
    },
    stripe: {
        height: 40,
        backgroundColor: '#888',
        marginBottom: 10,
        position: 'absolute',
       bottom:90,
        left: 20, 
        right: 20, 
      },
    cvvBox: {
      height: 40,
      backgroundColor: '#fff',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#888',
    },
    form: {
      marginTop: 20,
    },
    inputBox: {
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#888',
      padding: 5,
    },
    submitButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    submitButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  

export default CreditCardForm;


const [cardLogo, setCardLogo] = useState('');

const handleCardNLogo= () => {
    
 
};