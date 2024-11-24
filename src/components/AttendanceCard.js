import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

// Get device dimensions
const { width, height } = Dimensions.get('window');

// Utility to scale sizes dynamically based on screen width
const scale = (size) => (width / 375) * size;

const AttendanceCard = ({ courseName, attendance, status, percentage, color }) => {
  const radius = scale(25); // Dynamic radius for the progress circle
  const strokeWidth = scale(5); // Dynamic stroke width
  const circumference = 2 * Math.PI * radius;
  const progressStroke = (percentage / 100) * circumference; // Dynamic progress stroke

  return (
    <View style={[styles.container, { borderLeftColor: color }]}>
      <View style={styles.content}>
        <Text style={styles.courseName}>{courseName}</Text>
        <Text style={styles.attendance}>Attendance: {attendance}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
      <View style={styles.circleContainer}>
        <Svg
          width={scale(50)}
          height={scale(60)}
          viewBox="0 0 60 60"
        >
          {/* Background Circle */}
          <Circle
            cx="30"
            cy="30"
            r={radius}
            stroke="#EAEAEA"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress Circle */}
          <Circle
            cx="30"
            cy="30"
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={circumference - progressStroke}
            strokeLinecap="round"
          />
          {/* Percentage Text */}
          <SvgText
            x="25"
            y="35"
            textAnchor="middle"
            fontSize={scale(16)}
            fontWeight="bold"
            fill="#333"
          >
            {percentage}%
          </SvgText>
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: scale(15),
    padding: scale(15),
    marginHorizontal: scale(20),
    marginBottom: scale(20),
    borderLeftWidth: scale(6), // Adds the colored bar on the left
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: scale(6),
    // shadowOffset: { width: 0, height: scale(3) },
    // elevation: 3,
  },
  content: {
    flex: 1,
  },
  courseName: {
    fontSize: scale(18),
    fontFamily: 'Poppins-Bold',
    color: '#333',
    marginBottom: scale(5),
  },
  attendance: {
    fontSize: scale(16),
    fontFamily: 'Poppins-Regular',
    color: '#666',
    marginBottom: scale(5),
  },
  status: {
    fontSize: scale(16),
    fontFamily: 'Poppins-Regular',
    color: '#A5A5A5',
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AttendanceCard;
