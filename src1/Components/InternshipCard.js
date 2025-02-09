import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { styles } from '../Screens/styles';
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
    <View style={styles.InternshipCardcardWrapper}>
      <TouchableOpacity style={styles.InternshipCardcard} activeOpacity={0.7}>
        {/* Company Header */}
        <View style={styles.InternshipCardheader}>
          <View style={styles.InternshipCardlogoContainer}>
            <Image source={{ uri: logo }} style={styles.InternshipCardlogo} />
          </View>
          <View style={styles.InternshipCardheaderContent}>
            <Text style={styles.InternshipCardcompanyName}>{company}</Text>
            <View style={styles.InternshipCardlocationContainer}>
              <Ionicons name="location-outline" size={14} color="#94A3B8" />
              <Text style={styles.InternshipCardlocationText}>{location}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.InternshipCardmenuButton}>
            <MaterialIcons name="more-horiz" size={20} color="#94A3B8" />
          </TouchableOpacity>
        </View>

        {/* Position */}
        <Text style={styles.InternshipCardpositionTitle}>{position}</Text>

        {/* Tags Row */}
        <View style={styles.InternshipCardtagsRow}>
          <View style={styles.InternshipCardtag}>
            <MaterialIcons name="work-outline" size={14} color="#94A3B8" />
            <Text style={styles.InternshipCardtagText}>{type}</Text>
          </View>
          <View style={styles.InternshipCardtag}>
            <MaterialIcons name="schedule" size={14} color="#94A3B8" />
            <Text style={styles.InternshipCardtagText}>{deadline}</Text>
          </View>
         
        </View>

        {/* Progress Bar */}
        <View style={styles.InternshipCardprogressContainer}>
          <View style={styles.InternshipCardprogressBar}>
            <View 
              style={[
                styles.InternshipCardprogressFill, 
                { width: `${(applicants/totalSpots) * 100}%` }
              ]} 
            />
          </View>
          <Text style={styles.InternshipCardprogressText}>
            {applicants}/{totalSpots} applications
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.InternshipCardactions}>
          <TouchableOpacity 
            style={styles.InternshipCardbookmarkButton}
            activeOpacity={0.8}
          >
            <MaterialIcons name="bookmark-outline" size={20} color="#2EB086" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.InternshipCardapplyButton}
            activeOpacity={0.9}
          >
            <Text style={styles.InternshipCardapplyButtonText}>Quick Apply</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

