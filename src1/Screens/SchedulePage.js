// SchedulePage.js
import React, { useState, useRef } from "react";
import { View, ScrollView, TouchableOpacity, StyleSheet, Animated, Text } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { useDateContext } from "../Components/DateContext";
import HeaderBackground from "../Components/HeaderBackground ";
import DateStrip from "../Components/DateStrip";
import CustomCalendar from "../Components/CustomCalendar";
import { CourseSchedule } from "../Components/CourseSchedule";
import { styles } from "./styles";
const SchedulePage = ({navigation}) => {
  const { selectedDate } = useDateContext();
  const [activeTab, setActiveTab] = useState("today");
  const [showDateStrip, setShowDateStrip] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const dateStripHeight = useRef(new Animated.Value(0)).current;

  const toggleDateStrip = () => {
    const toValue = showDateStrip ? 0 : 100;
    setShowDateStrip(!showDateStrip);
    Animated.spring(dateStripHeight, {
      toValue,
      useNativeDriver: false,
      friction: 8,
      tension: 50,
    }).start();
  };

  const getScheduleForDate = (date) => {
    // Replace with your actual data fetching logic
    const scheduleData = {
        [new Date('2025-02-09').toDateString()]: [
          {
            time: "09:00",
            timeRange: "9:00 - 10:15",
            title: "Software Engineering",
            location: "Room 401",
            lecturer: "Dr. Smith",
            date: "December, 12th Tuesday",  // Azib ye uper se date function se reder karadena phir k kiss date ki class hai abhi hardcoded kar raha ho me  
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
            date: "December, 12th Tuesday",  // Azib ye uper se date function se reder karadena phir k kiss date ki class hai abhi hardcoded kar raha ho me  
          
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
        ],
        [new Date('2025-01-23').toDateString()]: [
          {
            time: "10:00",
            timeRange: "10:00 - 11:15",
            title: "Web Development",
            location: "Room 302",
            lecturer: "Dr. Williams",
            date: "December, 12th Tuesday",  // Azib ye uper se date function se reder karadena phir k kiss date ki class hai abhi hardcoded kar raha ho me  
          
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
            time: "14:00",
            timeRange: "14:00 - 15:15",
            title: "Mobile App Design",
            location: "Lab 5",
            lecturer: "Prof. Davis",
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
        ],
        [new Date('2025-01-24').toDateString()]: [
          {
            time: "09:30",
            timeRange: "9:30 - 10:45",
            title: "Machine Learning",
            location: "Room 405",
            lecturer: "Dr. Chen",
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
        ]
      };

    return scheduleData[date.toDateString()] || [];
  };

  const schedule = getScheduleForDate(selectedDate);

  return (
    <View style={styles.SchedulePagecontainer}>
      <HeaderBackground />
      <View style={styles.SchedulePagetopContainer}>
        <BlurView intensity={20} tint="dark" style={styles.SchedulePagetoggleContainer}>
          <TouchableOpacity
            style={[styles.SchedulePagetoggleButton, activeTab === "today" && styles.SchedulePageactiveToggle]}
            onPress={() => setActiveTab("today")}
          >
            <Text style={[styles.SchedulePagetoggleText, activeTab === "today" && styles.SchedulePageactiveToggleText]}>
              TODAY
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.SchedulePagetoggleButton, activeTab === "upcoming" && styles.SchedulePageactiveToggle]}
            onPress={() => setActiveTab("upcoming")}
          >
            <Text style={[styles.SchedulePagetoggleText, activeTab === "upcoming" && styles.SchedulePageactiveToggleText]}>
              UPCOMING
            </Text>
          </TouchableOpacity>
        </BlurView>
        <TouchableOpacity style={styles.SchedulePagecalendarToggle} onPress={toggleDateStrip}>
          <View style={styles.SchedulePagetoggleLine} />
        </TouchableOpacity>
      </View>

      <Animated.View style={[styles.SchedulePagedateStripWrapper]}>
        {showDateStrip && <DateStrip onCalendarPress={() => setShowCalendar(true)} />}
      </Animated.View>

      <ScrollView style={styles.SchedulePagescheduleContainer} contentContainerStyle={styles.SchedulePagescheduleContent}>
        <CourseSchedule schedule={schedule} navigation={navigation} />
      </ScrollView>

      {showCalendar && (
        <CustomCalendar
          onClose={() => setShowCalendar(false)}
          onSelectDate={(date) => {
            setShowCalendar(false);
          }}
        />
      )}
    </View>
  );
};



export default SchedulePage;