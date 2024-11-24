//for this "ResultsScreen.js"
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import ResultCard from '../components/ResultCard'; // Reuse the existing ResultCard component

// Get screen dimensions
const { width } = Dimensions.get('window');

// Utility function for scaling
const scale = (size) => (width / 375) * size;

const ResultCardsList = ({ courses }) => {
  return (
    <View style={styles.container}>
      {courses.map((course) => (
        <ResultCard
          key={course.id}
          courseName={course.courseName}
          result={course.result}
          status={course.status}
          grade={course.grade}
          progress={course.progress}
          color={course.color}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(16),
    paddingTop: scale(20),
  },
});

export default ResultCardsList;
