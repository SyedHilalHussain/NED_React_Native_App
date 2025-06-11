import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../AdminPortal_Css';

export const InternshipCard = ({ internship }) => {
  const navigation = useNavigation();

  const handleEdit = () => {
    navigation.navigate('EditInternshipScreen', { internshipData: internship });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case true:
        return '#10B981'; // green
      
      case false:
        return '#EF4444'; // red
      default:
        return '#6B7280'; // gray
    }
  };

  const getDurationIcon = (duration) => {
    if (duration.includes('6 months')) {
      return 'date-range';
    } else if (duration.includes('week')) {
      return 'view-week';
    } else {
      return 'schedule';
    }
  };

  return (
    <View style={styles.InternshipCardcard}>
      <View style={styles.InternshipCardheader}>
        <View style={styles.InternshipCardcompanySection}>
          <View style={styles.InternshipCardcompanyIconContainer}>
            <MaterialIcons name="business" size={24} color="#6C63FF" />
          </View>
          <View>
            <Text style={styles.InternshipCardcompanyName}>{internship.companyName}</Text>
            <Text style={styles.InternshipCardlocation}>
              <MaterialIcons name="location-on" size={14} color="#6B7280" />
              {" " + internship.location}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.InternshipCardeditButton}
          onPress={handleEdit}
        >
          <MaterialIcons name="edit" size={20} color="#6C63FF" />
        </TouchableOpacity>
      </View>

      <View style={styles.InternshipCardcontent}>
        <Text style={styles.InternshipCardtitle}>{internship.title}</Text>

        <View style={styles.InternshipCardtagContainer}>
          <View style={[styles.InternshipCardtag, { backgroundColor: '#EEF0FB' }]}>
            <MaterialIcons name={getDurationIcon(internship.duration)} size={16} color="#6C63FF" />
            <Text style={styles.InternshipCardtagText}>{internship.duration}</Text>
          </View>
          <View style={[styles.InternshipCardtag, { backgroundColor: '#EEF0FB' }]}>
            <MaterialIcons name="work" size={16} color="#6C63FF" />
            <Text style={styles.InternshipCardtagText}>{internship.departmentTitle}</Text>
          </View>
          <View style={[styles.InternshipCardtag, { backgroundColor: '#EEF0FB' }]}>
            <MaterialIcons name="work" size={16} color="#6C63FF" />
            <Text style={styles.InternshipCardtagText}>{internship.year} Semester</Text>
          </View>
          <View style={[styles.InternshipCardtag, { backgroundColor: '#EEF0FB' }]}>
            <MaterialIcons name="payments" size={16} color="#6C63FF" />
            <Text style={styles.InternshipCardtagText}>{internship.stippend}pkr</Text>
          </View>
        </View>

        <View style={styles.InternshipCarddetailsContainer}>
          <View style={styles.InternshipCarddetailItem}>
            <MaterialIcons name="group" size={16} color="#6B7280" />
            <Text style={styles.InternshipCarddetailText}>{internship.position} positions</Text>
          </View>
          <View style={styles.InternshipCarddetailItem}>
            <MaterialIcons name="event" size={16} color="#6B7280" />
            <Text style={styles.InternshipCarddetailText}>Apply before {internship.applicationDeadline}</Text>
          </View>
        </View>

        <View style={styles.InternshipCardfooter}>
        <View style={[styles.InternshipCardstatusTag, { backgroundColor: `${getStatusColor(internship.isActive)}20` }]}>
  <View style={[styles.InternshipCardstatusDot, { backgroundColor: getStatusColor(internship.isActive) }]} />
  
  <Text style={[styles.InternshipCardstatusText, { color: getStatusColor(internship.isActive) }]}>
    {internship.isActive ? 'Active' : 'Deactive'}  {/* Conditional Text */}
  </Text>
</View>

          <Text style={styles.InternshipCardpostedDate}>Posted {internship.postedDate}</Text>
        </View>
      </View>
    </View>
  );
};
