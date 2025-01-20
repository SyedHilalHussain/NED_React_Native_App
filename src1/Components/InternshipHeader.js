import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import HeaderBackground from './HeaderBackground ';

export const InternshipHeader = ({ userInfo, navigation }) => {
  return (
    <View style={styles.InternshipHeaderheader}>
      <HeaderBackground />

      {/* Keep the original top section */}
      <View style={styles.InternshipHeaderheaderTop}>
        <View style={styles.InternshipHeaderprofileSection}>
          <View style={styles.InternshipHeaderprofileImageContainer}>
            <Image source={userInfo.profileImage} style={styles.InternshipHeaderprofileImage} />
            <View style={styles.InternshipHeaderonlineIndicator} />
          </View>
          <View style={styles.InternshipHeaderheaderText}>
            <Text style={styles.InternshipHeaderwelcomeText}>Welcome back</Text>
            <Text style={styles.InternshipHeadernameText}>{userInfo.name}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.InternshipHeadernotificationButton}>
          <Ionicons name="notifications-outline" size={30} color="#ffffff" />
          <View style={styles.InternshipHeadernotificationBadge} />
        </TouchableOpacity>
      </View>

      {/* New internship search and filter section (replacing program card) */}
      <View style={styles.InternshipHeadersearchSection}>
        {/* Search Bar */}
        <BlurView intensity={20} tint="dark" style={styles.InternshipHeadersearchBar}>
          <Ionicons name="search-outline" size={20} color="rgba(255, 255, 255, 0.7)" />
          <TouchableOpacity style={styles.InternshipHeadersearchInput}>
            <Text style={styles.InternshipHeadersearchPlaceholder}>Search internships...</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.InternshipHeaderfilterButton}>
            <Ionicons name="options-outline" size={20} color="#ffffff" />
          </TouchableOpacity>
        </BlurView>

        {/* Filter Chips */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.InternshipHeaderfilterContainer}
        >
          <TouchableOpacity style={styles.InternshipHeaderfilterChip}>
            <MaterialIcons name="work-outline" size={16} color="#fff" />
            <Text style={styles.InternshipHeaderfilterText}>All Roles</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.InternshipHeaderfilterChip, styles.InternshipHeaderactiveChip]}>
            <Ionicons name="code-outline" size={16} color="#fff" />
            <Text style={styles.InternshipHeaderfilterText}>Tech</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.InternshipHeaderfilterChip}>
            <Ionicons name="brush-outline" size={16} color="#fff" />
            <Text style={styles.InternshipHeaderfilterText}>Design</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.InternshipHeaderfilterChip}>
            <Ionicons name="analytics-outline" size={16} color="#fff" />
            <Text style={styles.InternshipHeaderfilterText}>Business</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.InternshipHeaderfilterChip}>
            <Ionicons name="home-outline" size={16} color="#fff" />
            <Text style={styles.InternshipHeaderfilterText}>Remote</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Keep original header styles
  InternshipHeaderheader: {
    paddingTop: 48,
    // paddingBottom: 32,
    // marginBottom: 30,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  InternshipHeaderheaderTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  InternshipHeaderprofileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  InternshipHeaderprofileImageContainer: {
    position: 'relative',
  },
  InternshipHeaderprofileImage: {
    width: 65,
    height: 65,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  InternshipHeaderonlineIndicator: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#10B981',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  InternshipHeaderheaderText: {
    marginLeft: 16,
  },
  InternshipHeaderwelcomeText: {
    color: '#ffffff',
    fontSize: 14,
    opacity: 0.9,
    fontWeight: '500',
  },
  InternshipHeadernameText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  InternshipHeadernotificationButton: {
    width: 65,
    height: 65,
    borderRadius: 32,
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  InternshipHeadernotificationBadge: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#EF4444',
    borderWidth: 2,
    borderColor: '#ffffff',
  },

  // New styles for internship search section
  InternshipHeadersearchSection: {
    paddingHorizontal: 16,
    gap: 16,
    marginTop: 8,
  },
  InternshipHeadersearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
    borderRadius: 26,
    padding: 12,
    marginBottom: 12,
    overflow: "hidden",
  },
  InternshipHeadersearchInput: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  InternshipHeadersearchPlaceholder: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
  },
  InternshipHeaderfilterButton: {
    padding: 4,
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
    borderRadius: 8,
  },
  InternshipHeaderfilterContainer: {
    flexDirection: 'row',
    paddingVertical: 4,
    gap: 8,
  },
  InternshipHeaderfilterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 6,
  },
  InternshipHeaderactiveChip: {
    backgroundColor: '#2EB086',
  },
  InternshipHeaderfilterText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
});