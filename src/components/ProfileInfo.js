import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window'); // Get screen width
const scale = (size) => (width / 375) * size; // Scaling utility based on screen width

const ProfileInfo = () => {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image
        source={require('../assets/images/istockphoto-1171169127-612x612.jpg')} // Local image
        style={styles.avatar}
      />

      {/* Name */}
      <Text style={styles.name}>Joe Samanta</Text>

      {/* Role */}
      <View style={styles.role}>
        <Ionicons name="school-outline" size={scale(14)} color="#FFA500" />
        <Text style={styles.roleText}>Student</Text>
      </View>

      {/* Email */}
      <View style={styles.detailRow}>
        <Ionicons name="mail-outline" size={scale(16)} color="#D9534F" />
        <Text style={styles.detailText}>Joesamanta@gmail.com</Text>
      </View>

      {/* Location */}
      <View style={styles.detailRow}>
        <Ionicons name="location-outline" size={scale(16)} color="#D9534F" />
        <Text style={styles.detailText}>Daerah Istimewa Yogyakarta</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: scale(20),
    paddingVertical: scale(20),
    paddingHorizontal: scale(15),
    marginHorizontal: scale(20),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: scale(5),
    marginBottom: scale(20),
  },
  avatar: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(50),
    borderWidth: scale(2),
    borderColor: '#D9534F',
    marginBottom: scale(10),
  },
  name: {
    fontSize: scale(22),
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    color: '#333',
    marginBottom: scale(5),
  },
  role: {
    fontSize: scale(14),
    flexDirection: 'row',
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    color: '#FFA500',
    alignItems: 'center',
    marginVertical: scale(5),
  },
  roleText: {
    fontSize: scale(14),
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    color: '#FFA500',
    marginLeft: scale(3), // Space between icon and text
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(5),
  },
  detailText: {
    fontSize: scale(15),
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: '#555',
    marginLeft: scale(5),
  },
});

export default ProfileInfo;
