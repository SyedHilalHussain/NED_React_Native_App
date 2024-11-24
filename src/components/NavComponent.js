// NavComponent.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const scale = (size) => (width / 375) * size;

const NavComponent = ({ activeScreen, onScreenChange }) => {
  const routes = [
    { name: 'StudentPortal', displayName: 'Home', icon: 'book-outline' },
    { name: 'Courses', displayName: 'CoursesScreen', icon: 'albums-outline' },
    { name: 'Exam Schedules', displayName: 'Exam Schedule', icon: 'calendar-outline' },
    { name: 'Semester Registration', displayName: 'Registration', icon: 'trophy-outline' }

  ];

  return (
    <View style={styles.container}>
      {routes.map((route, index) => {
        const isFocused = activeScreen === route.name;

        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.tab,
              isFocused ? styles.activeTabContainer : null,
            ]}
            onPress={() => onScreenChange(route.name)}
          >
            <View
              style={[
                styles.iconWrapper,
                isFocused ? styles.activeIconWrapper : null,
              ]}
            >
              <Ionicons
                name={route.icon}
                size={scale(24)}
                color={isFocused ? '#FFFFFF' : '#D9534F'}
              />
            </View>
            <Text
              style={[
                styles.label,
                isFocused ? styles.activeLabel : null,
              ]}
            >
              {route.displayName}
            </Text>
            {isFocused ? <View style={styles.underline} /> : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: scale(12),
    borderRadius: scale(25),
    position: 'absolute',
    bottom: scale(15),
    left: scale(20),
    right: scale(20),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: scale(10),
    elevation: 5,
  },
  tab: {
    alignItems: 'center',
    position: 'relative',
  },
  iconWrapper: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(217, 83, 79, 0.06)',
    borderWidth: scale(2),
    borderColor: 'rgba(217, 83, 79, 0.15)',
    
  },
  activeIconWrapper: {
    backgroundColor: '#fc6762',
    borderColor: '#fc6762',
  },
  activeTabContainer: {
    shadowColor: '#4CD964',
    shadowOpacity: 0.5,
    shadowRadius: scale(6),
    shadowOffset: { width: 0, height: scale(3) },
    elevation: 5,

  },
  label: {
    fontSize: scale(12),
    color: '#D9534F',
    marginTop: scale(4),
  },
  activeLabel: {
    color: '#D9534F',
  },
  underline: {
    width: scale(30),
    height: scale(3),
    backgroundColor: '#fc6762',
    position: 'absolute',
    bottom: -scale(8),
    borderRadius: scale(2),
  },
});

export default NavComponent;
