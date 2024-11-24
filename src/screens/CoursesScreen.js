import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Header from '../components/Header';
import CurvedBackground from '../components/CurvedBackground';
import SearchBar from '../components/SearchBar';
import SemesterTabs from '../components/SemesterTabs';
import CourseCard from '../components/CourseCard';
import FlexibleCard from '../components/FlexibleCard';
import NavComponent from '../components/NavComponent';

import { useNavigation } from '@react-navigation/native';



const { width } = Dimensions.get('window'); // Get screen width for scaling
const scale = (size) => (width / 375) * size;
export default function CoursesScreen({route }) {
  const navigation = useNavigation();

  const handleScreenChange = (screenName) => {
    navigation.navigate(screenName);
  };
 
  const [selectedSemester, setSelectedSemester] = useState('7 Semester');
  const [searchQuery, setSearchQuery] = useState('');

  const semesters = ['7 Semester', '6 Semester', '5 Semester'];

  const courses = [
    {
      id: 1,
      code: 'Clo',
      name: 'Database Management System',
      credits: '3+1 Credit Hours',
      color: '#FF9800',
      clos: [
        {
          name: 'CLO1',
          midMarks: 'Mid Marks',
          marks: '15',
          percentage: '75',
          status: true
        },
        {
          name: 'CLO1',
          midMarks: 'Mid Marks',
          marks: '15',
          percentage: '75',
          status: false
        }
      ]
    },
    {
      id: 2,
      code: 'Clo',
      name: 'Database Management System',
      credits: '3+1 Credit Hours',
      color: '#4CAF50',
      clos: [
        {
          name: 'CLO1',
          midMarks: 'Mid Marks',
          marks: '15',
          percentage: '75',
          status: true
        },
        {
          name: 'CLO1',
          midMarks: 'Mid Marks',
          marks: '15',
          percentage: '75',
          status: false
        }
      ]
    },
    {
      id: 3,
      code: 'Plo',
      name: 'Database Management System',
      credits: '3+1 Credit Hours',
      color: '#FFC107',
      clos: [
        {
          name: 'CLO1',
          midMarks: 'Mid Marks',
          marks: '15',
          percentage: '75',
          status: true
        },
        {
          name: 'CLO1',
          midMarks: 'Mid Marks',
          marks: '15',
          percentage: '75',
          status: false
        }
      ]
    },
    {
      id: 4,
      code: 'Clo',
      name: 'Database Management System',
      credits: '3+1 Credit Hours',
      color: '#00BCD4',
      clos: [
        {
          name: 'CLO1',
          midMarks: 'Mid Marks',
          marks: '15',
          percentage: '75',
          status: true
        },
        {
          name: 'CLO1',
          midMarks: 'Mid Marks',
          marks: '15',
          percentage: '75',
          status: false
        }
      ]
    },
    {
      id: 5,
      code: 'Clo',
      name: 'Database Management System',
      credits: '3+1 Credit Hours',
      color: '#00BCD4',
      clos: [
        {
          name: 'CLO1',
          midMarks: 'Mid Marks',
          marks: '15',
          percentage: '75',
          status: true
        },
        {
          name: 'CLO1',
          midMarks: 'Mid Marks',
          marks: '15',
          percentage: '75',
          status: false
        }
      ]
    },
    {
      id: 6,
      code: 'Clo',
      name: 'Database Management System',
      credits: '3+1 Credit Hours',
      color: '#00BCD4',
      clos: [
        {
          name: 'CLO1',
          midMarks: 'Mid Marks',
          marks: '15',
          percentage: '75',
          status: true
        },
        {
          name: 'CLO1',
          midMarks: 'Mid Marks',
          marks: '15',
          percentage: '75',
          status: false
        }
      ]
    },
    {
      id: 7,
      code: 'Clo',
      name: 'SRE',
      credits: '3+1 Credit Hours',
      color: '#00BCD4',
      clos: [
        {
          name: 'CLO1',
          midMarks: 'Mid Marks',
          marks: '15',
          percentage: '75',
          status: true
        },
        {
          name: 'CLO1',
          midMarks: 'Mid Marks',
          marks: '15',
          percentage: '75',
          status: false
        }
      ]
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Curved Background with Header Components */}
        <CurvedBackground>
          <Header 
            title={route.name}
            onBackPress={() => navigation.goBack()}
          />
          
          <SearchBar 
            placeholder="Search?" 
            onSearch={setSearchQuery}
            value={searchQuery}
          />
          
          <SemesterTabs
            semesters={semesters}
            selectedSemester={selectedSemester}
            onSelect={setSelectedSemester}
          />
        </CurvedBackground>

        {/* Courses List Section */}
        <View style={styles.coursesSection}>
          {filteredCourses.map((course) => (
            <FlexibleCard 
              key={course.id} 
              variant='course'
              data={course}
            />
          ))}
        </View>

       
       
     
      </ScrollView>
      <NavComponent
          activeScreen={route.name}
          onScreenChange={handleScreenChange}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FF',
  },
  scrollContent: {
    flexGrow: 1,
  },
  coursesSection: {
    backgroundColor: '#F5F9FF',
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },


});