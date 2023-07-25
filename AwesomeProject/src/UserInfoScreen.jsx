import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import {addUserDetails, updateUserDetails} from './redux/Actions';
import styles from './styles/UserInfoScreenStyles';
import {maleAvatar, femaleAvatar, backArrow} from './assets/Images';
import * as Fields from './utils/Constants';
import {useRoute} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';

const validationSchema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
  phone: yup
    .string()
    .required('Please enter your phone')
    .min(10, 'Phone number must be at least 10 digits'),
  gender: yup.string().required('Please select your gender'),
});

const SecondScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const [focusedField, setFocusedField] = useState('');
  const [avatar, setAvatar] = useState('');
  const route = useRoute();
  const {initialValues} = route.params || {};

  const buttonText = route.params?.buttonText || Fields.FIELD_SUBMIT;

  const handleSubmit = values => {
    console.log('print update', values);
    if (initialValues) {
      dispatch(updateUserDetails(values, initialValues.id));
    } else {
      let id = Date.now();
      dispatch(addUserDetails({...values, id}));
    }

    navigation.navigate('FirstScreen');
  };

  const handleBack = () => {
    navigation.navigate('FirstScreen');
  };

  const handleAvatarSelection = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert(
          'Select Image Source',
          'Choose the source of the image',
          [
            {
              text: 'Camera',
              onPress: () => captureImage(),
            },
            {
              text: 'Gallery',
              onPress: () => selectFromLibrary(),
            },
            {
              text: 'Cancel',
              style: 'cancel',
            },
          ],
          {cancelable: true},
        );
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const captureImage = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
      mediaType: 'photo',
    })
      .then(image => {
        setAvatar(`data:${image.mime};base64,${image.data}`);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const selectFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
      mediaType: 'photo',
    })
      .then(image => {
        setAvatar(`data:${image.mime};base64,${image.data}`);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const avatarImage = gender => {
    if (gender === 'Male') {
      return maleAvatar;
    } else {
      return femaleAvatar;
    }
  };

  return (
    <KeyboardAwareScrollView>
      <Formik
        initialValues={
          initialValues || {name: '', email: '', phone: '', gender: ''}
        }
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <View style={styles.container}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <Image
                style={{tintColor: '#000', width: 30, height: 30}}
                source={{uri: backArrow}}
              />
            </TouchableOpacity>
            <Text style={styles.userInfoText}>{Fields.FIELD_USERINFO}</Text>
            </View>
            <View style={styles.avatarContainer}>
              <TouchableOpacity onPress={handleAvatarSelection}>
                <Image
                  style={styles.avatar}
                  source={
                    avatar ? {uri: avatar} : {uri: avatarImage(values.gender)}
                  }
                />
              </TouchableOpacity>
            </View>

            <View style={styles.fieldset}>
              <Text style={styles.label}>{Fields.FIELD_NAME}:</Text>
              {touched.name && errors.name && (
                <Text style={styles.error}>{errors.name}</Text>
              )}
              <TextInput
                style={[
                  styles.input,
                  focusedField === 'name' && styles.inputFocused,
                ]}
                value={values.name}
                onChangeText={handleChange('name')}
                returnKeyType="next"
                onSubmitEditing={() => emailInputRef.current.focus()}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField('')}
              />

              <Text style={styles.label}>{Fields.FIELD_EMAIL}:</Text>
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}
              <TextInput
                style={[
                  styles.input,
                  focusedField === 'email' && styles.inputFocused,
                ]}
                value={values.email}
                onChangeText={handleChange('email')}
                keyboardType="email-address"
                returnKeyType="next"
                ref={emailInputRef}
                onSubmitEditing={() => phoneInputRef.current.focus()}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField('')}
              />

              <Text style={styles.label}>{Fields.FIELD_PHONE}:</Text>
              {touched.phone && errors.phone && (
                <Text style={styles.error}>{errors.phone}</Text>
              )}
              <TextInput
                style={[
                  styles.input,
                  focusedField === 'phone' && styles.inputFocused,
                ]}
                value={values.phone}
                onChangeText={handleChange('phone')}
                keyboardType="phone-pad"
                maxLength={10}
                returnKeyType="done"
                ref={phoneInputRef}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField('')}
              />

              <Text style={styles.label}>{Fields.FIELD_GENDER}:</Text>
              {touched.gender && errors.gender && (
                <Text style={styles.error}>{errors.gender}</Text>
              )}
              <View style={styles.radioButtonContainer}>
                <TouchableOpacity
                  style={styles.radioButton}
                  onPress={() => handleChange('gender')('Male')}>
                  {values.gender === 'Male' && (
                    <View style={styles.radioButtonSelected} />
                  )}
                </TouchableOpacity>
                <Text style={styles.radioText}>{Fields.FIELD_MALE}</Text>
              </View>

              <View style={styles.radioButtonContainer}>
                <TouchableOpacity
                  style={styles.radioButton}
                  onPress={() => handleChange('gender')('Female')}>
                  {values.gender === 'Female' && (
                    <View style={styles.radioButtonSelected} />
                  )}
                </TouchableOpacity>
                <Text style={styles.radioText}>{Fields.FIELD_FEMALE}</Text>
              </View>
            </View>

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default SecondScreen;
