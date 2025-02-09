import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { styles } from '../Screens/styles';
const { width } = Dimensions.get('window');

const CourseSelectionStep = ({
  selectedCourses,
  onCourseSelect,
  onSubmit,
  availableCourses,
}) => {
  return (
    <View style={styles.CourseSelectionStepcontainer}>
      <ScrollView 
        style={styles.CourseSelectionStepcourseListContainer}
        contentContainerStyle={styles.CourseSelectionStepcourseListContent}
      >
        {availableCourses.map((course) => (
          <BlurView 
            key={course.id}
            intensity={20} 
            tint="dark" 
            style={[
              styles.CourseSelectionStepcourseCard,
              selectedCourses.includes(course) && styles.CourseSelectionStepselectedCourseCard
            ]}
          >
            <TouchableOpacity 
              style={styles.CourseSelectionStepcourseCardContent}
              onPress={() => onCourseSelect(course)}
            >
              <View style={styles.CourseSelectionStepcourseHeader}>
                <View style={styles.CourseSelectionStepcourseIconContainer}>
                  <Ionicons 
                    name="book-outline" 
                    size={24} 
                    color={selectedCourses.includes(course) ? '#2EB086' : '#CCCCCC'} 
                  />
                </View>
                <View style={styles.CourseSelectionStepcourseTitleContainer}>
                  <Text style={styles.CourseSelectionStepcourseTitleText}>{course.name}</Text>
                  <Text style={styles.CourseSelectionStepcourseDetailsText}>
                    {course.id} | {course.credits} Credits
                  </Text>
                </View>
                {selectedCourses.includes(course) && (
                  <Ionicons 
                    name="checkmark-circle" 
                    size={24} 
                    color="#2EB086" 
                  />
                )}
              </View>
              <Text style={styles.CourseSelectionStepcourseDescriptionText}>
                {course.description}
              </Text>
              <View style={styles.CourseSelectionStepprereqContainer}>
                <Text style={styles.CourseSelectionStepprereqLabel}>Prerequisites:</Text>
                <Text style={styles.CourseSelectionStepprereqText}>
                  {course.prereqs.join(', ')}
                </Text>
              </View>
            </TouchableOpacity>
          </BlurView>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.CourseSelectionStepprimaryButton,
          selectedCourses.length === 0 && styles.CourseSelectionStepdisabledButton
        ]}
        disabled={selectedCourses.length === 0}
        onPress={onSubmit}
      >
        <Text style={styles.CourseSelectionStepbuttonText}>Submit Courses</Text>
        <Ionicons 
          name="arrow-forward" 
          size={24} 
          color="white" 
        />
      </TouchableOpacity>
    </View>
  );
};



export default CourseSelectionStep;