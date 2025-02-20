import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/LoginScreen';
import StudentDashboard from '../Screens/StudentDashboard';
import Dashboard from '../Screens/Dashboard';
import { AddDepartment } from '../Screens/AddDepartment';
import { DepartmentList } from '../Screens/DepartmentList';

import StudentProfile from '../Screens/StudentProfile';
import EventsPage from '../Screens/EventsPage';
import AttendancePage from '../Screens/AttendancePage';
import InternshipsPage from '../Screens/InternshipsPage';
import DetailedInternshipPage from '../Screens/DetailedInternshipPage';
import SchedulePage from '../Screens/SchedulePage';
import DetailSchedulePage from '../Screens/DetailSchedulePage';
import GpaDisplay from '../Screens/GpaDisplay';
import SemesterRegistration from '../Screens/SemesterRegistration';

const Stack = createSharedElementStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
      <Stack.Screen name="AdminDashboard" component={Dashboard} />
      <Stack.Screen name="AddDepartment" component={AddDepartment} />
      <Stack.Screen name="DepartmentList" component={DepartmentList} />
      <Stack.Screen name="StudentProfile" component={StudentProfile} />
      <Stack.Screen name="EventsPage" component={EventsPage} />
      <Stack.Screen name="AttendancePage" component={AttendancePage} />
      
      <Stack.Screen name="DetailedInternshipPage" component={DetailedInternshipPage} />
      <Stack.Screen name="InternshipsPage" component={InternshipsPage} />
      <Stack.Screen name="SchedulePage" component={SchedulePage} />
      <Stack.Screen name="DetailSchedulePage" component={DetailSchedulePage} />
      <Stack.Screen name="GpaDisplay" component={GpaDisplay} />
      <Stack.Screen name="SemesterRegistration" component={SemesterRegistration} />
     
   
    </Stack.Navigator>
  );
};

export default StackNavigator;
