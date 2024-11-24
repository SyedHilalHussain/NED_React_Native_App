import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Get screen dimensions
const { width } = Dimensions.get('window');

// Utility function for scaling
const scale = (size) => (width / 375) * size;

const CourseSection = ({ title, subtitle, courses, onDownload, borderColor }) => {
  return (
    <View style={[styles.container, { borderLeftColor: borderColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={styles.coursesContainer}>
        {courses.map((course, index) => (
          <View style={styles.courseRow} key={index}>
            <Text style={styles.courseText}>{course.name}</Text>
            <Ionicons
              name={course.isSelected ? 'checkmark-circle-outline' : 'close-circle-outline'}
              size={scale(24)} // Scaled icon size
              color={course.isSelected ? '#4CAF50' : '#FF3E3E'}
            />
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.downloadButton} onPress={onDownload}>
        <Text style={styles.downloadText}>Download PDF</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: scale(15),
    padding: scale(20), // Responsive padding
    marginBottom: scale(20),
    marginHorizontal: scale(20),
    borderLeftWidth: scale(6), // Responsive border width
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: scale(6), // Responsive shadow radius
    shadowOffset: { width: 0, height: scale(3) },
    elevation: 3,
  },
  title: {
    fontSize: scale(20), // Scaled title font
    fontFamily: 'Poppins-Bold',
    color: '#333',
    marginBottom: scale(8),
  },
  subtitle: {
    fontSize: scale(16), // Scaled subtitle font
    fontFamily: 'Poppins-Regular',
    color: '#666',
    marginBottom: scale(18),
  },
  coursesContainer: {
    marginBottom: scale(18),
  },
  courseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scale(12), // Responsive spacing between rows
  },
  courseText: {
    fontSize: scale(16), // Scaled course text font
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
  downloadButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: scale(12), // Responsive button padding
    borderRadius: scale(30), // Fully rounded edges
    alignItems: 'center',
    justifyContent: 'center',
  },
  downloadText: {
    fontSize: scale(16), // Scaled button text font
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
  },
});

export default CourseSection;
