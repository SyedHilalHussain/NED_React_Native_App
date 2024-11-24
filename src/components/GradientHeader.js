import React from 'react';
import { Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientHeader = ({ date }) => {
  return (
    <LinearGradient
      colors={['#D9534F', '#D9534F']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Text style={styles.text}>{date}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    padding: 16,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
});

export default GradientHeader;