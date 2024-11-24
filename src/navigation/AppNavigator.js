// File: navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';

import StudentPortalNavigator from './StudentPortalNavigator'; // Correct reference to bottom tab navigator
import ProfileScreen from '../screens/ProfileScreen';
import ResultsScreen from '../screens/ResultsScreen';
import CoursesScreen from '../screens/CoursesScreen';
import ExamScheduleScreen from '../screens/ExamScheduleScreen';
import AttendanceScreen from '../screens/AttendanceScreen';
import SemesterRegistrationScreen from '../screens/SemesterRegistrationScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import PersonalizedLearningScreen from '../screens/PersonalizedLearningScreen';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
 
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ResultsScreen" component={ResultsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Courses" component={CoursesScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Exam Schedules" component={ExamScheduleScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Attendance" component={AttendanceScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Semester Registration" component={SemesterRegistrationScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Notifications" component={NotificationsScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="GetStarted" component={PersonalizedLearningScreen}  options={{ headerShown: false }} />
        
        <Stack.Screen
          name="StudentPortal"
          component={HomeScreen} // Correct: must pass a valid component
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    
  );
}
