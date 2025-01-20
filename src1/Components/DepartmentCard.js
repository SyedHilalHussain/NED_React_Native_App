import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';  // Correct import
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const DepartmentCard = ({ 
  name, 
  studentCount, 
  genderStats, 
  onEdit, 
  onDelete 
}) => (
  <View style={styles.cardContainer}>
    <View style={styles.cardHeader}>
      <Text style={styles.departmentName}>{name}</Text>
      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={onEdit} style={styles.iconButton}>
          <MaterialCommunityIcons name="pencil" size={20} color="#4B6BFB" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.iconButton}>
          <MaterialCommunityIcons name="delete" size={20} color="#FF4B55" />
        </TouchableOpacity>
      </View>
    </View>
    
    <View style={styles.statsContainer}>
      <View style={styles.studentCount}>
        <Text style={styles.countNumber}>{studentCount}</Text>
        <Text style={styles.countLabel}>STUDENTS</Text>
      </View>
      <View style={styles.genderStats}>
        {Object.entries(genderStats).map(([gender, { percentage, count }]) => (
          <View key={gender} style={styles.genderItem}>
            <View style={styles.percentageRing}>
              <Text style={styles.percentageText}>{percentage}%</Text>
            </View>
            <Text style={styles.genderLabel}>{gender}</Text>
            <Text style={styles.genderCount}>{count}</Text>
          </View>
        ))}
      </View>
    </View>
  </View>
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
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  departmentName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  studentCount: {
    alignItems: 'flex-start',
  },
  countNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  countLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  genderStats: {
    flexDirection: 'row',
    gap: 16,
  },
  genderItem: {
    alignItems: 'center',
  },
  percentageRing: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: '#4B6BFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4B6BFB',
  },
  genderLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  genderCount: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1A1A1A',
  },
});
export default DepartmentCard;