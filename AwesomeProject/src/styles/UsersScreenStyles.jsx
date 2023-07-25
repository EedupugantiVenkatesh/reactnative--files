import { StyleSheet } from 'react-native';



const styles= StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#e8eeef',
  
     
    },
    title: {
      fontSize: 38,
      fontWeight: 'bold',
      color:'#000',
      fontStyle:'italic'
    },
    addButton: {
      marginLeft: 10,
      backgroundColor: '#4bc970',
      padding: 20,
      borderRadius: 8,
    },
    userDetailsContainer: {
     
      paddingHorizontal: 10,
      backgroundColor: '#f5f5f5',
      borderRadius: 8,
    },
    userContainer: {
      marginBottom: 10,
      padding: 10,
      backgroundColor: '#ffffff',
      borderRadius: 8,
    },
    userLabel: {
      fontWeight: 'bold',
      marginBottom: 5,
      backgroundColor: '#4bc970',
      width:30,
      height:30,
      borderRadius:50,
      color:'#fff',
      fontSize:30,
      textAlign:'center'

    },
    fieldContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    fieldLabel: {
      fontWeight: 'bold',
      marginRight: 5,
      color:'#000'
    },
    fieldValue: {
      flex: 1,
      color:'#000'
    },
    
    userDetails: {
      flex: 1,
    },
  
    deleteButton: {
      position: 'absolute',
      top: 80,
      right: 10,
      padding: 8,
      borderRadius: 4,
    },
    editButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      padding: 8,
      borderRadius: 4,
    },
    searchInput: {
      /* styles for the search input */
      margin: 10,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
      textShadowColor: 'red',
      color:'black',
    }
  });
  
  
  export default styles;
