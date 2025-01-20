import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const AnimatedRing = ({ percentage, color }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: percentage,
      duration: 1500,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [percentage]);

  const circleCircumference = 2 * Math.PI * 27; // Based on the ring size (60px - 6px border = 54px diameter, so 27px radius)
  const dashOffset = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [circleCircumference, 0],
  });

  return (
    <View style={styles.ringWrapper}>
      <Svg width="60" height="60" style={styles.svg}>
        {/* Background circle */}
        <Circle
          cx="30"
          cy="30"
          r="27"
          stroke="#E0E0E0"
          strokeWidth="6"
          fill="transparent"
        />
        {/* Animated progress circle */}
        <AnimatedCircle
          cx="30"
          cy="30"
          r="27"
          stroke={color}
          strokeWidth="6"
          fill="transparent"
          strokeDasharray={circleCircumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </Svg>
      <View style={styles.percentageContainer}>
        <Animated.Text style={styles.percentageText}>
          {animatedValue.interpolate({
            inputRange: [0, 100],
            outputRange: ['0', percentage.toString()],
          })}%
        </Animated.Text>
      </View>
    </View>
  );
};

export const DepartmentStats = ({ department, onEdit, onDelete }) => {
  const { name, totalStudents, genderStats } = department;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.departmentName}>{name}</Text>
        <View style={styles.iconButtons}>
          <TouchableOpacity onPress={onEdit} style={styles.iconButton}>
            <MaterialCommunityIcons name="pencil" size={24} color="#4B6BFB" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete} style={styles.iconButton}>
            <MaterialCommunityIcons name="delete" size={24} color="#FF4B55" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        {/* Total Students Section */}
        <View style={styles.studentCount}>
          <View style={styles.studentInfo}>
            <MaterialCommunityIcons name="school-outline" size={28} color="#4B6BFB" />
            <Text style={styles.totalNumber}>{totalStudents}</Text>
          </View>
          <Text style={styles.label}>TOTAL STUDENTS</Text>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <AnimatedRing percentage={genderStats.boys.percentage} color="#4B6BFB" />
            <Text style={styles.statLabel}>Boys</Text>
            <Text style={styles.statValue}>{genderStats.boys.count} Students</Text>
          </View>

          <View style={styles.statItem}>
            <AnimatedRing percentage={genderStats.girls.percentage} color="#FF69B4" />
            <Text style={styles.statLabel}>Girls</Text>
            <Text style={styles.statValue}>{genderStats.girls.count} Students</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  departmentName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  ringWrapper: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {
    position: 'absolute',
  },
  percentageContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  iconButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    padding: 4,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  studentCount: {
    alignItems: 'flex-start',
  },
  studentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  totalNumber: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  label: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: '#666666',
    marginTop: 8,
  },
  statValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1A1A1A',
    marginTop: 2,
  },
});
