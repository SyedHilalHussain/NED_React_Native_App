import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

export const InternshipCard = ({ 
  company, 
  position, 
  location= "Karachi", 
  deadline, 
  logo, 
  type = "Full-time",
  applicants = 45,
  totalSpots = 50 
}) => {
  return (
    <View style={styles.cardWrapper}>
      <TouchableOpacity style={styles.card} activeOpacity={0.7}>
        {/* Company Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image source={{ uri: logo }} style={styles.logo} />
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.companyName}>{company}</Text>
            <View style={styles.locationContainer}>
              <Ionicons name="location-outline" size={14} color="#94A3B8" />
              <Text style={styles.locationText}>{location}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.menuButton}>
            <MaterialIcons name="more-horiz" size={20} color="#94A3B8" />
          </TouchableOpacity>
        </View>

        {/* Position */}
        <Text style={styles.positionTitle}>{position}</Text>

        {/* Tags Row */}
        <View style={styles.tagsRow}>
          <View style={styles.tag}>
            <MaterialIcons name="work-outline" size={14} color="#94A3B8" />
            <Text style={styles.tagText}>{type}</Text>
          </View>
          <View style={styles.tag}>
            <MaterialIcons name="schedule" size={14} color="#94A3B8" />
            <Text style={styles.tagText}>{deadline}</Text>
          </View>
         
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${(applicants/totalSpots) * 100}%` }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            {applicants}/{totalSpots} applications
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          <TouchableOpacity 
            style={styles.bookmarkButton}
            activeOpacity={0.8}
          >
            <MaterialIcons name="bookmark-outline" size={20} color="#2EB086" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.applyButton}
            activeOpacity={0.9}
          >
            <Text style={styles.applyButtonText}>Quick Apply</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    margin: 16,
    borderRadius: 16,
    padding: 1.2,
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
  },
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  logoContainer: {
    padding: 8,
    backgroundColor: '#262626',
    borderRadius: 12,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 8,
  },
  headerContent: {
    flex: 1,
    marginLeft: 12,
  },
  companyName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    letterSpacing: 0.2,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: '#94A3B8',
    fontSize: 13,
    marginLeft: 4,
  },
  menuButton: {
    padding: 4,
    marginLeft: 8,
  },
  positionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 14,
    letterSpacing: 0.3,
  },
  tagsRow: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    gap: 4,
  },
  spotsTag: {
    backgroundColor: 'rgba(46, 176, 134, 0.15)',
  },
  tagText: {
    color: '#94A3B8',
    fontSize: 13,
  },
  spotsText: {
    color: '#2EB086',
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressBar: {
    height: 4,
    backgroundColor: 'rgba(46, 176, 134, 0.15)',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2EB086',
    borderRadius: 2,
  },
  progressText: {
    color: '#94A3B8',
    fontSize: 12,
    textAlign: 'right',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  bookmarkButton: {
    backgroundColor: 'rgba(46, 176, 134, 0.15)',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
  },
  applyButton: {
    flex: 1,
    backgroundColor: '#2EB086',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});