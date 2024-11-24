import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Header from './Header';
import CurvedBackground from './CurvedBackground';

// Get screen dimensions
const { width } = Dimensions.get('window');

// Utility function for scaling
const scale = (size) => (width / 375) * size;

const HeaderWithBackground = ({ title }) => {
  return (
    <CurvedBackground>
      <View style={styles.headerContainer}>
        <Header title={title} />
      </View>
    </CurvedBackground>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: scale(16),
    paddingTop: scale(10), // Ensure proper spacing between the header and the curved background
  },
});

export default HeaderWithBackground;
