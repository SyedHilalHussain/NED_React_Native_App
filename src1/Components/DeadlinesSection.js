import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const DeadlinesSection = ({ deadlines }) => {
  const [selectedFilter, setSelectedFilter] = useState('upcoming');

  const renderDeadlineCard = (deadline, index) => {
    return (
      <TouchableOpacity 
        key={index}
        style={styles.deadlineCard}
        activeOpacity={0.7}
      >
        {/* Progress Circle */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>{deadline.progress}%</Text>
        </View>

        {/* Date */}
        <Text style={styles.date}>{deadline.date}</Text>

        {/* Title */}
        <Text style={styles.title} numberOfLines={2}>
          {deadline.title}
        </Text>

        {/* Subject Tag */}
        <View style={styles.subjectContainer}>
          <Text style={styles.subjectText}>{deadline.subject}</Text>
        </View>

        {/* Bottom Row */}
        <View style={styles.bottomRow}>
          <View style={styles.timeContainer}>
            <MaterialIcons name="access-time" size={16} color="#32D583" />
            <Text style={styles.timeText}>{deadline.time}</Text>
          </View>
          <View style={styles.typeContainer}>
            <MaterialIcons name="assignment" size={16} color="#666" />
            <Text style={styles.typeText}>{deadline.type}</Text>
          </View>
        </View>

        {/* Priority Indicator */}
        {deadline.priority === 'high' && (
          <View style={styles.priorityIndicator}>
            <MaterialIcons name="bolt" size={20} color="#FF4757" />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.sectionTitle}>Deadlines</Text>
          <View style={styles.activeTasksContainer}>
            <Text style={styles.activeTasksNumber}>{deadlines.length}</Text>
            <Text style={styles.activeTasksLabel}>Active Tasks</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <MaterialIcons name="tune" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Filter Pills */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.filterScroll}
        contentContainerStyle={styles.filterContainer}
      >
        {[
          { id: 'all', icon: 'grid-view', label: 'All' },
          { id: 'urgent', icon: 'warning', label: 'Urgent' },
          { id: 'upcoming', icon: 'event', label: 'Upcoming' }
        ].map((filter) => (
          <TouchableOpacity
            key={filter.id}
            style={[
              styles.filterPill,
              selectedFilter === filter.id && styles.filterPillActive
            ]}
            onPress={() => setSelectedFilter(filter.id)}
          >
            <MaterialIcons 
              name={filter.icon} 
              size={18} 
              color={selectedFilter === filter.id ? '#fff' : '#666'} 
            />
            <Text style={[
              styles.filterText,
              selectedFilter === filter.id && styles.filterTextActive
            ]}>
              {filter.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Deadline Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsContainer}
      >
        {deadlines.map((deadline, index) => renderDeadlineCard(deadline, index))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerLeft: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  activeTasksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeTasksNumber: {
    fontSize: 20,
    fontWeight: '600',
    color: '#32D583',
    marginRight: 8,
  },
  activeTasksLabel: {
    fontSize: 16,
    color: '#666',
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterScroll: {
    marginBottom: 20,
  },
  filterContainer: {
    paddingHorizontal: 20,
  },
  filterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    marginRight: 12,
  },
  filterPillActive: {
    backgroundColor: '#32D583',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  filterTextActive: {
    color: '#fff',
    fontWeight: '500',
  },
  cardsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  deadlineCard: {
    width: 300,
    padding: 20,
    marginRight: 16,
    borderRadius: 24,
    backgroundColor: '#1A1A1A',
    position: 'relative',
  },
  progressContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(50, 213, 131, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  progressText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#32D583',
  },
  date: {
    fontSize: 16,
    fontWeight: '500',
    color: '#32D583',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
    lineHeight: 32,
  },
  subjectContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    marginBottom: 16,
  },
  subjectText: {
    fontSize: 14,
    color: '#fff',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#32D583',
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#666',
  },
  priorityIndicator: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 71, 87, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});