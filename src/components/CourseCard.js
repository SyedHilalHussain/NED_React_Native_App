import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Get screen dimensions
const { width } = Dimensions.get('window');

// Utility function for scaling
const scale = (size) => (width / 375) * size;

const CourseCard = ({ name, creditHours, selected, onSelect, borderColor }) => {
  return (
    <View style={[styles.container, { borderLeftColor: borderColor }]}>
      <TouchableOpacity onPress={onSelect} style={styles.selectButton}>
        <Text style={[styles.selectText, selected && styles.selectedText]}>
          {selected ? 'Selected' : 'Select'}
        </Text>
      </TouchableOpacity>
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.creditHours}>
          <Ionicons name="time-outline" size={scale(14)} color="#FFA500" /> {creditHours} Credit Hours
        </Text>
      </View>
      {selected && (
        <Ionicons
          name="checkmark-circle-outline"
          size={scale(30)} // Scaled icon size
          color="#D9534F"
          style={styles.checkIcon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: scale(15),
    padding: scale(20),
    marginBottom: scale(15),
    borderLeftWidth: scale(6), // Responsive border width
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: scale(6), // Responsive shadow radius
    // shadowOffset: { width: 0, height: scale(3) },
    // elevation: 3,
  },
  selectButton: {
    backgroundColor: '#EAEAEA',
    borderRadius: scale(10),
    paddingVertical: scale(10),
    paddingHorizontal: scale(15),
    marginRight: scale(15),
  },
  selectText: {
    fontSize: scale(14),
    fontFamily: 'Poppins-Regular',
    color: '#555',
  },
  selectedText: {
    color: '#D9534F',
    fontFamily: 'Poppins-Bold',
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: scale(18),
    fontFamily: 'Poppins-Bold',
    color: '#333',
    marginBottom: scale(5),
  },
  creditHours: {
    fontSize: scale(16),
    fontFamily: 'Poppins-Regular',
    color: '#A5A5A5',
  },
  checkIcon: {
    marginLeft: scale(10),
  },
});

export default CourseCard;
