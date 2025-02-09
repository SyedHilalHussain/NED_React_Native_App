import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import HeaderBackground from './HeaderBackground ';
import { styles } from '../Screens/styles';
export const RegistrationHeader = ({ userInfo, navigation, currentStep }) => {
  const stepTitles = {
    'verification': 'Student Verification',
    'course-selection': 'Course Selection',
    'confirmation': 'Registration Confirmation'
  };

  return (
    <View style={styles.RegistrationHeaderheader}>
      <HeaderBackground />

      {/* Top section */}
      <View style={styles.RegistrationHeaderheaderTop}>
        {/* University Logo and Semester Info */}
        <View style={styles.RegistrationHeaderuniversitySection}>
          <Image
            source={require('../Assets/logo.jpg')} // Replace with your university logo
            style={styles.RegistrationHeaderlogo}
          />
          <View style={styles.RegistrationHeadersemesterInfo}>
            <Text style={styles.RegistrationHeadersemesterText}>Fall 2023</Text>
            <Text style={styles.RegistrationHeaderdeadlineText}>Registration Deadline: 30th Oct 2023</Text>
          </View>
        </View>

        {/* Quick Access Menu */}
        <TouchableOpacity
          style={styles.RegistrationHeadermenuButton}
          onPress={() => navigation?.navigate('HelpCenter')}
        >
          <Ionicons name="help-circle-outline" size={30} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {/* Registration progress section */}
      <View style={styles.RegistrationHeadersearchSection}>
        {/* Progress Bar */}
        <BlurView intensity={20} tint="dark" style={styles.RegistrationHeaderprogressBar}>
          <View style={styles.RegistrationHeaderprogressContent}>
            <Text style={styles.RegistrationHeaderstepText}>
              {stepTitles[currentStep] || 'Registration'}
            </Text>
            <Text style={styles.RegistrationHeaderprogressText}>
              Step {['verification', 'course-selection', 'confirmation'].indexOf(currentStep) + 1} of 3
            </Text>
          </View>
          <View style={styles.RegistrationHeaderprogressIndicator} />
        </BlurView>

        {/* Registration Chips */}
        <View style={styles.RegistrationHeaderchipContainer}>
          <TouchableOpacity
            style={[
              styles.RegistrationHeaderchip,
              currentStep === 'verification' && styles.RegistrationHeaderactiveChip
            ]}
          >
            <Ionicons name="person-outline" size={16} color="#fff" />
            <Text style={styles.RegistrationHeaderchipText}>Verification</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.RegistrationHeaderchip,
              currentStep === 'course-selection' && styles.RegistrationHeaderactiveChip
            ]}
          >
            <Ionicons name="book-outline" size={16} color="#fff" />
            <Text style={styles.RegistrationHeaderchipText}>Courses</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.RegistrationHeaderchip,
              currentStep === 'confirmation' && styles.RegistrationHeaderactiveChip
            ]}
          >
            <Ionicons name="checkmark-outline" size={16} color="#fff" />
            <Text style={styles.RegistrationHeaderchipText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

