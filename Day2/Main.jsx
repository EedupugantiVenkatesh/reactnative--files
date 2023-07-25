import React, { useState ,useEffect} from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, Modal, View,} from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';
import { launchImageLibrary } from 'react-native-image-picker';



const Main = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  

  useEffect(() => {
    checkCameraPermission();
  }, []);
  const checkCameraPermission = async () => {
    const permissionStatus = await request(PERMISSIONS.IOS.CAMERA);
    setCameraPermission(permissionStatus === 'granted');
  };


  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openGallery = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel) {
        setSelectedImage(response.uri);
      }
      closeModal();
    });
  };
  
 
      return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openModal}>
        <View style={styles.picker}>
          <Text style={styles.pickertext}>Picker &nbsp;</Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/1261/1261482.png',
            }}
            style={{
              width: 40,
              height: 30,
              resizeMode: 'contain',
              marginLeft: 140,
              marginBottom: 20,
              tintColor: 'white',
            }}
          />
        </View>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
  <View style={styles.modalContainer}>
    <View style={styles.popup}>
      <TouchableOpacity style={styles.closeButton} onPress={openGallery}>
        <Text style={styles.closeButtonText}>Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton} onPress={openGallery}>
        <Text style={styles.closeButtonText}>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
        <Text style={styles.closeButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>


      {selectedImage && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
  },
  picker: {
    backgroundColor: '#0f86a3',
    borderColor: 'grey',
    width: '90%',
    marginTop: 30,
    borderRadius: 10,
    textAlign: 'center',
  },
  pickertext: {
    color: 'white',
    fontSize: 50,
    marginLeft: 30,
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 5,
    backgroundColor: '#0f86a3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  selectedImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  
});

export default Main;