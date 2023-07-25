import React, { useEffect ,useState} from 'react';
import { ImageBackground, } from 'react-native';

function SplashScreen(navigation) {

  const [timePassed, setTimePassed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimePassed(true);
    }, 5000);
    navigation.navigate('Loginpage')
  }, []);

  if (!timePassed) {
    return (
      <ImageBackground
        source={require('../assets/images/Splashscreen.png')}
        style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
      />
    );
  }

  return null;
}

export default SplashScreen;
