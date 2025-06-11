import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Header } from '../Components/Header';
import { CustomHeader } from '../Components/CustomHeader';
import styles from '../AdminPortal_Css';
import { ExaminationScheduleDepYearList } from '../Services/ExaminationSchedule/ExaminationScheduleDepList';

export const ExamScheduleDetailsScreen = ({ navigation, route }) => {
  const { deptCode, deptName, yearNum, yearName } = route.params;
  const [examSchedule, setExamSchedule] = useState([]); // State for exam schedule
  const [loading, setLoading] = useState(true); // State for loading

  console.log(deptCode, deptName, yearNum, yearName);
  console.log(route.params);

  // Fetch exam schedule data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ExaminationScheduleDepYearList(deptName, yearNum);
        setExamSchedule(data); // Update state with fetched data
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData(); // Call the async function
  }, [deptName, yearNum]); // Add dependencies to re-fetch if deptName or yearNum changes

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Handle edit button press
  const handleEdit = () => {
    navigation.navigate('EditExamSchedule', {
      deptCode,
      deptName,
      yearNum,
      yearName,
      examSchedule,
    });
  };

  // Show loading indicator
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Show empty state if no exam schedule data
  if (examSchedule.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text>No exam schedule found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.ExamScheduleViewcontainer}>
      <Header />
      <CustomHeader
        title="Exam Schedule"
        currentScreen="Exam Schedule Details"
        showSearch={false}
        showRefresh={false}
        navigation={navigation}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.EditSemesterRegistrationheaderInfo}>
          <View style={styles.EditSemesterRegistrationinfoItem}>
            <MaterialIcons name="domain" size={24} color="#6C63FF" />
            <Text style={styles.EditSemesterRegistrationinfoText}>
              {deptName || deptCode}
            </Text>
          </View>
          <View style={styles.EditSemesterRegistrationinfoItem}>
            <MaterialIcons name="school" size={24} color="#6C63FF" />
            <Text style={styles.EditSemesterRegistrationinfoText}>
              {yearName}
            </Text>
          </View>
        </View>

        {examSchedule.map((schedule, scheduleIndex) => (
          <View key={scheduleIndex} style={styles.ExamScheduleViewdateSchedule}>
            <View style={styles.ExamScheduleViewdateHeader}>
              <MaterialIcons name="calendar-today" size={20} color="#6C63FF" />
              <Text style={styles.ExamScheduleViewdateText}>
                {formatDate(schedule.date)} - {schedule.day}
              </Text>
              <TouchableOpacity
                style={styles.ExamScheduleVieweditButton}
                onPress={handleEdit}
              >
                <MaterialIcons name="edit" size={24} color="#6C63FF" />
              </TouchableOpacity>
            </View>

            <View style={styles.ExamScheduleViewslotsContainer}>
              {schedule.slots.map((slot, slotIndex) => (
                <View key={slotIndex} style={styles.ExamScheduleViewexamSlot}>
                  <View style={styles.ExamScheduleViewtimeColumn}>
                  <Text style={styles.ExamScheduleViewtimeText}>
  {slot.time.split('-')[0].trim()}
  {'\n'}
  {slot.time.split('-')[1].trim()}
</Text>

                    <View style={styles.ExamScheduleViewtimelineDot} />
                    {slotIndex !== schedule.slots.length - 1 && (
                      <View style={styles.ExamScheduleViewtimelineLine} />
                    )}
                  </View>

                  <View style={styles.ExamScheduleViewexamDetails}>
                    <Text style={styles.ExamScheduleViewcourseCode}>
                      {slot.courseCode}
                    </Text>
                    <Text style={styles.ExamScheduleViewcourseName}>
                      {slot.course}
                    </Text>
                    <View style={styles.ExamScheduleViewvenueRow}>
                      <MaterialIcons name="room" size={16} color="#6B7280" />
                      <Text style={styles.ExamScheduleViewvenueText}>
                        {slot.venue}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};