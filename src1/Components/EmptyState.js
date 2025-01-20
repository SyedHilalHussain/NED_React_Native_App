import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';  // Correct import
import { Ionicons } from '@expo/vector-icons';

export const EmptyState = ({ onPress, message = "No departments added yet" }) => (
  <TouchableOpacity 
    style={styles.emptyContainer}
    onPress={onPress}
  >
    <View style={styles.dottedBox}>
      <Ionicons name="add-circle-outline" size={40} color="#4B6BFB" />
      <Text style={styles.addText}>Add New</Text>
    </View>
    <Text style={styles.helperText}>{message}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  dottedBox: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#4B6BFB',
    borderRadius: 12,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: '#4B6BFB',
    fontSize: 16,
    marginTop: 8,
    fontWeight: '600',
  },
  helperText: {
    marginTop: 16,
    color: '#666',
    fontSize: 14,
  },
});

export default EmptyState;
