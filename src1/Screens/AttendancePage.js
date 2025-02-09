import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';
import { BlurView } from 'expo-blur';
import { LineChart } from 'react-native-chart-kit';
import Svg, { Path, Circle, Line, Text as SvgText } from 'react-native-svg';

import { Ionicons } from '@expo/vector-icons';
import CustomCalendar from '../Components/CustomCalendar';
import HeaderBackground from '../Components/HeaderBackground ';
import { styles } from './styles';
const { width, height } = Dimensions.get('window');
const DateStrip = ({ onCalendarPress }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
  
    const goToPreviousMonth = () => {
      const newDate = new Date(currentDate);
      newDate.setMonth(currentDate.getMonth() - 1);
      setCurrentDate(newDate);
    };
  
    const goToNextMonth = () => {
      const newDate = new Date(currentDate);
      newDate.setMonth(currentDate.getMonth() + 1);
      setCurrentDate(newDate);
    };
  
    // Format month and year
    const getMonthYearString = (date) => {
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      return `${months[date.getMonth()]} ${date.getFullYear()}`;
    };
  
    // Get day name
    const getDayName = (date) => {
      const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      return days[date.getDay()];
    };
  
    // Get dates for the current week
    const getDatesForWeek = () => {
      const dates = [];
      const today = new Date(currentDate);
      const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1));
      
      for (let i = 0; i < 7; i++) {
        const date = new Date(firstDayOfWeek);
        date.setDate(firstDayOfWeek.getDate() + i);
        dates.push(date);
      }
      return dates;
    };
  
    return (
      <BlurView intensity={40} tint="dark" style={styles.AttendancePagedatescontainer}>
        <View style={styles.AttendancePageheaderRow}>
          <View style={styles.AttendancePagecalendarRow}>
            <TouchableOpacity onPress={onCalendarPress}>
              <Ionicons name="calendar-outline" size={24} color="#fff" style={styles.AttendancePagecalendarIcon} />
            </TouchableOpacity>
            <Text style={styles.AttendancePagemonthYearText}>{getMonthYearString(currentDate)}</Text>
          </View>
          <View style={styles.AttendancePagenavigationButtons}>
            <TouchableOpacity onPress={goToPreviousMonth}>
              <Ionicons name="chevron-back" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={goToNextMonth}>
              <Ionicons name="chevron-forward" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.AttendancePagedaysContainer}
        >
          {getDatesForWeek().map((date, index) => {
            const isToday = date.toDateString() === new Date().toDateString();
            return (
              <TouchableOpacity
                key={index}
                style={styles.AttendancePagedayColumn}
              >
                <Text style={[styles.AttendancePagedayText, isToday && styles.AttendancePagetodayDayText]}>
                  {getDayName(date)}
                </Text>
                <View style={[styles.AttendancePagedateContainer, isToday && styles.AttendancePagetodayDateContainer]}>
                  <Text style={[styles.AttendancePagedateText, isToday && styles.AttendancePagetodayDateText]}>
                    {date.getDate()}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </BlurView>
    );
  };
const CourseAttendanceCard = ({ course }) => (
  <BlurView intensity={20} tint="dark" style={styles.AttendancePagecourseCard}>
    <View style={styles.AttendancePagecourseHeader}>
      <Text style={styles.AttendancePagecourseTitle}>{course.name}</Text>
      <View style={styles.AttendancePageattendanceTag}>
        <Text style={styles.AttendancePageattendancePercentage}>{course.attendance}%</Text>
      </View>
    </View>
    
    <View style={styles.AttendancePageattendanceDetails}>
      <Text style={styles.AttendancePageattendanceText}>
        Classes Attended: {course.attended}/{course.total}
      </Text>
      <View style={styles.AttendancePageprogressBar}>
        <View 
          style={[
            styles.AttendancePageprogressFill, 
            { 
              width: `${course.attendance}%`,
              backgroundColor: course.attendance >= 75 ? '#2EB086' : '#ff4444'
            }
          ]} 
        />
      </View>
    </View>
    
    <Text style={styles.AttendancePagelastUpdate}>
      Last attended: {course.lastAttended}
    </Text>
  </BlurView>
);

const AttendanceGraph = ({ data }) => {
  const GRAPH_WIDTH = width - 80;
  const GRAPH_HEIGHT = 200;
  const PADDING = 30;
  const graphWidth = GRAPH_WIDTH - (2 * PADDING);
  const graphHeight = GRAPH_HEIGHT - (2 * PADDING);

  const getY = (value) => {
    const minValue = Math.min(...data.values);
    const maxValue = Math.max(...data.values);
    const scale = graphHeight / (maxValue - minValue);
    return graphHeight - ((value - minValue) * scale) + PADDING;
  };

  const getPath = () => {
    const points = data.values.map((value, index) => {
      const x = (index * (graphWidth / (data.values.length - 1))) + PADDING;
      const y = getY(value);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    });
    return points.join(' ');
  };

  return (
    <BlurView intensity={20} tint="dark" style={styles.AttendancePagegraphCard}>
      <View style={styles.AttendancePagegraphHeader}>
        <View style={styles.AttendancePagegraphTitleContainer}>
          <View style={styles.AttendancePagegraphIcon}>
            <Ionicons name="time-outline" size={20} color="#2EB086" />
          </View>
          <Text style={styles.AttendancePagegraphTitle}>Attendance Trend</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      
      <Svg width={GRAPH_WIDTH} height={GRAPH_HEIGHT}>
        {/* Grid Lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <Line
            key={`grid-${i}`}
            x1={PADDING}
            y1={PADDING + (i * (graphHeight / 4))}
            x2={GRAPH_WIDTH - PADDING}
            y2={PADDING + (i * (graphHeight / 4))}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        ))}
        
        {/* Trend Line */}
        <Path
          d={getPath()}
          stroke="#2EB086"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Data Points */}
        {data.values.map((value, index) => {
          const x = (index * (graphWidth / (data.values.length - 1))) + PADDING;
          const y = getY(value);
          return (
            <Circle
              key={index}
              cx={x}
              cy={y}
              r={4}
              fill="#2EB086"
            />
          );
        })}
        
        {/* X-Axis Labels */}
        {data.labels.map((label, index) => {
          const x = (index * (graphWidth / (data.labels.length - 1))) + PADDING;
          return (
            <SvgText
              key={index}
              x={x}
              y={GRAPH_HEIGHT - 10}
              fill="#fff"
              opacity={0.5}
              fontSize="12"
              textAnchor="middle"
            >
              {label}
            </SvgText>
          );
        })}
      </Svg>
    </BlurView>
  );
};

const SubjectProgressBar = ({ subject, percentage }) => (
  <BlurView intensity={20} tint="dark" style={styles.AttendancePageprogressCard}>
    <Text style={styles.AttendancePagesubjectName}>{subject}</Text>
    <View style={styles.AttendancePageprogressWrapper}>
      <View style={styles.AttendancePageprogressBackground}>
        <View 
          style={[
            styles.AttendancePageprogressFill,
            { width: `${percentage}%` }
          ]} 
        />
      </View>
      <Text style={styles.AttendancePageprogressText}>{percentage}%</Text>
    </View>
  </BlurView>
);


const AttendancePage = () => {
  const [activeTab, setActiveTab] = useState('classes');
  
    const [showDateStrip, setShowDateStrip] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const dateStripHeight = useRef(new Animated.Value(0)).current;
  const toggleDateStrip = () => {
      const toValue = showDateStrip ? 0 : 100; // Adjust height as needed
      setShowDateStrip(!showDateStrip);
      Animated.spring(dateStripHeight, {
        toValue,
        useNativeDriver: false,
        friction: 8,
        tension: 50,
      }).start();
    };
  const courses = [
    {
      name: "Mathematics",
      attendance: 85,
      attended: 17,
      total: 20,
      lastAttended: "Today, 10:30 AM"
    },
    {
      name: "Physics",
      attendance: 78,
      attended: 14,
      total: 18,
      lastAttended: "Yesterday, 2:00 PM"
    },
    {
      name: "Computer Science",
      attendance: 92,
      attended: 22,
      total: 24,
      lastAttended: "Today, 9:00 AM"
    },
    {
      name: "Chemistry",
      attendance: 72,
      attended: 13,
      total: 18,
      lastAttended: "2 days ago"
    }
  ];
  const trendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    values: [55, 40, 80, 30, 70, 48, 65]
  };
  return (
    <View style={styles.AttendancePageattendancecontainer}>
         <ScrollView 
        style={styles.AttendancePagecontentContainer}
        contentContainerStyle={styles.AttendancePagecontentWrapper}
      >
      <HeaderBackground />
      
      <View style={styles.AttendancePagetopContainer}>
        <BlurView intensity={20} tint="dark" style={styles.AttendancePagetoggleContainer}>
          <TouchableOpacity 
            style={[styles.AttendancePagetoggleButton, activeTab === 'classes' && styles.AttendancePageactiveToggle]}
            onPress={() => setActiveTab('classes')}
          >
            <Text style={[styles.AttendancePagetoggleText, activeTab === 'classes' && styles.AttendancePageactiveToggleText]}>
              CLASSES
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.AttendancePagetoggleButton, activeTab === 'analytics' && styles.AttendancePageactiveToggle]}
            onPress={() => setActiveTab('analytics')}
          >
            <Text style={[styles.AttendancePagetoggleText, activeTab === 'analytics' && styles.AttendancePageactiveToggleText]}>
              ANALYTICS
            </Text>
          </TouchableOpacity>
        </BlurView>
        
                <TouchableOpacity 
                  style={styles.AttendancePagecalendarToggle}
                  onPress={toggleDateStrip}
                >
                  <View style={styles.AttendancePagetoggleLine} />
                </TouchableOpacity>
             
        
              <Animated.View style={[styles.AttendancePagedateStripWrapper]}>
                {showDateStrip && (
                  <DateStrip onCalendarPress={() => setShowCalendar(true)} />
                )}
              </Animated.View>
      </View>

   
      {activeTab === 'classes' ? (
          <View style={styles.AttendancePagecoursesContainer}>
            {courses.map((course, index) => (
              <CourseAttendanceCard key={index} course={course} />
            ))}
          </View>
        ) : (
          <View style={styles.AttendancePageanalyticsContainer}>
            <AttendanceGraph data={trendData} />
            <View style={styles.AttendancePageprogressBarsContainer}>
              {courses.map((course, index) => (
                <SubjectProgressBar
                  key={index}
                  subject={course.name}
                  percentage={course.attendance}
                />
              ))}
            </View>
          </View>
        )}
      </ScrollView>
      {showCalendar && (
        <CustomCalendar
          onClose={() => setShowCalendar(false)}
          onSelectDate={(date) => {
            setShowCalendar(false);
            // Handle date selection
          }}
        />
      )}
    </View>
  );
};



export default AttendancePage;