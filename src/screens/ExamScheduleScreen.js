import React, { useState, useMemo } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import CurvedBackground from '../components/CurvedBackground';
import FlexibleCard from '../components/FlexibleCard';
import DateSelector from '../components/DateSelector';
import GradientHeader from '../components/GradientHeader';
import NavComponent from '../components/NavComponent';
import { useNavigation } from '@react-navigation/native';






const { width } = Dimensions.get('window'); // Get screen width for scaling
const scale = (size) => (width / 375) * size; 
const ExamScheduleScreen = ({ route }) => {
  const [selectedDate, setSelectedDate] = useState(18);
  const navigation = useNavigation();

  const handleScreenChange = (screenName) => {
    navigation.navigate(screenName);
  };
  // Define all exam schedules for different dates
  const allExamSchedules = {
    18: [
      {
        id: 1,
        startTime: '09:10 AM',
        endTime: '10:00 AM',
        courseCode: 'MGT 101',
        courseTitle: 'Organization Management',
        room: 'Room 101',
        color: '#FF9800'
      },
      {
        id: 2,
        startTime: '10:30 AM',
        endTime: '12:00 PM',
        courseCode: 'CS 301',
        courseTitle: 'Database Management',
        room: 'Lab 204',
        color: '#4CAF50'
      }
    ],
    19: [
      {
        id: 3,
        startTime: '11:00 AM',
        endTime: '12:30 PM',
        courseCode: 'CS 401',
        courseTitle: 'Software Engineering',
        room: 'Room 202',
        color: '#2196F3'
      }
    ],
    20: [
      {
        id: 4,
        startTime: '09:00 AM',
        endTime: '10:30 AM',
        courseCode: 'MATH 201',
        courseTitle: 'Linear Algebra',
        room: 'Room 303',
        color: '#9C27B0'
      },
      {
        id: 5,
        startTime: '02:00 PM',
        endTime: '03:30 PM',
        courseCode: 'PHY 101',
        courseTitle: 'Physics Fundamentals',
        room: 'Lab 105',
        color: '#F44336'
      }
    ],
    21: [
      {
        id: 6,
        startTime: '10:00 AM',
        endTime: '11:30 AM',
        courseCode: 'ENG 201',
        courseTitle: 'Technical Writing',
        room: 'Room 401',
        color: '#009688'
      }
    ],
    22: [
      {
        id: 7,
        startTime: '01:00 PM',
        endTime: '02:30 PM',
        courseCode: 'CS 302',
        courseTitle: 'Data Structures',
        room: 'Lab 201',
        color: '#795548'
      }
    ],
    22: [
        {
          id: 8,
          startTime: '01:00 PM',
          endTime: '02:30 PM',
          courseCode: 'CS 302',
          courseTitle: 'Data Structures',
          room: 'Lab 201',
          color: '#795548'
        }
      ],
      22: [
        {
          id: 9,
          startTime: '01:00 PM',
          endTime: '02:30 PM',
          courseCode: 'CS 302',
          courseTitle: 'Data Structures',
          room: 'Lab 201',
          color: '#795548'
        }
      ],
      22: [
        {
          id: 10,
          startTime: '01:00 PM',
          endTime: '02:30 PM',
          courseCode: 'CS 302',
          courseTitle: 'Data Structures',
          room: 'Lab 201',
          color: '#795548'
        }
      ],
      22: [
        {
          id: 11,
          startTime: '01:00 PM',
          endTime: '02:30 PM',
          courseCode: 'CS 302',
          courseTitle: 'Data Structures',
          room: 'Lab 201',
          color: '#795548'
        }
      ]
  };

  // Function to get formatted date string
  const getFormattedDate = (day) => {
    const date = new Date(2024, 9, day); // October is month 9 (0-based)
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      ordinal: true
    });
  };

  // Get current exam schedule based on selected date
  const currentExamSchedule = useMemo(() => {
    return allExamSchedules[selectedDate] || [];
  }, [selectedDate]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <CurvedBackground>
          <Header 
            title={route.name}
            onBackPress={() => navigation.goBack()}
          />
          
          <GradientHeader date={getFormattedDate(selectedDate)} />
          
          <DateSelector
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
          />
        </CurvedBackground>

        <View style={styles.scheduleSection}>
          {currentExamSchedule.length > 0 ? (
            currentExamSchedule.map((exam) => (
              <FlexibleCard
                key={exam.id}
                variant="exam"
                data={exam}
              />
            ))
          ) : (
            <View style={styles.noExamsContainer}>
              <Text style={styles.noExamsText}>No exams scheduled for this date</Text>
            </View>
          )}
        </View>

      </ScrollView>
      
      <View style={styles.navContainer}>
        <NavComponent
          activeScreen={route.name}
          onScreenChange={handleScreenChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FF',
  },
  scrollContent: {
    flexGrow: 1,
  },
  scheduleSection: {
    backgroundColor: '#F5F9FF',
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  noExamsContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noExamsText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
  },
  navContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: scale(65),
  },
});

export default ExamScheduleScreen;