// StudentDashboard/index.js
import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { MaterialIcons, FontAwesome5, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { LineChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';
import {Top} from '../Components/Top';
import { ProgressCard } from '../Components/ProgressCard';
import { AnalyticsCard } from '../Components/AnalyticsCard';
import { DeadlinesSection } from '../Components/DeadlinesSection';
import { CourseSchedule } from '../Components/CourseSchedule';
import { InternshipCard } from '../Components/InternshipCard';
import { QuickActions } from '../Components/QuickActions';
import { ModernEventCard } from '../Components/ModernEventCard';
import { useNavigation } from '@react-navigation/native';
// Components

// Enhanced Header Component


// Enhanced Progress Card


// Enhanced Analytics Card


// New Component: Upcoming Deadlines


// New Component: Course Schedule





const GPACard = ({ currentGPA, lastSemesterGPA }) => (
  <View style={[styles.card, styles.gpaCard]}>
    <Text style={styles.cardTitle}>GPA</Text>
    <Text style={styles.gpaValue}>{currentGPA}</Text>
    <Text style={styles.gpaSubtext}>Last Semester gpa</Text>
    <View style={styles.cgpaContainer}>
      <Text style={styles.cgpaText}>CGPA</Text>
      <Text style={styles.cgpaValue}>{lastSemesterGPA}</Text>
      <View style={styles.trendIndicator}>
        <Ionicons name="arrow-up" size={16} color="#2eb086" />
      </View>
    </View>
  </View>
);



  
 
  
  // Add inside your StudentDashboard component, after the existing events section:
  const internships = [
    {
      company: "Microsoft",
      position: "Software Engineering Intern",
      deadline: "Aug 30, 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png",
    },
    {
      company: "IBM",
      position: "Cloud Developer Intern",
      deadline: "Sep 15, 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png",
    },
    {
      company: "Google",
      position: "Data Scientist Intern",
      deadline: "Oct 1, 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png",
    },
    {
      company: "Amazon",
      position: "Machine Learning Intern",
      deadline: "Oct 10, 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png",
    },
  ];
  
  
  
  
  
  const modernEvents = [
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      title: "Tech Innovation Summit 2024",
      date: "Aug 20",
      time: "10:00 AM",
      category: "Conference"
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      title: "AI Workshop Series",
      date: "Aug 22",
      time: "2:00 PM",
      category: "Workshop"
    }
  ];
  

  const StudentDashboard = () => {
    const navigation = useNavigation()
    const userInfo = {
      profileImage: require('../Assets/logo.jpg'),
      name: 'Mr.Fugazi',
      semester: '7th Semester',
      program: 'Software Engineering',
      batch: '2021',
    };
  
    const cgpaData = [3.2, 3.4, 3.1, 3.5, 3.3, 3.5];
    const cgpaLabels = ['1 sem', '2 sem', '3 sem', '4 sem', '5 sem', '6 sem'];
    
    const attendanceData = [60, 40, 80, 30, 70, 50, 65];
    const attendanceLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  
    // New data for deadlines
    const deadlines = [
      {
        title: "Submit Research Paper",
        date: "Mar 15",
        time: "11:59 PM",
        subject: "Computer Science",
        type: "assignment",
        priority: "high",
        progress: 75,
        daysLeft: 2,
        isPastDue: false
      },
      {
        title: "Submit Research Paper",
        date: "Mar 15",
        time: "11:59 PM",
        subject: "Computer Science",
        type: "assignment",
        priority: "high",
        progress: 75,
        daysLeft: 2,
        isPastDue: false
      },
      {
        title: "Submit Research Paper",
        date: "Mar 15",
        time: "11:59 PM",
        subject: "Computer Science",
        type: "assignment",
        priority: "high",
        progress: 75,
        daysLeft: 2,
        isPastDue: false
      },
    ];
  
    // New data for course schedule
    const todaySchedule = [
      {
        time: '09:00 AM',
        title: 'Software Engineering',
        location: 'Room 401',
        lecturer: 'Dr. Smith'
      },
      {
        time: '11:00 AM',
        title: 'Database Systems',
        location: 'Lab 2',
        lecturer: 'Prof. Johnson'
      },
      {
        time: '02:00 PM',
        title: 'Artificial Intelligence',
        location: 'Room 405',
        lecturer: 'Dr. Williams'
      }
    ];
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Enhanced Header */}
          <Top userInfo={userInfo} navigation={navigation} />
          
          {/* Quick Actions */}
          <QuickActions />
          
          <View style={styles.content}>
              {/* Events Section */}

              <View style={styles.eventSection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Events</Text>
                <TouchableOpacity>
                  <Text style={styles.seeMoreText}>See more</Text>
                </TouchableOpacity>
              </View>
              <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
        contentContainerStyle={styles.eventScrollContent}
      >
        {modernEvents.map((event, index) => (
          <ModernEventCard key={index} {...event} />
        ))}
      </ScrollView>
            </View>
            {/* Progress Section */}
            <View style={styles.progressSection}>
              <ProgressCard
                title="Attendance"
                value={75}
                total={100}
                type="attendance"
                icon={<Ionicons name="calendar" size={24} color="#2eb086" />}
              />
              
              <ProgressCard
                title="Completed Courses"
                value={51}
                total={56}
                type="course"
                icon={<Ionicons name="school" size={24} color="#2eb086" />}
              />
            </View>
  
            {/* Analytics Section */}
            <View style={styles.analyticsSection}>
              <AnalyticsCard
                title="CGPA Progress"
                data={cgpaData}
                labels={cgpaLabels}
                icon={<Ionicons name="stats-chart" size={24} color="#2eb086" />}
              />
              
              <AnalyticsCard
                title="Attendance Trend"
                data={attendanceData}
                labels={attendanceLabels}
                icon={<Ionicons name="time" size={24} color="#2eb086" />}
              />
            </View>
  
            {/* New Deadlines Section */}
            <DeadlinesSection deadlines={deadlines} />
  
            {/* New Course Schedule Section */}
            <CourseSchedule schedule={todaySchedule} />
  
            {/* Internship Section */}
            <View style={styles.newsSection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Internship Opportunities</Text>
                <TouchableOpacity>
                  <Text style={styles.seeMoreText}>See all</Text>
                </TouchableOpacity>
              </View>
              {internships.map((internship, index) => (
                <InternshipCard key={index} {...internship} />
              ))}
            </View>
  
          
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    daysContainer: {
      flexDirection: 'row',
      paddingHorizontal: 16,
    },
    container: {
      flex: 1,
      backgroundColor: '#121212',
    },
    content: {
      padding: 16,
    },
    progressSection: {
      marginTop: -30, // Overlap with header for modern look
    },
    analyticsSection: {
      marginTop: 20,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
      
    },
    sectionTitle: {
      color: '#ffffff',
      fontSize: 20,
      fontWeight: 'bold',
    },
  
   
   
    eventSection: {
      marginBottom: 30,
      height: 280, // Adjust this value based on your card height
    },
    
    scrollContainer: {
      flexGrow: 0,
    },
    
    eventScrollContent: {
      paddingHorizontal: 16,
      gap: 16, // Space between cards
      flexDirection: 'row',
    },
   
  
  
   
    

  
   
    seeMoreText: {
      color: '#2eb086',
      fontSize: 14,
    },
  
 
   
    
   
 
 
  
  

  
  });
export default StudentDashboard;