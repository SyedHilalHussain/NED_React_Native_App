import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, StatusBar, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ onMenuPress }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Status Bar Styling */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="#4F80E1" // Updated header background color
      />
      <View style={styles.header}>
        {/* Left Section: Menu Icon */}
        <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
          <MaterialIcons name="menu" size={32} color="#fff" /> {/* Larger menu icon */}
        </TouchableOpacity>

        {/* Center Section: Logo */}
        <Image
          source={require('../Assets/logo.jpg')} // Update path for your logo
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Placeholder for Right Section */}
        <View style={styles.placeholder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#4F80E1', // Updated to match the header color
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Ensure no space
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  header: {
    height: 80, // Increased height for better proportions
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  menuButton: {
    padding: 8,
  },
  logo: {
    height: 60, // Larger logo
    width: 140, // Adjusted for better visibility
  },
  placeholder: {
    width: 32, // Matches the size of the menu icon for symmetry
  },
});

export default Header;
