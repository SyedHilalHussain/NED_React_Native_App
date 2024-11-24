//For SemesterRegistrationDetailsScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CourseSection from './CourseSection'; // Reuse existing CourseSection component

const CourseSections = ({ sections }) => {
  return (
    <View style={styles.container}>
      {sections.map((section, index) => (
        <CourseSection
          key={index}
          title={section.title}
          subtitle={section.subtitle}
          courses={section.courses}
          onDownload={section.onDownload}
          borderColor={section.borderColor}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20, // Adds spacing below the curve
    paddingHorizontal: 16, // Matches spacing for consistent layout
  },
});

export default CourseSections;
