// File: screens/StudentPortal.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StudentPortal() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Student Portal Placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' },
  text: { fontSize: 20, color: '#000' },
});
