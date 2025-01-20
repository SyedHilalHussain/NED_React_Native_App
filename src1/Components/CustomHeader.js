import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const CustomHeader = ({
  title = "Classes",
  showBack = false,
  navigation,
  currentScreen = 'all' // 'all' or 'add'
}) => {
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Main Content */}
      <View style={styles.content}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>{title}</Text>
        </View>

        {/* Navigation Section */}
        <View style={styles.navContainer}>
          <TouchableOpacity
            style={[
              styles.navItem,
              currentScreen === 'all' && styles.activeNavItem
            ]}
            onPress={() => navigation.navigate('DepartmentList')}
          >
            <Ionicons 
              name="home-outline" 
              size={20} 
              color={currentScreen === 'all' ? '#4B6BFB' : '#666'} 
            />
            <Text style={[
              styles.navText,
              currentScreen === 'all' && styles.activeNavText
            ]}>
              - All {title}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modern Wave Border */}
      <View style={styles.waveContainer}>
        <View style={[styles.waveLine, { width: screenWidth * 1.2 }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  titleSection: {
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1a1a1a',
    letterSpacing: 0.3,
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  activeNavItem: {
    backgroundColor: '#EEF2FF',
  },
  navText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 8,
    fontWeight: '500',
  },
  activeNavText: {
    color: '#4B6BFB',
    fontWeight: '600',
  },
  waveContainer: {
    overflow: 'hidden',
    height: 24,
    position: 'relative',
  },
  waveLine: {
    position: 'absolute',
    top: 0,
    left: -20,
    height: 48,
    backgroundColor: '#4B6BFB',
    borderRadius: 100,
    transform: [{ scaleX: 1.1 }, { scaleY: 0.25 }],
    opacity: 0.9,
  },
});