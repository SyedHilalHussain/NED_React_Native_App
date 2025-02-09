// GPAHeader.js
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import HeaderBackground from './HeaderBackground ';

const GPAHeader = ({ 
  onViewChange, 
  currentView, 
  selectedSemester,
  onSemesterChange,
  searchQuery,
  onSearchChange 
}) => {
  const semesters = ['All Semesters', '1st Semester', '2nd Semester', '3rd Semester', '4th Semester'];

  return (
    <View style={styles.header}>
      <HeaderBackground />
      
      <View style={styles.viewToggleContainer}>
        <TouchableOpacity 
          style={[styles.viewButton, currentView === 'analytics' && styles.activeViewButton]}
          onPress={() => onViewChange('analytics')}
        >
          <MaterialIcons name="analytics" size={24} color="#ffffff" />
          <Text style={styles.viewButtonText}>Analytics</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.viewButton, currentView === 'simple' && styles.activeViewButton]}
          onPress={() => onViewChange('simple')}
        >
          <MaterialIcons name="list-alt" size={24} color="#ffffff" />
          <Text style={styles.viewButtonText}>Simple View</Text>
        </TouchableOpacity>
      </View>

      <BlurView intensity={20} tint="dark" style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="rgba(255, 255, 255, 0.7)" />
        <TouchableOpacity 
          style={styles.searchInput}
          onPress={() => onSearchChange(searchQuery)}
        >
          <Text style={styles.searchPlaceholder}>
            {searchQuery || "Search courses..."}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={20} color="#ffffff" />
        </TouchableOpacity>
      </BlurView>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.semesterContainer}
      >
        {semesters.map((semester) => (
          <TouchableOpacity 
            key={semester}
            style={[
              styles.semesterChip, 
              selectedSemester === semester && styles.activeSemesterChip
            ]}
            onPress={() => onSemesterChange(semester)}
          >
            <Text style={styles.semesterText}>{semester}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 48,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  viewToggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
    borderRadius: 16,
    padding: 12,
    flex: 0.48,
    justifyContent: 'center',
    gap: 8,
  },
  activeViewButton: {
    backgroundColor: '#2EB086',
  },
  viewButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
    borderRadius: 26,
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    overflow: "hidden",
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  searchPlaceholder: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
  },
  filterButton: {
    padding: 4,
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
    borderRadius: 8,
  },
  semesterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 8,
  },
  semesterChip: {
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  activeSemesterChip: {
    backgroundColor: '#2EB086',
  },
  semesterText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default GPAHeader;