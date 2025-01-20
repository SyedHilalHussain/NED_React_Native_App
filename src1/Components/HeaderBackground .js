import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const HeaderBackground = ({ imageSource, overlayOpacity = 0.5 }) => {
  return (
    <>
      <Image
        source={imageSource || require('../Assets/bg.jpg')}
        style={styles.backgroundImage}
        blurRadius={2}
      />
      <View 
        style={[
          styles.overlay, 
          { backgroundColor: `rgba(0,0,0,${overlayOpacity})` }
        ]} 
      />
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: height * 0.4,
    top: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.4,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});

export default HeaderBackground;