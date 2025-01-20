import React from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons,MaterialIcons } from '@expo/vector-icons';
import HeaderBackground from './HeaderBackground ';


export const Top = ({ userInfo,navigation }) => {
    return (
      <View style={styles.header}>
      <HeaderBackground />

        <View style={styles.headerTop}>
          <View style={styles.profileSection}>
            <View style={styles.profileImageContainer}>
              <Image source={userInfo.profileImage} style={styles.profileImage} />
              <View style={styles.onlineIndicator} />
            </View>
            <View style={styles.headerText}>
              <Text style={styles.welcomeText}>Welcome back</Text>
              <Text style={styles.nameText}>{userInfo.name}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={24} color="#ffffff" />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>
        <View style={styles.programCard}>
          <View style={styles.programInfo}>
            <Text style={styles.semester}>{userInfo.semester}</Text>
            <Text style={styles.major}>{userInfo.program}</Text>
            <Text style={styles.batch}>Batch {userInfo.batch}</Text>
          </View>
          <TouchableOpacity style={styles.viewProfileButton} onPress={() => navigation.navigate('StudentProfile')}>
            <Text style={styles.viewProfileText}>View Profile</Text>
            <MaterialIcons name="arrow-forward-ios" size={16} color="#ffffff" style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
        </View>
    );
  };
  


const styles = StyleSheet.create({ 
 // Header Styles
 header: {
    // padding: 24,
    paddingTop: 48,
    paddingBottom: 32,
    marginBottom:30,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#10B981',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  headerText: {
    marginLeft: 16,
  },
  welcomeText: {
    color: '#ffffff',
    fontSize: 14,
    opacity: 0.9,
    fontWeight: '500',
  },
  nameText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  notificationButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  programCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 20,
    padding: 16,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    
  },
  programInfo: {
    flex: 1,
  },
  semester: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  major: {
    color: '#ffffff',
    fontSize: 14,
    opacity: 0.9,
    marginTop: 4,
  },
  batch: {
    color: '#ffffff',
    fontSize: 12,
    opacity: 0.8,
    marginTop: 4,
  },
  viewProfileButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewProfileText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    marginRight: 4,
  },
  arrowIcon: {
    marginLeft: 4,
  },
});