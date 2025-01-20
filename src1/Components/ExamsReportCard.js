import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ExamsReportCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Exams Report</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <Text style={styles.noRecord}>No Record Found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F9F9F9',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    elevation: 2,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  noRecord: {
    fontSize: 14,
    color: '#888',
  },
});

export default ExamsReportCard;
