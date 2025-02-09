import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../Screens/styles';

export const CourseSchedule = ({ schedule,navigation  }) => {
  // Create animated values for each card
  const fadeAnims = React.useRef(
    schedule.map(() => new Animated.Value(0))
  ).current;

  React.useEffect(() => {
    // Stagger animation for each card
    Animated.stagger(150, 
      fadeAnims.map(anim => 
        Animated.spring(anim, {
          toValue: 1,
          useNativeDriver: true,
          friction: 8,
          tension: 40
        })
      )
    ).start();
  }, []);

  return (
    <View style={styles.CourseSchedulescheduleSection}>
      {schedule.map((course, index) => (
        <Animated.View 
          key={index}
          style={[
            styles.CourseSchedulescheduleCard,
            {
              opacity: fadeAnims[index],
              transform: [{
                translateY: fadeAnims[index].interpolate({
                  inputRange: [0, 2],
                  outputRange: [50, 0]
                })
              }]
            }
          ]}
        >
          <View style={styles.CourseSchedulescheduleTime}>  
            <Text style={styles.CourseScheduletimeText}>{course.time}</Text>
            <View style={styles.CourseScheduletimelineDot} />
            {index !== schedule.length - 1 && <View style={styles.CourseScheduletimelineLine} />}
          </View>
          <TouchableOpacity style={styles.CourseSchedulecourseInfo} activeOpacity={0.7}  onPress={() => {
  // Add a small scale animation
  Animated.sequence([
    Animated.spring(fadeAnims[index], {
      toValue: 0.95,
      useNativeDriver: true,
      friction: 8,
      tension: 40
    }),
    Animated.spring(fadeAnims[index], {
      toValue: 1,
      useNativeDriver: true,
      friction: 8,
      tension: 40
    })
  ]).start(() => {
    navigation.navigate('DetailSchedulePage', { course });
  });
}}
     >
            <View style={styles.CourseScheduleheaderSection}>
              <View style={styles.CourseScheduletitleContainer}>
                <Text style={styles.CourseSchedulecourseTitle}>{course.title}</Text>
                <View style={styles.CourseScheduletimeRangePill}>
                  <Ionicons name="time-outline" size={14} color="#2eb086" />
                  <Text style={styles.CourseScheduletimeRangeText}>{course.time}</Text>
                </View>
              </View>
              <View style={styles.CourseSchedulearrowContainer}>
                <Ionicons name="chevron-forward" size={24} color="#2eb086" />
              </View>
            </View>
            <View style={styles.CourseScheduledivider} />
            <View style={styles.CourseSchedulecourseDetails}>
              <View style={styles.CourseScheduledetailItem}>
                <Ionicons name="location-outline" size={20} color="#2eb086" />
                <Text style={styles.CourseScheduledetailText}>{course.location}</Text>
              </View>
              <View style={styles.CourseScheduledetailItem}>
                <Ionicons name="person-outline" size={20} color="#2eb086" />
                <Text style={styles.CourseScheduledetailText}>{course.lecturer}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Animated.View>
      ))}
    </View>
  );
};



export default CourseSchedule;