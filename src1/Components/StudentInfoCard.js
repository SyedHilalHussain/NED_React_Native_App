import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const StudentInfoCard = ({ name, fatherName, id }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://via.placeholder.com/100' }}
        style={styles.profileImage}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.details}>FATHER: {fatherName}</Text>
        <Text style={styles.details}>ID: {id}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#0066CC',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  info: {
    marginLeft: 15,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    color: 'white',
    fontSize: 14,
  },
});

export default StudentInfoCard;
