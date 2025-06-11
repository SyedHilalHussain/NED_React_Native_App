import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Header } from '../Components/Header';
import { CustomHeader } from '../Components/CustomHeader';
import { FormField } from '../Components/FormField';
import { SectionContainer } from '../Components/SectionContainer';
import styles from '../AdminPortal_Css';
import { CustomButton } from '../Components/CustomButton';
import GetDepartmentList from '../Services/CoursesService/GetDepartmentList';
import GetTeacherList from '../Services/CoursesService/GetTeacherList';
import GetSemesterList from '../Services/CoursesService/SemesterList';
import GetCourseList from '../Services/CoursesService/GetCourseList';
import axios from 'axios';
import { API_BASE_URL } from '../Services/Config';

const CreateSubjectsScreen = ({ navigation }) => {
  const [subjects, setSubjects] = useState([
    {
      name: '',
      initialName: '',
      isElective: false,
      credits: '',
      departmentId: '',
      semesterId: '',
      teacherId: '',
      prerequisiteIds: [],
      type: 'theory',
      schedule: [{
        day: '',
        startTime: '',
        endTime: ''
      }]
    },
  ]);

  const [departments, setDepartments] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [semesters, setSemesters] = useState([]);
  const [prerequisites, setPrerequisites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Days options for dropdown
  const daysOptions = [
    { label: 'Monday', value: 'Monday' },
    { label: 'Tuesday', value: 'Tuesday' },
    { label: 'Wednesday', value: 'Wednesday' },
    { label: 'Thursday', value: 'Thursday' },
    { label: 'Friday', value: 'Friday' },
    { label: 'Saturday', value: 'Saturday' },
    { label: 'Sunday', value: 'Sunday' },
  ];

  // Course type options
  const typeOptions = [
    { label: 'Theory', value: 'theory' },
    { label: 'Practical', value: 'practical' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const departmentsData = await GetDepartmentList();
        const teachersData = await GetTeacherList();
        const semestersData = await GetSemesterList();
        const coursesData = await GetCourseList();

        setDepartments(departmentsData);
        setTeachers(teachersData);
        setSemesters(semestersData);
        setPrerequisites(coursesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (index, field, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index][field] = value;
    setSubjects(updatedSubjects);
  };

  const handleScheduleChange = (subjectIndex, scheduleIndex, field, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[subjectIndex].schedule[scheduleIndex][field] = value;
    setSubjects(updatedSubjects);
  };

  const addMoreSubjects = () => {
    setSubjects([
      ...subjects,
      {
        name: '',
        initialName: '',
        isElective: false,
        credits: '',
        departmentId: '',
        semesterId: '',
        teacherId: '',
        prerequisiteIds: [],
        type: 'theory',
        schedule: [{
          day: '',
          startTime: '',
          endTime: ''
        }]
      },
    ]);
  };

  const addDayToSchedule = (subjectIndex) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[subjectIndex].schedule.push({
      day: '',
      startTime: '',
      endTime: ''
    });
    setSubjects(updatedSubjects);
  };

  const removeDayFromSchedule = (subjectIndex, scheduleIndex) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[subjectIndex].schedule.splice(scheduleIndex, 1);
    setSubjects(updatedSubjects);
  };

  const removeSubject = (index) => {
    const updatedSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(updatedSubjects);
  };

  const validateSubject = (subject) => {
    if (!subject.name || !subject.initialName) {
      throw new Error('Subject name and initial name are required.');
    }
    if (isNaN(subject.credits)) {
      throw new Error('Credits must be a number.');
    }
    if (!subject.departmentId) {
      throw new Error('Department is required.');
    }
    if (!subject.semesterId) {
      throw new Error('Semester is required.');
    }
    if (!subject.teacherId) {
      throw new Error('Teacher is required.');
    }
    if (!subject.type) {
      throw new Error('Course type is required.');
    }
    if (subject.schedule.length === 0) {
      throw new Error('At least one day is required.');
    }
    subject.schedule.forEach((daySchedule, index) => {
      if (!daySchedule.day) {
        throw new Error(`Day ${index + 1} is required.`);
      }
      if (!daySchedule.startTime) {
        throw new Error(`Start time for ${daySchedule.day || 'Day ' + (index + 1)} is required.`);
      }
      if (!daySchedule.endTime) {
        throw new Error(`End time for ${daySchedule.day || 'Day ' + (index + 1)} is required.`);
      }
    });
  };

  const handleSubmit = async () => {
    try {
      for (const subject of subjects) {
        validateSubject(subject);

        // Format the schedule data as required
        const formattedSchedule = {};
        subject.schedule.forEach((daySchedule, index) => {
          formattedSchedule[index] = {
            day: daySchedule.day,
            startTime: daySchedule.startTime,
            endTime: daySchedule.endTime
          };
        });

        const payload = {
          name: subject.name,
          initialName: subject.initialName,
          isElective: subject.isElective,
          credits: parseInt(subject.credits, 10),
          departmentId: parseInt(subject.departmentId, 10),
          semesterId: parseInt(subject.semesterId, 10),
          teacherId: parseInt(subject.teacherId, 10),
          prerequisiteIds: Array.isArray(subject.prerequisiteIds)
            ? subject.prerequisiteIds.map((id) => parseInt(id, 10))
            : [],
          type: subject.type,
          day: JSON.stringify(formattedSchedule),
        };

        console.log('Payload:', payload);

        const response = await axios.post(`${API_BASE_URL}/api/Course/add-course`, payload);
        console.log('Subject created successfully:', response.data);
      }

      navigation.goBack();
    } catch (error) {
      console.error('Error creating subjects:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <View style={styles.CreateSubjectsScreenmainContainer}>
      <Header />
      <CustomHeader
        title="Courses"
        currentScreen="Create Course"
        showSearch={false}
        showRefresh={false}
        navigation={navigation}
      />

      <View style={styles.CreateSubjectsScreencontentContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.CreateSubjectsScreenscrollContent}
        >
          <Text style={styles.CreateSubjectsScreenformTitle}>Add New Courses</Text>

          <View style={styles.CreateSubjectsScreenlegendContainer}>
            <View style={styles.CreateSubjectsScreenlegendItem}>
              <View style={[styles.CreateSubjectsScreenlegendDot, styles.CreateSubjectsScreenrequiredDot]} />
              <Text style={styles.CreateSubjectsScreenlegendText}>Required*</Text>
            </View>
            <View style={styles.CreateSubjectsScreenlegendItem}>
              <View style={[styles.CreateSubjectsScreenlegendDot, styles.CreateSubjectsScreenoptionalDot]} />
              <Text style={styles.CreateSubjectsScreenlegendText}>Optional</Text>
            </View>
          </View>

          <SectionContainer sectionNumber="1" title="Course Information">
            {subjects.map((subject, subjectIndex) => (
              <View key={subjectIndex}>
                <FormField
                  label="Subject Name"
                  required
                  value={subject.name}
                  onChangeText={(value) => handleInputChange(subjectIndex, 'name', value)}
                  placeholder="Enter subject name"
                />

                <FormField
                  label="Initial Name"
                  required
                  value={subject.initialName}
                  onChangeText={(value) => handleInputChange(subjectIndex, 'initialName', value)}
                  placeholder="Enter subject code (e.g., CS101)"
                />

                <FormField
                  label="Credits"
                  required
                  value={subject.credits}
                  onChangeText={(value) => handleInputChange(subjectIndex, 'credits', value)}
                  placeholder="Enter number of credits"
                  keyboardType="numeric"
                />

                <FormField
                  label="Course Type"
                  placeholder="Select Course Type"
                  type="select"
                  required
                  value={subject.type}
                  onChangeText={(value) => handleInputChange(subjectIndex, 'type', value)}
                  options={typeOptions}
                />

                <FormField
                  label="Department"
                  placeholder="Select Department"
                  type="select"
                  required
                  value={subject.departmentId}
                  onChangeText={(value) => handleInputChange(subjectIndex, 'departmentId', value)}
                  options={departments.map((dept) => ({
                    label: dept.departmentName,
                    value: dept.id.toString(),
                  }))}
                />

                <FormField
                  label="Semester"
                  placeholder="Select Semester"
                  type="select"
                  required
                  value={subject.semesterId}
                  onChangeText={(value) => handleInputChange(subjectIndex, 'semesterId', value)}
                  options={semesters.map((sem) => ({
                    label: sem.semesterName,
                    value: sem.id.toString(),
                  }))}
                />

                <FormField
                  label="Teacher"
                  placeholder="Select Teacher"
                  type="select"
                  required
                  value={subject.teacherId}
                  onChangeText={(value) => handleInputChange(subjectIndex, 'teacherId', value)}
                  options={teachers.map((teacher) => ({
                    label: teacher.name,
                    value: teacher.id.toString(),
                  }))}
                />

                <FormField
                  label="Prerequisites"
                  placeholder="Select Prerequisites"
                  type="select"
                  multiple
                  value={subject.prerequisiteIds || []}
                  onChangeText={(value) => handleInputChange(subjectIndex, 'prerequisiteIds', value)}
                  options={prerequisites.map((course) => ({
                    label: course.name,
                    value: course.id.toString(),
                  }))}
                />

                <Text style={styles.sectionSubtitle}>Schedule</Text>
                
                {subject.schedule.map((daySchedule, scheduleIndex) => (
                  <View key={scheduleIndex} style={styles.dayScheduleContainer}>
                    <FormField
                      label={`Day ${scheduleIndex + 1}`}
                      placeholder="Select Day"
                      type="select"
                      required
                      value={daySchedule.day}
                      onChangeText={(value) => handleScheduleChange(subjectIndex, scheduleIndex, 'day', value)}
                      options={daysOptions}
                    />

                    <FormField
                      label="Start Time"
                      type="time"
                      placeholder="HH:MM (e.g., 09:00)"
                      required
                      value={daySchedule.startTime}
                      onChangeText={(value) => handleScheduleChange(subjectIndex, scheduleIndex, 'startTime', value)}
                    />

                    <FormField
                      label="End Time"
                      type="time"
                      placeholder="HH:MM (e.g., 10:00)"
                      required
                      value={daySchedule.endTime}
                      onChangeText={(value) => handleScheduleChange(subjectIndex, scheduleIndex, 'endTime', value)}
                    />

                    {scheduleIndex > 0 && (
                      <TouchableOpacity
                        style={styles.removeDayButton}
                        onPress={() => removeDayFromSchedule(subjectIndex, scheduleIndex)}
                      >
                        <Text style={styles.removeDayButtonText}>Remove Day</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                ))}

                <TouchableOpacity
                  style={styles.addDayButton}
                  onPress={() => addDayToSchedule(subjectIndex)}
                >
                  <Text style={styles.addDayButtonText}>+ Add Another Day</Text>
                </TouchableOpacity>
              </View>
            ))}
          </SectionContainer>

          <View style={styles.CreateSubjectsScreenbuttonContainer}>
            <TouchableOpacity
              style={[styles.CreateSubjectsScreenbutton, styles.CreateSubjectsScreenaddButton]}
              onPress={addMoreSubjects}
            >
              <Text style={styles.CreateSubjectsScreenbuttonText}>+ Add More Courses</Text>
            </TouchableOpacity>

            {subjects.length > 1 && (
              <TouchableOpacity
                style={[styles.CreateSubjectsScreenbutton, styles.CreateSubjectsScreenremoveButton]}
                onPress={() => removeSubject(subjects.length - 1)}
              >
                <Text style={styles.CreateSubjectsScreenremoveButtonText}>− Remove Course</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>

        <View style={styles.CreateExamSchedulebuttonContainer}>
          <CustomButton
            buttons={[
              {
                title: 'Cancel',
                onPress: () => navigation.goBack(),
                variant: 'secondary',
              },
              {
                title: 'Create Course',
                onPress: handleSubmit,
                variant: 'primary',
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   // ... your existing styles ...
//   sectionSubtitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 20,
//     marginBottom: 10,
//     color: '#333',
//   },
//   dayScheduleContainer: {
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     padding: 10,
//   },
//   addDayButton: {
//     backgroundColor: '#e1f5fe',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   addDayButtonText: {
//     color: '#0288d1',
//     fontWeight: 'bold',
//   },
//   removeDayButton: {
//     backgroundColor: '#ffebee',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 5,
//   },
//   removeDayButtonText: {
//     color: '#d32f2f',
//     fontWeight: 'bold',
//   },
// });

export default CreateSubjectsScreen;