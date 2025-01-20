import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';



export const CourseSchedule = ({ schedule }) => (
    <View style={styles.scheduleSection}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Today's Schedule</Text>
        <TouchableOpacity>
          <Text style={styles.seeMoreText}>Full Schedule</Text>
        </TouchableOpacity>
      </View>
      {schedule.map((course, index) => (
        <View key={index} style={styles.scheduleCard}>
          <View style={styles.scheduleTime}>
            <Text style={styles.timeText}>{course.time}</Text>
            <View style={styles.timelineDot} />
            {index !== schedule.length - 1 && <View style={styles.timelineLine} />}
          </View>
          <View style={styles.courseInfo}>
            <Text style={styles.courseTitle}>{course.title}</Text>
            <View style={styles.courseDetails}>
              <View style={styles.courseLocation}>
                <Ionicons name="location-outline" size={16} color="#888888" />
                <Text style={styles.locationText}>{course.location}</Text>
              </View>
              <View style={styles.courseLecturer}>
                <Ionicons name="person-outline" size={16} color="#888888" />
                <Text style={styles.lecturerText}>{course.lecturer}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );

  const styles = StyleSheet.create({ 

    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 24,
      },
      sectionTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
      },
      seeMoreText: {
        color: '#2eb086',
        fontSize: 14,
      },
    scheduleSection: {
        marginTop: 25,
        marginBottom: 15,
      },
      scheduleCard: {
        flexDirection: 'row',
        marginBottom: 25,
        paddingLeft: 15,
      },
      scheduleTime: {
        width: 85,
        alignItems: 'flex-start',
      },
      timeText: {
        color: '#2eb086',
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
      },
      timelineDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#2eb086',
        marginLeft: 4,
      },
      timelineLine: {
        width: 2,
        height: '100%',
        backgroundColor: 'rgba(46, 176, 134, 0.2)',
        position: 'absolute',
        top: 20,
        left: 10,
      },
      courseInfo: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        borderRadius: 16,
        padding: 16,
        marginLeft: 15,
        borderWidth: 1,
        borderColor: 'rgba(46, 176, 134, 0.1)',
      },
      courseTitle: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
      },
      courseDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      courseLocation: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      courseLecturer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      locationText: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 14,
        marginLeft: 6,
      },
      lecturerText: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 14,
        marginLeft: 6,
      },

  });