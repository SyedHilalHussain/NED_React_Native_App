import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { styles } from '../Screens/styles';


const HeaderBackground = ({ imageSource, overlayOpacity = 0.5 }) => {
  return (
    <>
      <Image
        source={require('../Assets/bg.jpg')}
        style={styles.HeaderBackgroundbackgroundImage}
        blurRadius={2}
      />
      <View 
        style={[
          styles.HeaderBackgroundoverlay, 
          { backgroundColor: `rgba(0,0,0,${overlayOpacity})` }
        ]} 
      />
    </>
  );
};



export default HeaderBackground;