import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const scale = (size) => (width / 375) * size; // Scaling utility for responsive design

const LoginScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Full-width Image */}
      <ImageBackground
        source={require('../assets/images/internet-security-system.jpg')} // Replace with the correct image
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      />

      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Let’s <Text style={styles.highlight}>Sign In</Text>
        </Text>
        <Text style={styles.subtitle}>
          quis nostrud exercitation ullamco laboris nisi ut
        </Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        {/* Email Input */}
        <View style={styles.inputField}>
          <Ionicons name="mail-outline" size={scale(24)} color="#A5A5A5" style={styles.icon} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#A5A5A5"
            style={styles.input}
            keyboardType="email-address"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputField}>
          <Ionicons name="lock-closed-outline" size={scale(24)} color="#A5A5A5" style={styles.icon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#A5A5A5"
            style={styles.input}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.showPasswordButton}
          >
            <Ionicons
              name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
              size={scale(20)}
              color="#A5A5A5"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Links */}
      <View style={styles.linksContainer}>
        <TouchableOpacity>
          <Text style={styles.link}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      {/* Get Started Button */}
      <Pressable
        style={({ pressed }) => [
          styles.getStartedButton,
          pressed && { transform: [{ scale: 0.98 }], opacity: 0.9 },
        ]}
        onPress={() => navigation?.navigate('StudentPortal')}
      >
        <Text style={styles.buttonText}>GET STARTED</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 0,
  },
  imageBackground: {
    ...StyleSheet.absoluteFillObject,
    height: scale(250),
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  titleContainer: {
    marginTop: scale(260),
    paddingHorizontal: scale(20),
    marginBottom: scale(20),
  },
  title: {
    fontSize: scale(26),
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  highlight: {
    color: '#D9534F',
  },
  subtitle: {
    fontSize: scale(16),
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: '#666',
    marginTop: scale(10),
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: scale(20),
    marginBottom: scale(30),
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FD',
    borderRadius: scale(15),
    paddingHorizontal: scale(15),
    marginBottom: scale(20),
    height: scale(60),
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: scale(6),
    // shadowOffset: { width: 0, height: scale(3) },
    // elevation: 3,
  },
  icon: {
    marginRight: scale(15),
    
  },
  input: {
    flex: 1,
    fontSize: scale(16),
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
  showPasswordButton: {
    marginLeft: scale(10),
    padding: scale(10),
  },
  linksContainer: {
    alignSelf: 'flex-end',
    paddingHorizontal: scale(20),
    marginBottom: scale(40),
  },
  link: {
    fontSize: scale(14),
    fontFamily: 'Poppins-Regular',
    color: '#D9534F',
  },
  getStartedButton: {
    backgroundColor: '#D9534F',
    paddingVertical: scale(18),
    borderRadius: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(20),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: scale(6),
    shadowOffset: { width: 0, height: scale(3) },
    elevation: 5,
  },
  buttonText: {
    fontSize: scale(18),
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
  },
});

export default LoginScreen;
