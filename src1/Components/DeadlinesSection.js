import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../Screens/styles';
export const DeadlinesSection = ({ deadlines }) => {
  const [selectedFilter, setSelectedFilter] = useState('upcoming');

  const renderDeadlineCard = (deadline, index) => {
    return (
      <TouchableOpacity 
        key={index}
        style={styles.DeadlinesSectiondeadlineCard}
        activeOpacity={0.7}
      >
        {/* Progress Circle */}
        <View style={styles.DeadlinesSectionprogressContainer}>
          <Text style={styles.DeadlinesSectionprogressText}>{deadline.progress}%</Text>
        </View>

        {/* Date */}
        <Text style={styles.DeadlinesSectiondate}>{deadline.date}</Text>

        {/* Title */}
        <Text style={styles.DeadlinesSectiontitle} numberOfLines={2}>
          {deadline.title}
        </Text>

        {/* Subject Tag */}
        <View style={styles.DeadlinesSectionsubjectContainer}>
          <Text style={styles.DeadlinesSectionsubjectText}>{deadline.subject}</Text>
        </View>

        {/* Bottom Row */}
        <View style={styles.DeadlinesSectionbottomRow}>
          <View style={styles.DeadlinesSectiontimeContainer}>
            <MaterialIcons name="access-time" size={16} color="#32D583" />
            <Text style={styles.DeadlinesSectiontimeText}>{deadline.time}</Text>
          </View>
          <View style={styles.DeadlinesSectiontypeContainer}>
            <MaterialIcons name="assignment" size={16} color="#666" />
            <Text style={styles.DeadlinesSectiontypeText}>{deadline.type}</Text>
          </View>
        </View>

        {/* Priority Indicator */}
        {deadline.priority === 'high' && (
          <View style={styles.DeadlinesSectionpriorityIndicator}>
            <MaterialIcons name="bolt" size={20} color="#FF4757" />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.DeadlinesSectioncontainer}>
      {/* Header */}
      <View style={styles.DeadlinesSectionheader}>
        <View style={styles.DeadlinesSectionheaderLeft}>
          <Text style={styles.DeadlinesSectionsectionTitle}>Deadlines</Text>
          <View style={styles.DeadlinesSectionactiveTasksContainer}>
            <Text style={styles.DeadlinesSectionactiveTasksNumber}>{deadlines.length}</Text>
            <Text style={styles.DeadlinesSectionactiveTasksLabel}>Active Tasks</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.DeadlinesSectionfilterButton}>
          <MaterialIcons name="tune" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Filter Pills */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.DeadlinesSectionfilterScroll}
        contentContainerStyle={styles.DeadlinesSectionfilterContainer}
      >
        {[
          { id: 'all', icon: 'grid-view', label: 'All' },
          { id: 'urgent', icon: 'warning', label: 'Urgent' },
          { id: 'upcoming', icon: 'event', label: 'Upcoming' }
        ].map((filter) => (
          <TouchableOpacity
            key={filter.id}
            style={[
              styles.DeadlinesSectionfilterPill,
              selectedFilter === filter.id && styles.DeadlinesSectionfilterPillActive
            ]}
            onPress={() => setSelectedFilter(filter.id)}
          >
            <MaterialIcons 
              name={filter.icon} 
              size={18} 
              color={selectedFilter === filter.id ? '#fff' : '#666'} 
            />
            <Text style={[
              styles.DeadlinesSectionfilterText,
              selectedFilter === filter.id && styles.DeadlinesSectionfilterTextActive
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
        contentContainerStyle={styles.DeadlinesSectioncardsContainer}
      >
        {deadlines.map((deadline, index) => renderDeadlineCard(deadline, index))}
      </ScrollView>
    </View>
  );
};

