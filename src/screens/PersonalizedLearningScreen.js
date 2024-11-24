import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const isSmallDevice = width < 360; // Adjust for smaller screens

const PersonalizedLearningScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Image */}
      <Image
        source={require('../assets/images/images.jpeg')} // Replace with your image
        style={styles.image}
      />

      {/* Title */}
      <Text style={styles.title}>Personalized learning</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Combining the best of AI and language science, lessons are tailored to help you learn at just the right level and pace.
      </Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {/* Get Started Button */}
        <Pressable
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && { transform: [{ scale: 0.98 }], opacity: 0.9 },
          ]}
          onPress={() => navigation?.navigate('StudentPortal')}
        >
          <Text style={styles.primaryButtonText}>GET STARTED</Text>
        </Pressable>

        {/* I Already Have an Account Button */}
        <Pressable
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && { transform: [{ scale: 0.98 }], opacity: 0.9 },
          ]}
          onPress={() => navigation?.navigate('Login')}
        >
          <Text style={styles.secondaryButtonText}>I ALREADY HAVE AN ACCOUNT</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: width * 0.05, // Dynamic padding
    paddingVertical: height * 0.05, // Dynamic vertical padding
  },
  image: {
    width: width * 0.65, // Scale image width relative to the screen
    height: height * 0.25, // Scale image height
    resizeMode: 'contain',
    marginTop: height * 0.05,
  },
  title: {
    fontSize: isSmallDevice ? 18 : 22, // Adjust title size for smaller devices
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: height * 0.01,
  },
  subtitle: {
    fontSize: isSmallDevice ? 14 : 16, // Adjust subtitle size
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: '#666',
    textAlign: 'center',
    marginHorizontal: width * 0.05,
    lineHeight: isSmallDevice ? 20 : 22,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: width * 0.05,
    marginBottom: height * 0.05,
  },
  primaryButton: {
    backgroundColor: '#D9534F',
    paddingVertical: height * 0.02, // Scale button padding
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * 0.02,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  primaryButtonText: {
    fontSize: isSmallDevice ? 14 : 16,
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
  },
  secondaryButton: {
    borderColor: '#D9534F',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: height * 0.02,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  secondaryButtonText: {
    fontSize: isSmallDevice ? 14 : 16,
    fontFamily: 'Poppins-Medium',
    color: '#D9534F',
  },
});

export default PersonalizedLearningScreen;
