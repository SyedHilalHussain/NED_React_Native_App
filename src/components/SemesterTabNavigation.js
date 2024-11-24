//for this "ResultsScreen.js"
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import SemesterTabs from '../components/SemesterTabs'; // Reuse the existing SemesterTabs component

const { width } = Dimensions.get('window'); // Get screen width for scaling

const scale = (size) => (width / 375) * size; // Scaling utility based on screen width

const SemesterTabNavigation = ({ selectedSemester, onSelectSemester }) => {
  const semesters = [
    '1 Semester',
    '2 Semester',
    '3 Semester',
    '4 Semester',
    '5 Semester',
    '6 Semester',
    '7 Semester',
    '8 Semester',
  ];

  return (
    <View style={styles.container}>
      <SemesterTabs
        semesters={semesters}
        selectedSemester={selectedSemester}
        onSelect={onSelectSemester}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(10), // Adjust spacing around the SemesterTabs
    marginVertical: scale(15),
  },
});

export default SemesterTabNavigation;
