import React, { useEffect } from 'react';
import { View,  Image, StatusBar, Text  } from 'react-native';
import { SPLASH_IMAGE, SPLASH_IMAGE2 } from '../../utils/ImageConstants';
import styles from './styles';



const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate some loading time (you can replace this with actual loading logic)
    const splashTimeout = setTimeout(() => { 
      navigation.replace('LoginScreen'); // Navigate to the Login screen after the splash screen 
    }, 2000); // 2000 milliseconds (2 seconds)

    return () => clearTimeout(splashTimeout); // Clear the timeout to avoid memory leaks
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="light-content"/> 
      {/* <Text style={styles.textStyle}>React Native</Text> */}
      <Image
        source={SPLASH_IMAGE} // Replace with the path to your logo image
        style={styles.logo}
      />
      
      <Image
        source={SPLASH_IMAGE2} // Replace with the path to your logo image
        style={styles.logo2}
      />
      
 
    </View>
  );
};



export default SplashScreen;