import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DateSelector = ({ selectedDate, onSelectDate }) => {
  const dates = [
    { day: 18, weekday: 'Mon' },
    { day: 19, weekday: 'Tue' },
    { day: 20, weekday: 'Wed' },
    { day: 21, weekday: 'Thu' },
    { day: 22, weekday: 'Fri' },
  ];

  return (
    <View style={styles.container}>
      {dates.map((date, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.dateItem,
            selectedDate === date.day && styles.selectedDate
          ]}
          onPress={() => onSelectDate(date.day)}
        >
          <Text style={[
            styles.dayText,
            selectedDate === date.day && styles.selectedText
          ]}>
            {date.day}
          </Text>
          <Text style={[
            styles.weekdayText,
            selectedDate === date.day && styles.selectedText
          ]}>
            {date.weekday}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 16,
  },
  dateItem: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    minWidth: 60,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  selectedDate: {
    backgroundColor: '#D9534F',
  },
  dayText: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#212121',
  },
  weekdayText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#757575',
    marginTop: 4,
  },
  selectedText: {
    color: '#FFFFFF',
  },
});

export default DateSelector;
