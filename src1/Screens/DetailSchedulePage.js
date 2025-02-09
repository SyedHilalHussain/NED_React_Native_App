import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderBackground from '../Components/HeaderBackground ';
import { styles } from './styles';

const { width } = Dimensions.get('window');

const DetailSchedulePage = ({ navigation, route }) => {
  const course = route.params?.course || {
    title: "Advanced Chemistry",
    code: "AC0024",
    location: "A Hall, Rm 35",
    timeRange: "8:00 AM - 9:15 AM",
    date: "December, 12th Tuesday",
    learningChecks: [
      "Q1. Imperdium mediocrem adipiscing te cum, quo an dolor molestiae?",
      "Q2. Imperdium mediocrem adipiscing te cum?"
    ],
    lecturer: "Dr. Smith",
    resources: [
      { title: "Lecture Slides", type: "PDF" },
      { title: "Lab Manual", type: "DOC" }
    ],
    assignments: [
      { title: "Chemical Analysis Report", dueDate: "Dec 19" },
      { title: "Lab Exercise", dueDate: "Dec 15" }
    ]
  };

  return (
    <View style={styles.DetailSchedulePagecontainer}>
      {/* Header Image Section */}
      <View style={styles.DetailSchedulePageheaderContainer}>
       <HeaderBackground />
      
        
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.DetailSchedulePagebackButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Course Info Overlay */}
        <View style={styles.DetailSchedulePagecourseInfoOverlay}>
          <Text style={styles.DetailSchedulePagecourseTitle}>{course.title}</Text>
          <Text style={styles.DetailSchedulePagecourseCode}>{course.code}</Text>
          <View style={styles.DetailSchedulePagedateTimeContainer}>
            <Text style={styles.DetailSchedulePagedateText}>{course.date}</Text>
            <Text style={styles.DetailSchedulePagetimeText}>{course.timeRange}</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.DetailSchedulePagecontentSection}>
        {/* Location Section */}
        <View style={styles.DetailSchedulePagesection}>
          <Text style={styles.DetailSchedulePagesectionTitle}>LOCATION</Text>
          <View style={styles.DetailSchedulePagecard}>
            <Text style={styles.DetailSchedulePagelocationText}>{course.location}</Text>
          </View>
        </View>

        {/* Learning Checks Section */}
        <View style={styles.DetailSchedulePagesection}>
          <Text style={styles.DetailSchedulePagesectionTitle}>LEARNING CHECKS</Text>
          <View style={styles.DetailSchedulePagecard}>
            {course.learningChecks.map((check, index) => (
              <Text key={index} style={styles.DetailSchedulePagecheckText}>{check}</Text>
            ))}
          </View>
        </View>

        {/* Lecturer Section */}
        <View style={styles.DetailSchedulePagesection}>
          <Text style={styles.DetailSchedulePagesectionTitle}>LECTURER</Text>
          <View style={styles.DetailSchedulePagecard}>
            <Text style={styles.DetailSchedulePagelecturerText}>{course.lecturer}</Text>
          </View>
        </View>

        {/* Resources Section */}
        <View style={styles.DetailSchedulePagesection}>
          <Text style={styles.DetailSchedulePagesectionTitle}>RESOURCES</Text>
          <View style={styles.DetailSchedulePagecard}>
            {course.resources.map((resource, index) => (
              <TouchableOpacity key={index} style={styles.DetailSchedulePageresourceItem}>
                <Ionicons name="document-text-outline" size={20} color="#fff" />
                <Text style={styles.DetailSchedulePageresourceText}>{resource.title}</Text>
                <Text style={styles.DetailSchedulePageresourceType}>{resource.type}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Assignments Section */}
        <View style={styles.DetailSchedulePagesection}>
          <Text style={styles.DetailSchedulePagesectionTitle}>ASSIGNMENTS</Text>
          <View style={styles.DetailSchedulePagecard}>
            {course.assignments.map((assignment, index) => (
              <View key={index} style={styles.DetailSchedulePageassignmentItem}>
                <Text style={styles.DetailSchedulePageassignmentTitle}>{assignment.title}</Text>
                <Text style={styles.DetailSchedulePageassignmentDue}>Due: {assignment.dueDate}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};



export default DetailSchedulePage;