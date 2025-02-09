import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StudentDashboard from '../Screens/StudentDashboard';
import { AddDepartment } from '../Screens/AddDepartment';
import StackNavigator from './StackNavigator';
import Dashboard from '../Screens/Dashboard';
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
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#6C63FF' },
        headerTintColor: '#FFFFFF',
        drawerActiveTintColor: '#6C63FF',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{ title: 'Home' }}
      />
      <Drawer.Screen
        name="StudentDashboard"
        component={StudentDashboard}
        options={{ title: 'Student Dashboard' }}
      />
      <Drawer.Screen
        name="AdminDashboard"
        component={Dashboard}
        options={{ title: 'Admin Dashboard' }}
      />
      <Drawer.Screen
        name="AddDepartment"
        component={AddDepartment}
        options={{ title: 'Add Departments' }}
      />
      <Drawer.Screen
        name="DepartmentList"
        component={DepartmentList}
        options={{ title: 'Department List' }}
      />
 
       <Drawer.Screen
        name="StudentProfile"
        component={StudentProfile}
        options={{ title: 'StudentProfile' }}
      />
        <Drawer.Screen
        name="EventsPage"
        component={EventsPage}
        options={{ title: 'Events' }}
      />
         <Drawer.Screen
        name="AttendancePage"
        component={AttendancePage}
        options={{ title: 'AttendancePage' }}
      />
       <Drawer.Screen
        name="InternshipsPage"
        component={InternshipsPage}
        options={{ title: 'InternshipsPage' }}
      />
      <Drawer.Screen
        name="DetailedInternshipPage"
        component={DetailedInternshipPage}
        options={{ title: 'DetailedInternshipPage' }}
      />
       <Drawer.Screen
        name="SchedulePage"
        component={SchedulePage}
        options={{ title: 'SchedulePage' }}
      />
      <Drawer.Screen
        name="DetailSchedulePage"
        component={DetailSchedulePage}
        options={{ title: 'DetailSchedulePage' }}
      />
      <Drawer.Screen
        name="GpaDisplay"
        component={GpaDisplay}
        options={{ title: 'GpaDisplay' }}
      />
        <Drawer.Screen
        name="SemesterRegistration"
        component={SemesterRegistration}
        options={{ title: 'SemesterRegistration' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
