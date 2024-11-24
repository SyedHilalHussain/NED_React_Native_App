import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';

export default function StudentDetails({navigation}) {
  return (
    <View style={styles.container}>
      {/* Top Row with Avatar and Details */}
      <View style={styles.row}>
        <Image
          source={{ uri: 'https://avatar.iran.liara.run/public/boy?username=Ash' }}
          style={styles.avatar}
        />
        <View style={styles.details}>
          <Text style={styles.name}>Stefani Wong</Text>
          <Text style={styles.program}>Lose a Fat Program</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Row */}
      <View style={styles.stats}>
        <View style={[styles.statCard, styles.expandedCard]}>
          <Text style={styles.stat}>3.5</Text>
          <Text style={styles.label}>CGPA</Text>
        </View>
        <View style={[styles.statCard, styles.expandedCard]}>
          <Text style={styles.stat}>90%</Text>
          <Text style={styles.label}>Attendance</Text>
        </View>
        <View style={[styles.statCard, styles.expandedCard]}>
          <Text style={styles.stat}>7th</Text>
          <Text style={styles.label}>Semester</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#F5F9FF', // Light gray-blue background
    borderRadius: 12, // Rounded container edges
    marginHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingEnd: 26,
  },
  avatar: {
    width: 62,
    height: 62,
    borderRadius: 24,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D3748', // Dark gray
    marginBottom: 4,
  },
  program: {
    fontSize: 12,
    color: '#718096', // Lighter gray
  },
  edit: {
    color: '#D9534F',
    fontWeight: '600',
    fontSize: 14,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  statCard: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',

    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 12, // Rounded card edges
  
    // elevation: 1, // Light shadow on Android
  },
  expandedCard: {
    flex: 1, // Make the card expand
    marginHorizontal: 6, // Space between cards
  },
  stat: {
    fontSize: 18,
    fontWeight: '400',
    color: '#D9534F', // Slightly darker purple
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: '#A0AEC0', // Gray text for labels
  },
});
