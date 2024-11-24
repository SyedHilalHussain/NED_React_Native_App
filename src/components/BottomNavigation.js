import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Get screen dimensions
const { width } = Dimensions.get('window');

// Utility function to scale sizes dynamically
const scale = (size) => (width / 375) * size;

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState('Diary'); // State to track active tab

  const tabs = [
    { name: 'Diary', icon: 'book-outline' },
    { name: 'Explore', icon: 'search-outline' },
    { name: 'Coach', icon: 'school-outline' },
    { name: 'Results', icon: 'trophy-outline' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tab,
            activeTab === tab.name ? styles.activeTabContainer : null, // Apply active tab container style
          ]}
          onPress={() => setActiveTab(tab.name)} // Set the active tab on press
        >
          <View
            style={[
              styles.iconWrapper,
              activeTab === tab.name ? styles.activeIconWrapper: null, // Apply background fill for active tab
            ]}
          >
            <Ionicons
              name={tab.icon}
              size={scale(24)}
              color={activeTab === tab.name ? '#FFFFFF' : '#4CAF50'} // Change icon color for active tab
            />
          </View>
          <Text
            style={[
              styles.label,
              activeTab === tab.name ? styles.activeLabel: null, // Apply active label style
            ]}
          >
            {tab.name}
          </Text>
          {activeTab === tab.name ? <View style={styles.underline}  />: null } {/* Underline for active tab */}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: scale(12), // Scaled vertical padding
    borderRadius: scale(25), // Scaled border radius
    position: 'absolute',
    bottom: scale(15), // Scaled bottom margin
    left: scale(20), // Scaled left margin
    right: scale(20), // Scaled right margin
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: scale(10),
    elevation: 5,
  },
  tab: {
    alignItems: 'center',
    position: 'relative', // To position underline
  },
  iconWrapper: {
    width: scale(40), // Icon wrapper size
    height: scale(40),
    borderRadius: scale(20), // Circle shape
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Default: no fill
    borderWidth: scale(2), // Border for inactive tabs
    borderColor: '#F0F4FF', // Match semester tab's inactive state
  },
  activeIconWrapper: {
    backgroundColor: '#4CD964', // Fill active tab with color
    borderColor: '#4CD964', // Change border color for active tab
  },
  activeTabContainer: {
    shadowColor: '#4CD964', // Add shadow effect for active tab
    shadowOpacity: 0.5,
    shadowRadius: scale(6),
    shadowOffset: { width: 0, height: scale(3) },
    elevation: 5,
  },
  label: {
    fontSize: scale(12), // Scaled font size
    color: '#4CAF50', // Default label color
    marginTop: scale(4), // Scaled margin
  },
  activeLabel: {
    color: '#4CD964', // Active tab label color
  },
  underline: {
    width: scale(30), // Underline width
    height: scale(3), // Underline height
    backgroundColor: '#4CD964', // Underline color
    position: 'absolute',
    bottom: -scale(8), // Positioned below the text
    borderRadius: scale(2),
  },
});

export default BottomNavigation;
