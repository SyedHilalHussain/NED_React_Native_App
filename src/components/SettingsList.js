import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window'); // Get screen width
const scale = (size) => (width / 375) * size; // Scaling utility based on screen width

const settings = [
  { name: 'Add News' },
  { name: 'Add Internship' },
  { name: 'Add Course' },
  { name: 'Add Time Table' },
  { name: 'Add Student' },
];

const SettingsList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      {settings.map((item, index) => (
        <Pressable
          key={index}
          style={({ pressed }) =>
            pressed ? [styles.item, styles.pressedItem] : styles.item // Ensures no undefined style
          }
        >
          <Text style={styles.text}>{item.name}</Text>
          <Ionicons name="chevron-forward" size={scale(20)} color="#D9534F" />
        </Pressable>
      ))}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: scale(20),
    marginHorizontal: scale(20),
    paddingVertical: scale(15),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: scale(5),
    marginTop: scale(10),
  },
  heading: {
    fontSize: scale(18),
    fontWeight: '700',
    fontFamily: 'Poppins-SemiBold',
    color: '#D9534F',
    paddingHorizontal: scale(15),
    marginBottom: scale(15),
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: scale(15),
    paddingHorizontal: scale(15),
    backgroundColor: '#FFFFFF',
    borderRadius: scale(10),
    marginBottom: scale(10),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: scale(3),
    elevation: 1,
  },
  pressedItem: {
    backgroundColor: '#F5F8FA',
  },
  text: {
    fontSize: scale(16),
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#D9534F',
    borderRadius: scale(15),
    paddingVertical: scale(15),
    alignItems: 'center',
    marginTop: scale(20),
    marginHorizontal: scale(15),
  },
  logoutText: {
    fontSize: scale(18),
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },
});

export default SettingsList;
