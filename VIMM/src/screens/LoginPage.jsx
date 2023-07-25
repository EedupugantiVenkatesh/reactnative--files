import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  Alert,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// import {VIDCOM_LOGO, SHOW_ICON, HIDE_ICON} from '../constants/ImageConstants';
import styles from '../styles/LoginpageStyles';


// Define the validation schema using Yup
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(
      TextConstants.USERNAME_MIN_LENGTH,
      `Too Short! Minimum ${TextConstants.USERNAME_MIN_LENGTH} characters required.`,
    )
    .max(
      TextConstants.USERNAME_MAX_LENGTH,
      `Too Long! Maximum ${TextConstants.USERNAME_MAX_LENGTH} characters allowed.`,
    )
    .required(TextConstants.USERNAME_REQUIRED_ERROR),
  password: yup.string().required(TextConstants.PASSWORD_REQUIRED_ERROR),
});



// Define the Loginpage component
function Loginpage(){
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const passwordRef = useRef(null);


 

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <KeyboardAwareScrollView extraScrollHeight={50}>
      <View style={styles.container}>
        <View>
          
           

          {/* Use Formik for form handling */}
          <Formik
            initialValues={{
              name: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
              handleLogin(values);
              console.log('values', values.name, values.password);
            }}>
            {({
              values,
              handleChange,
              errors,
              setFieldTouched,
              handleSubmit,
              touched,
            }) => (
              <View style={styles.sectionContainer}>
                <View style={styles.section}>
                  <View style={styles.inputContainer}>
                    <TextInput
                      value={values.name}
                      onChangeText={handleChange('name')}
                      onBlur={() => setFieldTouched('name')}
                      autoCapitalize="none"
                      returnKeyType="next"
                      onSubmitEditing={() => passwordRef.current.focus()}
                      placeholder={'Enter Username'}
                      style={[styles.inputField, {flex: 1}]}
                    />
                  </View>
                  {touched.name && errors.name && (
                    <Text style={{fontSize: 12, color: ERROR_COLOR}}>
                      {errors.name}
                    </Text>
                  )}
                </View>
                <View>
                  <View style={styles.inputContainer}>
                    <TextInput
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={() => setFieldTouched('password')}
                      secureTextEntry={!isPasswordVisible}
                      placeholder={'Enter Password'}
                      ref={passwordRef}
                      style={[styles.inputField, {flex: 1}]}
                      onSubmitEditing={handleSubmit}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                      <Image
                        source={isPasswordVisible ? SHOW_ICON : HIDE_ICON}
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={{fontSize: 12, color: ERROR_COLOR}}>
                      {errors.password}
                    </Text>
                  )}
                </View>
               
                <View style={styles.version}>
                  <Text style={styles.versionText}>{VERSION_TEXT}</Text>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default Loginpage;