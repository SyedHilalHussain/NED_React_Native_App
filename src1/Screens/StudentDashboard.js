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
import { styles } from './styles';




const GPACard = ({ currentGPA, lastSemesterGPA }) => (
  <View style={[styles.StudentDashboardcard, styles.StudentDashboardgpaCard]}>
    <Text style={styles.StudentDashboardcardTitle}>GPA</Text>
    <Text style={styles.StudentDashboardgpaValue}>{currentGPA}</Text>
    <Text style={styles.StudentDashboardgpaSubtext}>Last Semester gpa</Text>
    <View style={styles.StudentDashboardcgpaContainer}>
      <Text style={styles.StudentDashboardcgpaText}>CGPA</Text>
      <Text style={styles.StudentDashboardcgpaValue}>{lastSemesterGPA}</Text>
      <View style={styles.StudentDashboardtrendIndicator}>
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
  
  
    const todaySchedule = [
      {
        time: "09:00",
        timeRange: "9:00 - 10:15",
        title: "Software Engineering",
        location: "Room 401",
        lecturer: "Dr. Smith",
        code: "SE001",  // Added for detail page
        resources: [     // Added for detail page
          { title: "Lecture Slides", type: "PDF" },
          { title: "Course Notes", type: "DOC" }
        ],
        assignments: [   // Added for detail page
          { title: "Project Proposal", dueDate: "Jan 29" },
          { title: "Code Review", dueDate: "Jan 25" }
        ],
        learningChecks: [ // Added for detail page
          "Q1. What are the key principles of software engineering?",
          "Q2. How do you implement SOLID principles?"
        ]
      },
      {
        time: "11:00",
        timeRange: "11:00 - 12:15",
        title: "Database Systems",
        location: "Lab 2",
        lecturer: "Prof. Johnson",
        code: "SE001",  // Added for detail page
        resources: [     // Added for detail page
          { title: "Lecture Slides", type: "PDF" },
          { title: "Course Notes", type: "DOC" }
        ],
        assignments: [   // Added for detail page
          { title: "Project Proposal", dueDate: "Jan 29" },
          { title: "Code Review", dueDate: "Jan 25" }
        ],
        learningChecks: [ // Added for detail page
          "Q1. What are the key principles of software engineering?",
          "Q2. How do you implement SOLID principles?"
        ]
      },
      {
        time: "09:00",
        timeRange: "9:00 - 10:15",
        title: "Software Engineering",
        location: "Room 401",
        lecturer: "Dr. Smith",
        code: "SE001",  // Added for detail page
        resources: [     // Added for detail page
          { title: "Lecture Slides", type: "PDF" },
          { title: "Course Notes", type: "DOC" }
        ],
        assignments: [   // Added for detail page
          { title: "Project Proposal", dueDate: "Jan 29" },
          { title: "Code Review", dueDate: "Jan 25" }
        ],
        learningChecks: [ // Added for detail page
          "Q1. What are the key principles of software engineering?",
          "Q2. How do you implement SOLID principles?"
        ]
      },
      {
        time: "11:00",
        timeRange: "11:00 - 12:15",
        title: "Database Systems",
        location: "Lab 2",
        lecturer: "Prof. Johnson",
        code: "SE001",  // Added for detail page
        resources: [     // Added for detail page
          { title: "Lecture Slides", type: "PDF" },
          { title: "Course Notes", type: "DOC" }
        ],
        assignments: [   // Added for detail page
          { title: "Project Proposal", dueDate: "Jan 29" },
          { title: "Code Review", dueDate: "Jan 25" }
        ],
        learningChecks: [ // Added for detail page
          "Q1. What are the key principles of software engineering?",
          "Q2. How do you implement SOLID principles?"
        ]
      },
      {
        time: "09:00",
        timeRange: "9:00 - 10:15",
        title: "Software Engineering",
        location: "Room 401",
        lecturer: "Dr. Smith",
        code: "SE001",  // Added for detail page
        resources: [     // Added for detail page
          { title: "Lecture Slides", type: "PDF" },
          { title: "Course Notes", type: "DOC" }
        ],
        assignments: [   // Added for detail page
          { title: "Project Proposal", dueDate: "Jan 29" },
          { title: "Code Review", dueDate: "Jan 25" }
        ],
        learningChecks: [ // Added for detail page
          "Q1. What are the key principles of software engineering?",
          "Q2. How do you implement SOLID principles?"
        ]
      },
      {
        time: "11:00",
        timeRange: "11:00 - 12:15",
        title: "Database Systems",
        location: "Lab 2",
        lecturer: "Prof. Johnson",
        code: "SE001",  // Added for detail page
        resources: [     // Added for detail page
          { title: "Lecture Slides", type: "PDF" },
          { title: "Course Notes", type: "DOC" }
        ],
        assignments: [   // Added for detail page
          { title: "Project Proposal", dueDate: "Jan 29" },
          { title: "Code Review", dueDate: "Jan 25" }
        ],
        learningChecks: [ // Added for detail page
          "Q1. What are the key principles of software engineering?",
          "Q2. How do you implement SOLID principles?"
        ]
      }
    ];
  
    return (
      <SafeAreaView style={styles.StudentDashboardcontainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Enhanced Header */}
          <Top userInfo={userInfo} navigation={navigation} />
          
          {/* Quick Actions */}
          <QuickActions />
          
          <View style={styles.StudentDashboardcontent}>
              {/* Events Section */}

              <View style={styles.StudentDashboardeventSection}>
              <View style={styles.StudentDashboardsectionHeader}>
                <Text style={styles.StudentDashboardsectionTitle}>Events</Text>
                <TouchableOpacity>
                  <Text style={styles.StudentDashboardseeMoreText}>See more</Text>
                </TouchableOpacity>
              </View>
              <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.StudentDashboardscrollContainer}
        contentContainerStyle={styles.StudentDashboardeventScrollContent}
      >
        {modernEvents.map((event, index) => (
          <ModernEventCard key={index} {...event} />
        ))}
      </ScrollView>
            </View>
            {/* Progress Section */}
            <View style={styles.StudentDashboardprogressSection}>
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
            <View style={styles.StudentDashboardanalyticsSection}>
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
            <CourseSchedule schedule={todaySchedule} navigation={navigation} />
  
            {/* Internship Section */}
            <View style={styles.StudentDashboardnewsSection}>
              <View style={styles.StudentDashboardsectionHeader}>
                <Text style={styles.StudentDashboardsectionTitle}>Internship Opportunities</Text>
                <TouchableOpacity>
                  <Text style={styles.StudentDashboardseeMoreText}>See all</Text>
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

  
export default StudentDashboard;