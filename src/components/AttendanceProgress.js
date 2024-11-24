import React from 'react';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import { StyleSheet, Dimensions } from 'react-native';

// Get device dimensions
const { width } = Dimensions.get('window');

// Utility to scale sizes dynamically based on screen width
const scale = (size) => (width / 375) * size;

const AttendanceProgress = ({ percentage, radius, strokeWidth, label }) => {
  const scaledRadius = scale(radius); // Dynamic radius
  const scaledStrokeWidth = scale(strokeWidth); // Dynamic stroke width
  const circumference = 2 * Math.PI * scaledRadius;
  const progressStroke = (percentage / 100) * circumference;

  return (
    <Svg
      width={scaledRadius * 2 + scale(40)}
      height={scaledRadius * 2 + scale(40)}
      viewBox={`0 0 ${scaledRadius * 2 + scale(40)} ${scaledRadius * 2 + scale(40)}`}
      style={styles.svgContainer}
    >
      {/* Background Circle */}
      <Circle
        cx="50%"
        cy="50%"
        r={scaledRadius}
        stroke="#EAEAEA"
        strokeWidth={scaledStrokeWidth}
        fill="none"
      />
      {/* Progress Circle */}
      <Circle
        cx="50%"
        cy="50%"
        r={scaledRadius}
        stroke="#4CAF50"
        strokeWidth={scaledStrokeWidth}
        fill="none"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={circumference - progressStroke}
        strokeLinecap="round"
      />
      {/* Percentage Text */}
      <SvgText
        x="48%" // Center horizontally
        y="45%" // Adjust vertically
        alignmentBaseline="middle"
        textAnchor="middle"
        fontSize={scale(28)} // Scaled font size
        fontWeight="bold" // Bold text
        fill="#333"
      >
        {percentage}%
      </SvgText>
      {/* Label Text */}
      <SvgText
        x="50%"
        y="55%" // Slightly below the percentage value
        alignmentBaseline="middle"
        textAnchor="middle"
        fontSize={scale(16)} // Scaled font size
        fontWeight="bold" // Bold label
        fill="#666"
      >
        {label}
      </SvgText>
    </Svg>
  );
};

const styles = StyleSheet.create({
  svgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AttendanceProgress;
