import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SemesterTabs from '../components/SemesterTabs'; // Correctly importing SemesterTabs
import CourseCardList from '../components/CourseCardList'; // Reusable Course List Component
import BottomNavigation from '../components/BottomNavigation';
import CurvedBackground from '../components/CurvedBackground';
import NavComponent from '../components/NavComponent';
import { useNavigation } from '@react-navigation/native';






const { width } = Dimensions.get('window');
const scale = (size) => (width / 375) * size; // Scaling utility for responsive design

const SemesterRegistrationScreen = ({route}) => {
  const [selectedSemester, setSelectedSemester] = useState('7 Semester');
  const [courses, setCourses] = useState([
    { id: 1, name: 'Database Management System', creditHours: '3+1', selected: true },
    { id: 2, name: 'Software Engineering', creditHours: '3+1', selected: false },
    { id: 3, name: 'Computer Networks', creditHours: '3+1', selected: false },
    { id: 4, name: 'Artificial Intelligence', creditHours: '3+1', selected: false },
    { id: 5, name: 'Operating Systems', creditHours: '3+1', selected: false },
  ]);
  const navigation = useNavigation();

  const handleScreenChange = (screenName) => {
    navigation.navigate(screenName);
  };
  const toggleSelectCourse = (id) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, selected: !course.selected } : course
      )
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Curved Background Section */}
        <CurvedBackground>
          <Header   title={route.name}
            onBackPress={() => navigation.goBack()} />

          {/* Search Bar Positioned on the Curve */}
          <View style={styles.searchBarContainer}>
            <SearchBar placeholder="Search?" />
          </View>

          {/* Semester Tabs Positioned on the Curve */}
          <View style={styles.semesterTabsContainer}>
            <SemesterTabs
              semesters={[
                '1 Semester',
                '2 Semester',
                '3 Semester',
                '4 Semester',
                '5 Semester',
                '6 Semester',
                '7 Semester',
                '8 Semester',
              ]}
              selectedSemester={selectedSemester}
              onSelect={(semester) => setSelectedSemester(semester)}
            />
          </View>
        </CurvedBackground>

        {/* Course List Section */}
        <CourseCardList courses={courses} toggleSelectCourse={toggleSelectCourse} />
      </ScrollView>

      {/* Bottom Navigation */}
      <NavComponent
          activeScreen={route.name}
          onScreenChange={handleScreenChange}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FD',
  },
  scrollContent: {
    flexGrow: 1, // Ensures scrolling by making content expand
    paddingBottom: scale(100), // Space for BottomNavigation
  },
  searchBarContainer: {
    marginTop: scale(20),
    paddingHorizontal: scale(16),
  },
  semesterTabsContainer: {
    marginTop: scale(20),
    paddingHorizontal: scale(16),
  },
});

export default SemesterRegistrationScreen;
