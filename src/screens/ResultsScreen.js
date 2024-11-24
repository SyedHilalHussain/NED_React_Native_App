import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import CurvedBackground from '../components/CurvedBackground';
import CGPAProgress from '../components/CGPAProgress'; // New component
import SemesterTabNavigation from '../components/SemesterTabNavigation'; // New component
import ResultCardsList from '../components/ResultCardsList'; // New component
import NavComponent from '../components/NavComponent';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window'); // Get screen width for scaling
const scale = (size) => (width / 375) * size; // Scaling utility for responsive design

const ResultsScreen = ({route}) => {
  const navigation = useNavigation();

  const handleScreenChange = (screenName) => {
    navigation.navigate(screenName);
  };
  
  const [selectedSemester, setSelectedSemester] = useState('7 Semester');

  // Mocked courses data (can be fetched via API in the future)
  const courses = [
    {
      id: 1,
      courseName: 'Software Re-Engineering',
      result: '3.4/4',
      status: 'You can take backlog to improve GPA',
      grade: 'B+',
      progress: 85,
      color: '#4CAF50',
    },
    {
      id: 2,
      courseName: 'Database Systems',
      result: '3.8/4',
      status: 'Well done! Keep up the good work!',
      grade: 'A',
      progress: 95,
      color: '#FFA500',
    },
    {
      id: 3,
      courseName: 'Artificial Intelligence',
      result: '3.2/4',
      status: 'Consider revising to improve your grade.',
      grade: 'B',
      progress: 70,
      color: '#FF3E3E',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Curved Background */}
        <CurvedBackground>
          <Header title={route.name}
            onBackPress={() => navigation.goBack()} />
          <CGPAProgress percentage={87.5} />
          <SemesterTabNavigation
            selectedSemester={selectedSemester}
            onSelectSemester={setSelectedSemester}
          />
        </CurvedBackground>

        {/* Result Cards */}
        <ResultCardsList courses={courses} />
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
    paddingBottom: scale(100), // Ensures space for BottomNavigation
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

export default ResultsScreen;
