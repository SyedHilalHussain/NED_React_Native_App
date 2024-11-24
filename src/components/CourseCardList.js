//For SemesterRegistrationScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CourseCard from './CourseCard'; // Reuse existing CourseCard component

const CourseCardList = ({ courses, toggleSelectCourse }) => {
  return (
    <View style={styles.container}>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          name={course.name}
          creditHours={course.creditHours}
          selected={course.selected}
          onSelect={() => toggleSelectCourse(course.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9FD',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
});

export default CourseCardList;
