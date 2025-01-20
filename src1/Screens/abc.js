// StudentDashboard/index.js
import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { LineChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';

// Components
const Header = ({ userInfo }) => (
  <View style={styles.header}>
    <View style={styles.profileSection}>
      <Image
        source={userInfo.profileImage}
        style={styles.profileImage}
      />
      <View style={styles.headerText}>
        <Text style={styles.welcomeText}>Welcome To</Text>
        <Text style={styles.campusText}>Asan Campus</Text>
        <View style={styles.programInfo}>
          <Text style={styles.semester}>{userInfo.semester}</Text>
          <Text style={styles.program}>UG Program</Text>
          <Text style={styles.major}>Software Engineering</Text>
          <Text style={styles.batch}>Batch-2021</Text>
        </View>
      </View>
    </View>
  </View>
);
const QuickActions = () => (
    <View style={styles.quickActions}>
      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="calendar" size={24} color="#2eb086" />
        <Text style={styles.actionText}>Schedule</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="library" size={24} color="#2eb086" />
        <Text style={styles.actionText}>Courses</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <MaterialIcons name="assignment" size={24} color="#2eb086" />
        <Text style={styles.actionText}>Tasks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <FontAwesome5 name="book-reader" size={24} color="#2eb086" />
        <Text style={styles.actionText}>Library</Text>
      </TouchableOpacity>
    </View>
  );
const ProgressCard = ({ title, value, total, type }) => {
  const percentage = (value / total) * 100;
  
  return (
    <View style={[styles.card, styles.progressCard]}>
      <Text style={styles.cardTitle}>{title}</Text>
      {type === 'attendance' ? (
        <View style={styles.attendanceContainer}>
          <View style={styles.attendanceCircle}>
            <Text style={styles.attendanceValue}>{percentage}%</Text>
          </View>
          <Text style={styles.attendanceLabel}>Present</Text>
        </View>
      ) : (
        <View style={styles.courseProgressContainer}>
          <View style={styles.progressBarContainer}>
            <LinearGradient
              colors={['#2eb086', '#1a6e52']}
              style={[styles.progressBar, { width: `${percentage}%` }]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          </View>
          <Text style={styles.progressText}>{value}/{total}</Text>
        </View>
      )}
    </View>
  );
};

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

const AnalyticsChart = ({ title, data, labels }) => (
  <View style={styles.chartCard}>
    <Text style={styles.chartTitle}>{title}</Text>
    <LineChart
      data={{
        labels: labels,
        datasets: [{ data: data }],
      }}
      width={350}
      height={200}
      chartConfig={{
        backgroundColor: '#1e1e1e',
        backgroundGradientFrom: '#1e1e1e',
        backgroundGradientTo: '#1e1e1e',
        decimalPlaces: title === 'CGPA' ? 1 : 0,
        color: (opacity = 1) => `rgba(46, 176, 134, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: '6',
          strokeWidth: '2',
          stroke: '#2eb086',
        },
      }}
      bezier
      style={styles.chart}
    />
  </View>
);

const NewsEvent = ({ date, title, type, isNew }) => (
  <View style={styles.eventCard}>
    <View style={styles.dateContainer}>
      <Text style={styles.dateText}>{date}</Text>
    </View>
    <View style={styles.eventContent}>
      <View style={styles.eventHeader}>
        {isNew && <View style={styles.newBadge}><Text style={styles.newBadgeText}>New</Text></View>}
        <Text style={styles.eventTitle}>{title}</Text>
      </View>
      <Text style={styles.eventType}>{type}</Text>
    </View>
  </View>
);
const InternshipCard = ({ company, position, deadline, logo }) => (
    <TouchableOpacity style={styles.internshipCard}>
      <Image
        source={{ uri: logo }}
        style={styles.companyLogo}
      />
      <View style={styles.internshipInfo}>
        <Text style={styles.companyName}>{company}</Text>
        <Text style={styles.positionTitle}>{position}</Text>
        <View style={styles.deadlineContainer}>
          <MaterialIcons name="timer" size={16} color="#888888" />
          <Text style={styles.deadlineText}>Deadline: {deadline}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  
  const ModernEventCard = ({ image, title, date, time, category }) => (
    <TouchableOpacity style={styles.modernEventCard}>
      <Image
        source={{ uri: image }}
        style={styles.eventBgImage}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.eventOverlay}>
        <View style={styles.eventCategory}>
          <Text style={styles.categoryText}>{category}</Text>
        </View>
        <Text style={styles.modernEventTitle}>{title}</Text>
        <View style={styles.eventTimeInfo}>
          <Ionicons name="calendar-outline" size={16} color="#ffffff" />
          <Text style={styles.eventTimeText}>{date}</Text>
          <Ionicons name="time-outline" size={16} color="#ffffff" style={styles.timeIcon} />
          <Text style={styles.eventTimeText}>{time}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
  
  // Add inside your StudentDashboard component, after the existing events section:
  const internships = [
    {
      company: "Microsoft",
      position: "Software Engineering Intern",
      deadline: "Aug 30, 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
    },
    {
      company: "IBM",
      position: "Cloud Developer Intern",
      deadline: "Sep 15, 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
    }
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

  const events = [
    {
      date: '7',
      title: 'Project B mid-year report and training',
      type: '14:25pm - 15:02pm',
      isNew: true,
    },
    {
      date: '7',
      title: '[AUCRC] Student Exchange Cafe "time to study"',
      type: 'Student Activity',
      isNew: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header userInfo={userInfo} />
        <QuickActions />
        <View style={styles.content}>
          <View style={styles.row}>
            <ProgressCard
              title="Attendance"
              value={75}
              total={100}
              type="attendance"
            />
            <GPACard currentGPA={3.5} lastSemesterGPA={3.5} />
          </View>
          
          <ProgressCard
            title="Complete Course"
            value={51}
            total={56}
            type="course"
          />

          <View style={styles.analyticsSection}>
            <AnalyticsChart
              title="CGPA"
              data={cgpaData}
              labels={cgpaLabels}
            />
            <AnalyticsChart
              title="Attendeness"
              data={attendanceData}
              labels={attendanceLabels}
            />
          </View>
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
          <View style={styles.newsSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>News and Events</Text>
              <TouchableOpacity>
                <Text style={styles.seeMoreText}>See more</Text>
              </TouchableOpacity>
            </View>
            {modernEvents.map((event, index) => (
  <ModernEventCard key={index} {...event} />
))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    padding: 16,
  },
  header: {
    padding: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  headerText: {
    flex: 1,
  },
  welcomeText: {
    color: '#ffffff',
    fontSize: 16,
    opacity: 0.8,
  },
  campusText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  programInfo: {
    marginTop: 4,
  },
  semester: {
    color: '#2eb086',
    fontSize: 14,
  },
  program: {
    color: '#888888',
    fontSize: 12,
  },
  major: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  batch: {
    color: '#888888',
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 16,
    padding: 16,
    elevation: 3,
  },
  progressCard: {
    flex: 1,
    marginRight: 8,
  },
  gpaCard: {
    flex: 1,
    marginLeft: 8,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 12,
  },
  attendanceContainer: {
    alignItems: 'center',
  },
  attendanceCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2eb086',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  attendanceValue: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  attendanceLabel: {
    color: '#888888',
    fontSize: 12,
  },
  courseProgressContainer: {
    marginTop: 8,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#333333',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
  },
  gpaValue: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  gpaSubtext: {
    color: '#888888',
    fontSize: 12,
    marginBottom: 12,
  },
  cgpaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  cgpaText: {
    color: '#ffffff',
    fontSize: 14,
  },
  cgpaValue: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  trendIndicator: {
    backgroundColor: 'rgba(46, 176, 134, 0.2)',
    borderRadius: 12,
    padding: 4,
  },
  analyticsSection: {
    marginTop: 16,
    
  },
  chartCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    
  },
  chartTitle: {
    color: '#ffffff',
    fontSize: 18,
    marginBottom: 16,
  },
  chart: {
    borderRadius: 16,
    
   
  },
  newsSection: {
    marginTop: 16,
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
  seeMoreText: {
    color: '#2eb086',
    fontSize: 14,
  },
  eventCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    marginBottom: 12,
  },
  dateContainer: {
    backgroundColor: '#2eb086',
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  dateText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventContent: {
    flex: 1,
  },
  eventHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  newBadge: {
    backgroundColor: 'rgba(46, 176, 134, 0.2)',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 8,
  },
  newBadgeText: {
    color: '#2eb086',
    fontSize: 12,
  },
  eventTitle: {
    color: '#ffffff',
    fontSize: 14,
    flex: 1,
  },
  eventType: {
    color: '#888888',
    fontSize: 12,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1e1e1e',
    marginHorizontal: 16,
    marginTop: -20,
    padding: 16,
    borderRadius: 16,
    elevation: 4,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    color: '#ffffff',
    marginTop: 4,
    fontSize: 12,
  },
  internshipCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    marginBottom: 12,
    elevation: 3,
  },
  companyLogo: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  internshipInfo: {
    marginLeft: 12,
    flex: 1,
  },
  companyName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  positionTitle: {
    color: '#2eb086',
    fontSize: 14,
    marginVertical: 4,
  },
  deadlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deadlineText: {
    color: '#888888',
    fontSize: 12,
    marginLeft: 4,
  },
  modernEventCard: {
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
  },
  eventBgImage: {
    width: '100%',
    height: '100%',
  },
  eventOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    height: '100%',
    justifyContent: 'flex-end',
  },
  eventCategory: {
    backgroundColor: 'rgba(46, 176, 134, 0.3)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  categoryText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
  },
  modernEventTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  eventTimeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventTimeText: {
    color: '#ffffff',
    fontSize: 14,
    marginLeft: 4,
    marginRight: 12,
  },
  timeIcon: {
    marginLeft: 8,
  },
});

export default StudentDashboard;