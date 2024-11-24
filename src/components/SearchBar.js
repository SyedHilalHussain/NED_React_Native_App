import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = ({ placeholder = 'Search?', onSearch }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color="#A5A5A5" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#A5A5A5"
        onChangeText={onSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F8FF', // Light blue background to match the UI
    borderRadius: 12, // Rounded edges
    paddingHorizontal: 15, // Padding inside the container
    height: 50, // Fixed height for the search bar
    marginHorizontal: 10, // Ensure it looks responsive with some margin
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05, // Very subtle shadow for elevation
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1, // Light elevation for a modern look
  },
  icon: {
    marginRight: 8, // Spacing between icon and text input
  },
  input: {
    flex: 1,
    fontSize: 14, // Slightly smaller text size for a clean design
    fontFamily: 'Poppins-Regular',
    color: '#333', // Text color
  },
});

export default SearchBar;
