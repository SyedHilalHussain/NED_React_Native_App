// components/DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/LoginScreen';
import StudentDashboard from '../Screens/StudentDashboard';
// import ProfileScreen from '../Screens/ProfileScreen';
// import SettingsScreen from '../Screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: { backgroundColor: '#6C63FF' },
          headerTintColor: '#FFFFFF',
          drawerActiveTintColor: '#6C63FF',
        }}
      >
        <Drawer.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="StudentDashboard"
          component={StudentDashboard}
          options={{ title: 'Dashboard' }}
        />
        {/* <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
