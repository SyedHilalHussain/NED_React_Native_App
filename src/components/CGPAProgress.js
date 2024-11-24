import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

// Get screen dimensions
const { width } = Dimensions.get('window');

// Utility function for scaling
const scale = (size) => (width / 375) * size;

const CGPAProgress = ({ percentage }) => {
  const radius = scale(90); // Responsive radius
  const strokeWidth = scale(10); // Responsive stroke width
  const circumference = 2 * Math.PI * radius;
  const progressStroke = (percentage / 100) * circumference;

  return (
    <View style={styles.container}>
      <Svg
        width={radius * 2 + scale(40)} // Adjusted width
        height={radius * 2 + scale(40)} // Adjusted height
        viewBox={`0 0 ${radius * 2 + scale(40)} ${radius * 2 + scale(40)}`}
      >
        {/* Background Circle */}
        <Circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#EAEAEA"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Circle */}
        <Circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#4CAF50"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference - progressStroke}
          strokeLinecap="round"
        />
        {/* CGPA Value */}
        <SvgText
          x="50%"
          y="45%" // Adjusted vertical position
          alignmentBaseline="middle"
          textAnchor="middle"
          fontSize={scale(28)} // Responsive font size
          fontWeight="bold"
          fill="#333"
        >
          {percentage.toFixed(1)}
        </SvgText>
        <SvgText
          x="50%"
          y="55%" // Slightly below the CGPA value
          alignmentBaseline="middle"
          textAnchor="middle"
          fontSize={scale(16)} // Responsive font size
          fontWeight="bold"
          fill="#666"
        >
          CGPA
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: scale(20), // Responsive margin
  },
});

export default CGPAProgress;
