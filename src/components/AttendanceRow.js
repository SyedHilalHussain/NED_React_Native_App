import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function AttendanceRow({navigation}) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>Today Attendance</Text>
      <LinearGradient
        colors={['#A2C2FF', '#88AFFF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.buttonGradient}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Attendance')} style={styles.button}>
          <Text style={styles.buttonText}>Check</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(226, 234, 253, 0.85)',
    marginHorizontal: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 15,
    color: '#000000',
    fontWeight: '500',
  },
  buttonGradient: {
    borderRadius: 50,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },
});