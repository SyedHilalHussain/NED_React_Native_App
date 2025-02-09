import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import HeaderBackground from './HeaderBackground ';
import { styles } from '../Screens/styles';

export const  InternshipHeader = ({ userInfo, navigation }) => {
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

