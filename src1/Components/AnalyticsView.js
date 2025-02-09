// AnalyticsView.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { styles } from '../Screens/styles';
const AnalyticsView = ({ courses, selectedSemester }) => {
  // Filter courses based on selected semester
  const filteredCourses = selectedSemester === 'All Semesters' 
    ? courses 
    : courses.filter(course => course.semester === selectedSemester);

  // Calculate GPA data for charts
  const gpaData = filteredCourses.map(course => parseFloat(course.gpa));
  const gradeDistribution = calculateGradeDistribution(filteredCourses);

  return (
    <ScrollView style={styles.AnalyticsViewanalyticsContainer}>
      <View style={styles.AnalyticsViewchartCard}>
        <Text style={styles.AnalyticsViewchartTitle}>
          GPA Trend - {selectedSemester}
        </Text>
        <LineChart
          data={{
            labels: filteredCourses.map(course => course.code),
            datasets: [{ data: gpaData }]
          }}
          width={350}
          height={200}
          chartConfig={{
            backgroundColor: "#2EB086",
            backgroundGradientFrom: "#2EB086",
            backgroundGradientTo: "#10B981",
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          bezier
          style={styles.AnalyticsViewchart}
        />
      </View>

      <View style={styles.AnalyticsViewchartCard}>
        <Text style={styles.AnalyticsViewchartTitle}>Course Performance Distribution</Text>
        <BarChart
          data={{
            labels: ["A", "B", "C", "D", "F"],
            datasets: [{ data: gradeDistribution }]
          }}
          width={350}
          height={200}
          chartConfig={{
            backgroundColor: "#2EB086",
            backgroundGradientFrom: "#2EB086",
            backgroundGradientTo: "#10B981",
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          style={styles.AnalyticsViewchart}
        />
      </View>
    </ScrollView>
  );
};

// Helper function to calculate grade distribution
const calculateGradeDistribution = (courses) => {
  const distribution = [0, 0, 0, 0, 0]; // A, B, C, D, F
  
  courses.forEach(course => {
    const gpa = parseFloat(course.gpa);
    if (gpa >= 3.7) distribution[0]++;
    else if (gpa >= 2.7) distribution[1]++;
    else if (gpa >= 1.7) distribution[2]++;
    else if (gpa >= 1.0) distribution[3]++;
    else distribution[4]++;
  });
  
  return distribution;
};



export default AnalyticsView;