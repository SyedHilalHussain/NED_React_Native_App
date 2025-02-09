// GpaDisplay.js (Main Component)
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import GPAHeader from '../Components/GPAHeader';
import AnalyticsView from '../Components/AnalyticsView';
import { CourseCard } from '../Components/CourseCard';
import { styles } from './styles';
const GpaDisplay = () => {
  const [currentView, setCurrentView] = useState('simple');
  const [selectedSemester, setSelectedSemester] = useState('All Semesters');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample course data with semester information
  const courses = [
    {
      name: "Data Structures",
      code: "CS201",
      gpa: "3.9",
      semester: "1st Semester",
      clos: [
        { title: "CLO1: Implement basic data structures", achieved: true },
        { title: "CLO2: Analyze algorithm complexity", achieved: true },
        { title: "CLO3: Design efficient algorithms", achieved: false }
      ],
      plos: [
        { title: "PLO1: Problem Solving", achieved: true },
        { title: "PLO2: Critical Thinking", achieved: true }
      ]
    },
    {
        name: "Data Structures",
        code: "CS201",
        gpa: "3.3",
        semester: "1st Semester",
        clos: [
          { title: "CLO1: Implement basic data structures", achieved: true },
          { title: "CLO2: Analyze algorithm complexity", achieved: true },
          { title: "CLO3: Design efficient algorithms", achieved: false }
        ],
        plos: [
          { title: "PLO1: Problem Solving", achieved: true },
          { title: "PLO2: Critical Thinking", achieved: true }
        ]
      },
      {
        name: "Data Structures",
        code: "CS201",
        gpa: "3.2",
        semester: "1st Semester",
        clos: [
          { title: "CLO1: Implement basic data structures", achieved: true },
          { title: "CLO2: Analyze algorithm complexity", achieved: true },
          { title: "CLO3: Design efficient algorithms", achieved: false }
        ],
        plos: [
          { title: "PLO1: Problem Solving", achieved: true },
          { title: "PLO2: Critical Thinking", achieved: true }
        ]
      },
      {
        name: "Data Structures",
        code: "CS201",
        gpa: "3.1",
        semester: "1st Semester",
        clos: [
          { title: "CLO1: Implement basic data structures", achieved: true },
          { title: "CLO2: Analyze algorithm complexity", achieved: true },
          { title: "CLO3: Design efficient algorithms", achieved: false }
        ],
        plos: [
          { title: "PLO1: Problem Solving", achieved: true },
          { title: "PLO2: Critical Thinking", achieved: true }
        ]
      },
      {
        name: "Data Structures",
        code: "CS201",
        gpa: "2.5",
        semester: "1st Semester",
        clos: [
          { title: "CLO1: Implement basic data structures", achieved: true },
          { title: "CLO2: Analyze algorithm complexity", achieved: true },
          { title: "CLO3: Design efficient algorithms", achieved: false }
        ],
        plos: [
          { title: "PLO1: Problem Solving", achieved: true },
          { title: "PLO2: Critical Thinking", achieved: true }
        ]
      },
    // Add more courses with semester information
  ];

  // Filter courses based on search query and selected semester
  const filteredCourses = courses.filter(course => {
    const matchesSemester = selectedSemester === 'All Semesters' || course.semester === selectedSemester;
    const matchesSearch = !searchQuery || 
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSemester && matchesSearch;
  });

  return (
    <View style={styles.GpaDisplaycontainer}>
      <GPAHeader 
        onViewChange={setCurrentView}
        currentView={currentView}
        selectedSemester={selectedSemester}
        onSemesterChange={setSelectedSemester}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      {currentView === 'analytics' ? (
        <AnalyticsView 
          courses={filteredCourses} 
          selectedSemester={selectedSemester}
        />
      ) : (
        <ScrollView style={styles.GpaDisplaycoursesContainer}>
          <View style={styles.GpaDisplaycoursesviewContainer}>
          {filteredCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};


export default GpaDisplay;