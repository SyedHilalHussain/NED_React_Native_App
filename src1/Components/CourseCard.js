// components/CourseCard.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../Screens/styles';
export const CourseCard = ({ course }) => {
  const [expanded, setExpanded] = useState(false);
  const rotateAnim = useState(new Animated.Value(0))[0];

  const toggleExpand = () => {
    setExpanded(!expanded);
    Animated.spring(rotateAnim, {
      toValue: expanded ? 0 : 1,
      useNativeDriver: true,
    }).start();
  };

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.CourseCardcourseCard}>
      <TouchableOpacity onPress={toggleExpand} style={styles.CourseCardcourseHeader}>
        <View>
          <Text style={styles.CourseCardcourseName}>{course.name}</Text>
          <Text style={styles.CourseCardcourseCode}>{course.code}</Text>
        </View>
        <View style={styles.CourseCardgpaContainer}>
          <Text style={styles.CourseCardgpaText}>{course.gpa}</Text>
          <Animated.View style={{ transform: [{ rotate }] }}>
            <Ionicons name="chevron-down" size={24} color="#ffffff" />
          </Animated.View>
        </View>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.CourseCardexpandedContent}>
          <View style={styles.CourseCardsection}>
            <Text style={styles.CourseCardsectionTitle}>CLOs</Text>
            {course.clos.map((clo, index) => (
              <View key={index} style={styles.CourseCardoutcomeItem}>
                <Text style={styles.CourseCardoutcomeText}>{clo.title}</Text>
                <View style={[styles.CourseCardstatusIndicator, { backgroundColor: clo.achieved ? '#10B981' : '#EF4444' }]} />
              </View>
            ))}
          </View>

          <View style={styles.CourseCardsection}>
            <Text style={styles.CourseCardsectionTitle}>PLOs</Text>
            {course.plos.map((plo, index) => (
              <View key={index} style={styles.CourseCardoutcomeItem}>
                <Text style={styles.CourseCardoutcomeText}>{plo.title}</Text>
                <View style={[styles.CourseCardstatusIndicator, { backgroundColor: plo.achieved ? '#10B981' : '#EF4444' }]} />
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};


