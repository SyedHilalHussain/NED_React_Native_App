import React from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../Screens/styles';
import { Ionicons,MaterialIcons } from '@expo/vector-icons';
import HeaderBackground from './HeaderBackground ';


export const Top = ({ userInfo,navigation }) => {
    return (
      <View style={styles.Topheader}>
      <HeaderBackground />

        <View style={styles.TopheaderTop}>
          <View style={styles.TopprofileSection}>
            <View style={styles.TopprofileImageContainer}>
              <Image source={userInfo.profileImage} style={styles.TopprofileImage} />
              <View style={styles.ToponlineIndicator} />
            </View>
            <View style={styles.TopheaderText}>
              <Text style={styles.TopwelcomeText}>Welcome back</Text>
              <Text style={styles.TopnameText}>{userInfo.name}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.TopnotificationButton}>
            <Ionicons name="notifications-outline" size={24} color="#ffffff" />
            <View style={styles.TopnotificationBadge} />
          </TouchableOpacity>
        </View>
        <View style={styles.TopprogramCard}>
          <View style={styles.TopprogramInfo}>
            <Text style={styles.Topsemester}>{userInfo.semester}</Text>
            <Text style={styles.Topmajor}>{userInfo.program}</Text>
            <Text style={styles.Topbatch}>Batch {userInfo.batch}</Text>
          </View>
          <TouchableOpacity style={styles.TopviewProfileButton} onPress={() => navigation.navigate('StudentProfile')}>
            <Text style={styles.TopviewProfileText}>View Profile</Text>
            <MaterialIcons name="arrow-forward-ios" size={16} color="#ffffff" style={styles.ToparrowIcon} />
          </TouchableOpacity>
        </View>
        </View>
    );
  };
  

