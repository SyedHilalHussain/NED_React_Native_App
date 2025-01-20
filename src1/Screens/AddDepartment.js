import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';  
import Header from '../Components/Header1';
// import { CustomHeader } from '../Components/CustomHeader'; // Correct way to import named export


export const AddDepartment = ({ navigation }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    monthlyFees: '',
    headOfDepartment: '',
  });

  const handleSubmit = async () => {
    // This will be integrated with your .NET backend
    try {
      // API call will go here
      navigation.goBack();
    } catch (error) {
      console.error('Error creating department:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Add New Department" showBack />
      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Department Name*</Text>
          <TextInput
            style={styles.input}
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
            placeholder="Enter department name"
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Monthly Fees*</Text>
          <TextInput
            style={styles.input}
            value={formData.monthlyFees}
            onChangeText={(text) => setFormData({ ...formData, monthlyFees: text })}
            placeholder="Enter monthly fees"
            keyboardType="numeric"
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Head of Department*</Text>
          <TextInput
            style={styles.input}
            value={formData.headOfDepartment}
            onChangeText={(text) => setFormData({ ...formData, headOfDepartment: text })}
            placeholder="Select head of department"
            placeholderTextColor="#666"
          />
        </View>

        <TouchableOpacity 
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Create Department</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  form: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  submitButton: {
    backgroundColor: '#4B6BFB',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
