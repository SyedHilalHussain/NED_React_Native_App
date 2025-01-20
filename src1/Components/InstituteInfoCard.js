import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InstituteInfoCard = ({ instituteName, tagline }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.instituteName}>{instituteName}</Text>
      <Text style={styles.tagline}>{tagline}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4F79E3',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  instituteName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tagline: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
});

export default InstituteInfoCard;
