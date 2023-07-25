import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3d83a6',
      },
      brand: {
      
        paddingTop: 20,
        
      },
      brandtext: {
        fontSize: 30,
        color: 'white',
        marginHorizontal: 20,
       
      },
      brandtexttop:{
          marginTop:50
      },
      sectionContainer: {
        backgroundColor: 'white',
        marginTop: 100,
        paddingHorizontal: 20,
        borderTopRightRadius: 100,
        
      },
      section: {
        paddingTop: 38,
      },
      text: {
        fontSize: 18,
        marginVertical: 10,
        color:'#000',
        fontWeight:'bold'
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginBottom: 10,
        paddingVertical: 5,
        paddingHorizontal: 12,
      },
      button: {
        backgroundColor: '#3d83a6',
        height: 50,
        alignItems: 'center',
        marginVertical: 20,
        borderRadius: 10,
        paddingTop: 10,
      },
      inputField: {
        flex: 1,
      },
      icon: {
        height: 25,
        width: 25,
        tintColor: '#3d83a6',
      },
      version: {
        alignItems: 'center',
        marginTop:40
      
      },
      versionText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      
});

export default styles;