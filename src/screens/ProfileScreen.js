import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import Header from '../components/Header';
import ProfileInfo from '../components/ProfileInfo';

import SettingsList from '../components/SettingsList';
import BottomNavigation from '../components/BottomNavigation';
import CurvedBackground from '../components/CurvedBackground'; // Import CurvedBackground
import StudentPortalNavigator from '../navigation/StudentPortalNavigator';
import NavComponent from '../components/NavComponent';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window'); // Get screen width for scaling
const scale = (size) => (width / 375) * size; // Scaling utility for responsive design
const ProfileScreen = ({ route }) => {
  const navigation = useNavigation();

  const handleScreenChange = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title={route.name} 
      showProfile={true}
      />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Curved Background */}
        <CurvedBackground>
          {/* Profile Information (Positioned on top of curve) */}
          <View style={styles.profileInfoContainer}>
            <ProfileInfo />
          </View>
        </CurvedBackground>

        {/* Settings List */}
        <SettingsList />
      </ScrollView>

      {/* Bottom Navigation */}
      {/* <BottomNavigation /> */}
      {/* <View style={styles.navContainer}>
        <StudentPortalNavigator 
        onScreenChange={handleScreenChange}
        />
      </View> */}
       <View style={styles.navContainer}>
        <NavComponent
          activeScreen={route.name}
          onScreenChange={handleScreenChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FD', // Light background for contrast
  },
  scrollView: {
    paddingBottom: scale(100), // Scaled space for bottom navigation
  },
  profileInfoContainer: {
    marginTop: scale(20), // Scaled spacing to ensure alignment with the curve
    alignItems: 'center', // Center align the profile info
  },
  navContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: scale(65),
  },
});

export default ProfileScreen;
