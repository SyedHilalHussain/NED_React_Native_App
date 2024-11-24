import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import AttendanceProgress from '../components/AttendanceProgress';
import AttendanceCard from '../components/AttendanceCard';
import CurvedBackground from '../components/CurvedBackground';
import BottomNavigation from '../components/BottomNavigation';
import NavComponent from '../components/NavComponent';
const { width } = Dimensions.get('window');
const scale = (size) => (width / 375) * size; // Scaling utility based on screen width

const AttendanceScreen = ({ route }) => {
  const courses = [
    {
      id: 1,
      courseName: 'Software Re-Engineering',
      attendance: '20/30',
      status: 'You cannot miss next class',
      percentage: 65,
      color: '#4CAF50',
    },
    {
      id: 2,
      courseName: 'Database Systems',
      attendance: '25/30',
      status: 'Good attendance so far!',
      percentage: 80,
      color: '#FFA500',
    },
    {
      id: 3,
      courseName: 'Artificial Intelligence',
      attendance: '15/30',
      status: 'At risk of low attendance.',
      percentage: 50,
      color: '#FF3E3E',
    },
  ];
  const navigation = useNavigation();

  const handleScreenChange = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Curved Background Section */}
        <CurvedBackground>
          <Header title={route.name}
            onBackPress={() => navigation.goBack()} />
          <View style={styles.progressContainer}>
            <AttendanceProgress
              percentage={65}
              radius={scale(90)}
              strokeWidth={scale(10)}
              label="Total Attendance"
            />
          </View>
        </CurvedBackground>

        {/* Attendance Cards Section */}
        <View style={styles.cardContainer}>
          {courses.map((course) => (
            <AttendanceCard
              key={course.id}
              courseName={course.courseName}
              attendance={course.attendance}
              status={course.status}
              percentage={course.percentage}
              color={course.color}
            />
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
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
    paddingBottom: scale(100),
  },
  progressContainer: {
    alignItems: 'center',
    marginVertical: scale(20),
  },
  cardContainer: {
    backgroundColor: '#F5F9FF',
    paddingTop: scale(20),
    paddingHorizontal: scale(16),
  },
});

export default AttendanceScreen;
