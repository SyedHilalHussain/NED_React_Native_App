import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

// Get screen dimensions
const { width } = Dimensions.get('window');

// Utility function for scaling
const scale = (size) => (width / 375) * size;

const NotificationCard = ({ name, message, time, image }) => {
  return (
    <View style={styles.card}>
      {/* Profile Image */}
      <Image source={image} style={styles.image} />

      {/* Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: scale(15),
    padding: scale(15),
    marginBottom: scale(15),
    shadowColor: '#D9534F',
    shadowOpacity: 0.1,
    shadowRadius: scale(5),
    shadowOffset: { width: 0, height: scale(2) },
    elevation: 3,
  },
  image: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    marginRight: scale(15),
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: scale(16),
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
    marginBottom: scale(5),
  },
  message: {
    fontSize: scale(14),
    fontFamily: 'Poppins-Regular',
    color: '#555',
    marginBottom: scale(8),
  },
  time: {
    fontSize: scale(12),
    fontFamily: 'Poppins-Regular',
    color: '#A5A5A5',
  },
});

export default NotificationCard;
