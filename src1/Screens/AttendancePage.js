import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';
import { BlurView } from 'expo-blur';
import { LineChart } from 'react-native-chart-kit';
import Svg, { Path, Circle, Line, Text as SvgText } from 'react-native-svg';

import { Ionicons } from '@expo/vector-icons';
import CustomCalendar from '../Components/CustomCalendar';
import HeaderBackground from '../Components/HeaderBackground ';

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
      <BlurView intensity={40} tint="dark" style={styles.datescontainer}>
        <View style={styles.headerRow}>
          <View style={styles.calendarRow}>
            <TouchableOpacity onPress={onCalendarPress}>
              <Ionicons name="calendar-outline" size={24} color="#fff" style={styles.calendarIcon} />
            </TouchableOpacity>
            <Text style={styles.monthYearText}>{getMonthYearString(currentDate)}</Text>
          </View>
          <View style={styles.navigationButtons}>
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
          contentContainerStyle={styles.daysContainer}
        >
          {getDatesForWeek().map((date, index) => {
            const isToday = date.toDateString() === new Date().toDateString();
            return (
              <TouchableOpacity
                key={index}
                style={styles.dayColumn}
              >
                <Text style={[styles.dayText, isToday && styles.todayDayText]}>
                  {getDayName(date)}
                </Text>
                <View style={[styles.dateContainer, isToday && styles.todayDateContainer]}>
                  <Text style={[styles.dateText, isToday && styles.todayDateText]}>
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
  <BlurView intensity={20} tint="dark" style={styles.courseCard}>
    <View style={styles.courseHeader}>
      <Text style={styles.courseTitle}>{course.name}</Text>
      <View style={styles.attendanceTag}>
        <Text style={styles.attendancePercentage}>{course.attendance}%</Text>
      </View>
    </View>
    
    <View style={styles.attendanceDetails}>
      <Text style={styles.attendanceText}>
        Classes Attended: {course.attended}/{course.total}
      </Text>
      <View style={styles.progressBar}>
        <View 
          style={[
            styles.progressFill, 
            { 
              width: `${course.attendance}%`,
              backgroundColor: course.attendance >= 75 ? '#2EB086' : '#ff4444'
            }
          ]} 
        />
      </View>
    </View>
    
    <Text style={styles.lastUpdate}>
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
    <BlurView intensity={20} tint="dark" style={styles.graphCard}>
      <View style={styles.graphHeader}>
        <View style={styles.graphTitleContainer}>
          <View style={styles.graphIcon}>
            <Ionicons name="time-outline" size={20} color="#2EB086" />
          </View>
          <Text style={styles.graphTitle}>Attendance Trend</Text>
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
  <BlurView intensity={20} tint="dark" style={styles.progressCard}>
    <Text style={styles.subjectName}>{subject}</Text>
    <View style={styles.progressWrapper}>
      <View style={styles.progressBackground}>
        <View 
          style={[
            styles.progressFill,
            { width: `${percentage}%` }
          ]} 
        />
      </View>
      <Text style={styles.progressText}>{percentage}%</Text>
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
    <View style={styles.attendancecontainer}>
         <ScrollView 
        style={styles.contentContainer}
        contentContainerStyle={styles.contentWrapper}
      >
      <HeaderBackground />
      
      <View style={styles.topContainer}>
        <BlurView intensity={20} tint="dark" style={styles.toggleContainer}>
          <TouchableOpacity 
            style={[styles.toggleButton, activeTab === 'classes' && styles.activeToggle]}
            onPress={() => setActiveTab('classes')}
          >
            <Text style={[styles.toggleText, activeTab === 'classes' && styles.activeToggleText]}>
              CLASSES
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.toggleButton, activeTab === 'analytics' && styles.activeToggle]}
            onPress={() => setActiveTab('analytics')}
          >
            <Text style={[styles.toggleText, activeTab === 'analytics' && styles.activeToggleText]}>
              ANALYTICS
            </Text>
          </TouchableOpacity>
        </BlurView>
        
                <TouchableOpacity 
                  style={styles.calendarToggle}
                  onPress={toggleDateStrip}
                >
                  <View style={styles.toggleLine} />
                </TouchableOpacity>
             
        
              <Animated.View style={[styles.dateStripWrapper]}>
                {showDateStrip && (
                  <DateStrip onCalendarPress={() => setShowCalendar(true)} />
                )}
              </Animated.View>
      </View>

   
      {activeTab === 'classes' ? (
          <View style={styles.coursesContainer}>
            {courses.map((course, index) => (
              <CourseAttendanceCard key={index} course={course} />
            ))}
          </View>
        ) : (
          <View style={styles.analyticsContainer}>
            <AttendanceGraph data={trendData} />
            <View style={styles.progressBarsContainer}>
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

const styles = StyleSheet.create({
  attendancecontainer: {
    flex: 1,
    backgroundColor: '#0f172a',
    
  },
  topContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeToggle: {
    backgroundColor: '#2EB086',
  },
  toggleText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    opacity: 0.7,
  },
  activeToggleText: {
    opacity: 1,
  },
  
  
  coursesContainer: {
    gap: 15,
    paddingTop:300,
    marginHorizontal:20,
    marginVertical: '10%',
    
    
  },
  courseCard: {
    padding: 15,
    borderRadius: 15,
    overflow: 'hidden',
   
    borderWidth: 1,
    borderColor: 'rgba(46, 176, 134, 0.1)',
    
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  courseTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  attendanceTag: {
    backgroundColor: 'rgba(46, 176, 134, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  attendancePercentage: {
    color: '#2EB086',
    fontSize: 14,
    fontWeight: '600',
  },
  attendanceDetails: {
    marginBottom: 10,
  },
  attendanceText: {
    color: '#fff',
    opacity: 0.8,
    marginBottom: 8,
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 3,
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  lastUpdate: {
    color: '#fff',
    opacity: 0.6,
    fontSize: 12,
  },
  analyticsContainer: {
    gap: 20,
  },
  chartContainer: {
    marginBottom: 20,
  },
  chart: {
    borderRadius: 16,
  },
  subjectProgress: {
    gap: 15,
  },
  progressItem: {
    marginBottom: 15,
  },
  progressItemText: {
    color: '#fff',
    marginBottom: 8,
  },
  progressBarContainer: {
    height: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12.5,
    overflow: 'hidden',
    position: 'relative',
  },
  progressBarAnalytics: {
    height: '100%',
    backgroundColor: '#2EB086',
    borderRadius: 12.5,
  },
  progressPercentage: {
    position: 'absolute',
    right: 10,
    color: '#fff',
    fontSize: 12,
    lineHeight: 25,
  },

  calendarToggle: {
    alignItems: "center",
    paddingVertical: 15,
    marginTop: 10,
  },
  toggleLine: {
    width: 60,
    height: 4,
    backgroundColor: "rgba(250, 249, 249, 0.59)",
    borderRadius: 2,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 15,
  },
  calendarRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  calendarIcon: {
    marginRight: 8,
  },
  monthYearText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  navigationButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  daysContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  dayColumn: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    minWidth: 60,
  },
  dayText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
    opacity: 0.7,
  },
  todayDayText: {
    opacity: 1,
  },
  dateContainer: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  todayDateContainer: {
    // backgroundColor: '#007AFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#007AFF",
  },
  dateText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  todayDateText: {
    color: "#fff",
  },
  // Calendar specific styles
  calendarOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  calendarModal: {
    width: width - 40,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "rgba(30, 41, 59, 0.7)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  calendarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  monthYearText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  weekDaysRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  weekDayText: {
    color: "#94a3b8",
    fontSize: 12,
    fontWeight: "600",
    width: (width - 80) / 7,
    textAlign: "center",
  },
  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  dayButton: {
    width: (width - 80) / 7,
    height: (width - 80) / 7,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedDay: {
    backgroundColor: "#007AFF",
    borderRadius: (width - 80) / 14,
  },
  dayText: {
    color: "#fff",
    fontSize: 16,
  },
  selectedDayText: {
    color: "#fff",
    fontWeight: "600",
  },
  emptyDay: {
    color: "transparent",
  },
  datescontainer: {
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(46, 176, 134, 0.1)",
    // backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  graphCard: {
    borderRadius: 20,
    padding: 20,
    marginTop:'90%',
    marginHorizontal:20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(46, 176, 134, 0.1)',
    backgroundColor: 'rgba(15, 23, 42, 0.7)',
  },
  graphHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  graphTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  graphIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(46, 176, 134, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  graphTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  progressCard: {
    borderRadius: 15,
    padding: 15,
    marginHorizontal:20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(46, 176, 134, 0.1)',
    backgroundColor: 'rgba(15, 23, 42, 0.7)',
  },
  progressWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  progressBackground: {
    flex: 1,
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2EB086',
    borderRadius: 4,
  },
  subjectName: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  progressText: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.8,
    width: 45,
    textAlign: 'right',
  },
  progressBarsContainer: {
    gap: 10,}
});

export default AttendancePage;