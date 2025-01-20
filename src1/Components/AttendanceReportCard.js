import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AttendanceReportCard = ({ overall, today, yesterday }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Attendance Report</Text>
      <View style={styles.row}>
        <Text style={styles.value}>Overall: {overall}%</Text>
        <Text style={styles.value}>Today: {today}</Text>
        <Text style={styles.value}>Yesterday: {yesterday}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F9F9F9',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 14,
  },
});

export default AttendanceReportCard;
