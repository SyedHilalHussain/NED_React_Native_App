import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { CustomHeader } from '../Components/CustomHeader';
import { DepartmentStats } from '../Components/DepartmentStats';
import EmptyState from '../Components/EmptyState';

export const DepartmentList = ({ navigation }) => {
  const departments = [
    {
      id: 1,
      name: 'Computer Science',
      totalStudents: 120,
      genderStats: {
        boys: { percentage: 60, count: 72 },
        girls: { percentage: 40, count: 48 }
      }
    },
    {
      id: 2,
      name: 'Mechanical Engineering',
      totalStudents: 95,
      genderStats: {
        boys: { percentage: 75, count: 71 },
        girls: { percentage: 25, count: 24 }
      }
    },
    {
      id: 3,
      name: 'Civil Engineering',
      totalStudents: 150,
      genderStats: {
        boys: { percentage: 80, count: 120 },
        girls: { percentage: 20, count: 30 }
      }
    },
    {
      id: 4,
      name: 'Computer Science',
      totalStudents: 120,
      genderStats: {
        boys: { percentage: 60, count: 72 },
        girls: { percentage: 40, count: 48 }
      }
    },
    {
      id: 5,
      name: 'Mechanical Engineering',
      totalStudents: 95,
      genderStats: {
        boys: { percentage: 75, count: 71 },
        girls: { percentage: 25, count: 24 }
      }
    },
    {
      id: 6,
      name: 'Civil Engineering',
      totalStudents: 150,
      genderStats: {
        boys: { percentage: 80, count: 120 },
        girls: { percentage: 20, count: 30 }
      }
    },
  ];

  const handleAddDepartment = () => {
    navigation.navigate('AddDepartment');
  };

  const handleEditDepartment = (id) => {
    navigation.navigate('EditDepartment', { id });
  };

  const handleDeleteDepartment = (id) => {
    console.log('Delete department:', id);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader 
        title="Departments"
        navigation={navigation}
      />
      
      <View style={styles.container}>
        {departments.length === 0 ? (
          <EmptyState onPress={handleAddDepartment} />
        ) : (
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {departments.map((department) => (
              <DepartmentStats
                key={department.id}
                department={department}
                onEdit={() => handleEditDepartment(department.id)}
                onDelete={() => handleDeleteDepartment(department.id)}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 16,
  },
});