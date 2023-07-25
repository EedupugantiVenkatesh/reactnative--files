import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  View,
  Dimensions,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import Video from 'react-native-video';

const {width, height} = Dimensions.get('window');

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const [isFullView, setIsFullView] = useState(false);
  const videoRef = useRef(null);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openCamera = () => {
    launchCamera({mediaType: 'photo'}, response => {
      console.log('Selected Image URI:', response);

      if (!response.didCancel) {
        setSelectedImage(response.assets[0].uri);
      }
      closeModal();
    });
  };
  const openVideo = () => {
    launchCamera({mediaType: 'video'}, response => {
      console.log('Selected Image URI:', response);

      if (!response.didCancel) {
        setSelectedVideo(response.assets[0].uri);
        setIsVideoPlaying(false);
      }
      closeModal();
    });
  };

  const handleFullView = () => {
    setIsFullView(!isFullView);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
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
        {selectedImage && (
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={handleFullView}>
              <Image
                source={{uri: selectedImage}}
                style={[
                  styles.selectedImage,
                  isFullView && styles.fullViewImage,
                ]}
              />
            </TouchableOpacity>
          </View>
        )}
        {selectedVideo && (
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={handleFullView}>
              <Video
                source={{uri: selectedVideo}}
                style={[
                  styles.selectedImage,
                  isFullView && styles.fullViewImage,
                ]}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.popup}>
            <TouchableOpacity style={styles.closeButton} onPress={openCamera}>
              <Text style={styles.closeButtonText}>Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={openVideo}>
              <Text style={styles.closeButtonText}>Video</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {isFullView && selectedImage && (
        <View style={styles.fullViewContainer}>
          <TouchableOpacity
            style={styles.closeButton1}
            onPress={handleFullView}>
            <Text style={styles.closeButtonText1}>&#8592;</Text>
          </TouchableOpacity>
          <View style={styles.fullViewContent}>
            <Text style={styles.fullViewText}>Image View </Text>
            <Image source={{uri: selectedImage}} style={styles.fullViewImage} />
          </View>
        </View>
      )}

      {isFullView && selectedVideo && (
        <View style={styles.fullViewContainer}>
          <TouchableOpacity
            style={styles.closeButton1}
            onPress={handleFullView}>
            <Text style={styles.closeButtonText1}>&#8592;</Text>
          </TouchableOpacity>
          <View style={styles.fullViewContent}>
            <Text style={styles.fullViewText}>Video View</Text>
            <Video
              ref={videoRef}
              source={{uri: selectedVideo}}
              style={styles.fullViewVideo}
              resizeMode="contain"
              controls={true}
              autoplay={false}
              onLoad={() => {
                if (isVideoPlaying && videoRef.current) {
                  videoRef.current.play(); // Start playing the video
                }
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
  },
  picker: {
    backgroundColor: '#0f86a3',
    borderColor: 'grey',
    width: '50%',
    marginTop: 40,
    borderRadius: 10,
    textAlign: 'center',
  },
  pickertext: {
    color: 'white',
    fontSize: 50,
    marginLeft: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
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
    width: 400,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  fullViewContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton1: {
    position: 'absolute',
    top: 30,
    left: 30,
    backgroundColor: '#0f86a3',
    borderRadius: 5,
    padding: 10,
    zIndex: 1,
  },
  closeButtonText1: {
    color: 'white',
    fontSize: 18,
  },
  fullViewContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullViewText: {
    position: 'absolute',
    top: 20,
    fontSize: 40,
    color: 'white',
    zIndex: 1,
  },
  fullViewImage: {
    width: width - 40,
    height: height - 40,
    borderRadius: 10,
  },
  fullViewVideo: {
    width: width - 40,
    height: height - 40,
  },
});

export default App;
