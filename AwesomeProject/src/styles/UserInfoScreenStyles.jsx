import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  
    fieldset: {
      marginBottom: 30,
    },
    label: {
      marginBottom: 8,
      fontSize: 20,
      fontWeight: 'bold',
    },
    input: {
      backgroundColor: '#e8eeef',
      color: '#000',
      padding: 15,
      marginBottom: 30,
      borderRadius: 4,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 2,
    },
    radioButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    radioButton: {
      width: 32,
      height: 32,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: '#8a97a0',
      marginRight: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioButtonSelected: {
      width: 22,
      height: 22,
      borderRadius: 12,
      backgroundColor: '#4bc970',
    },
    radioText: {
      marginLeft: 10,
      fontSize: 20,
    },
    button: {
      padding: 15,
      backgroundColor: '#4bc970',
      alignItems: 'center',
      borderRadius: 4,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    avatarContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      width: 180,
      height: 180,
      borderRadius: 100,
      backgroundColor: '#8a97a0',
    },
    error: {
      color: 'red',
      fontSize: 16,
      marginBottom: 10,
    },
  
    inputFocused: {
      borderColor: 'black',
      borderWidth: 2,
    },
    backButton: {
      
      width: 30,
      height: 30,
      borderRadius: 5,
    },
    userInfoText:{
   
      fontSize:50,
      alignSelf:'center',
      marginLeft:65,
      color:'#000'
    }
  });

export default styles;