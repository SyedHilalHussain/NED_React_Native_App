import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions, Alert
} from 'react-native';
import VerificationStep from '../Components/VerificationStep';
import CourseSelectionStep from '../Components/CourseSelectionStep';
import ConfirmationStep from '../Components/ConfirmationStep';
import { RegistrationHeader } from '../Components/RegistrationHeader';
import { styles } from './styles';
const MOCK_AVAILABLE_COURSES = [
  {
    id: "CS301",
    name: "Advanced Algorithms",
    credits: 3,
    prereqs: ["Data Structures"],
    description: "In-depth study of algorithmic design and analysis"
  },
  {
    id: "CS302", 
    name: "Machine Learning Fundamentals",
    credits: 4,
    prereqs: ["Linear Algebra"],
    description: "Introduction to machine learning concepts and techniques"
  }
];

const SemesterRegistrationScreen = ({ navigation }) => {
  const userInfo = {
    name: "John Doe",
    profileImage: require("../Assets/profile.jpg"),
  };

  const [registrationStep, setRegistrationStep] = useState('verification');
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleCourseSelection = (course) => {
    setSelectedCourses(current => 
      current.includes(course) 
        ? current.filter(c => c !== course)
        : [...current, course]
    );
  };

  const handleBackNavigation = () => {
    switch (registrationStep) {
      case 'course-selection':
        setRegistrationStep('verification');
        break;
      case 'confirmation':
        setRegistrationStep('course-selection');
        break;
      default:
        navigation.goBack();
    }
  };

  const handleVerificationProceed = () => {
    setRegistrationStep('course-selection');
  };

  const handleCourseSubmit = () => {
    if (selectedCourses.length === 0) {
      Alert.alert(
        "Course Selection",
        "Please select at least one course before proceeding."
      );
      return;
    }
    setRegistrationStep('confirmation');
  };

  const handleGenerateReceipt = () => {
    Alert.alert(
      "Registration Complete", 
      "Your courses have been registered successfully!"
    );
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.SemesterRegistrationScreencontainer}>
      <RegistrationHeader 
        userInfo={userInfo}
        navigation={navigation}
        currentStep={registrationStep}
      />

      <ScrollView
        style={styles.SemesterRegistrationScreenregistrationContainer}
        contentContainerStyle={styles.SemesterRegistrationScreenregistrationContent}
      >
        {registrationStep === 'verification' && (
          <VerificationStep onProceed={handleVerificationProceed} />
        )}
        {registrationStep === 'course-selection' && (
          <CourseSelectionStep
            selectedCourses={selectedCourses}
            onCourseSelect={handleCourseSelection}
            onSubmit={handleCourseSubmit}
            availableCourses={MOCK_AVAILABLE_COURSES}
          />
        )}
        {registrationStep === 'confirmation' && (
          <ConfirmationStep
            selectedCourses={selectedCourses}
            onGenerateReceipt={handleGenerateReceipt}
          />
        )}
      </ScrollView>
    </View>
  );
};



export default SemesterRegistrationScreen;