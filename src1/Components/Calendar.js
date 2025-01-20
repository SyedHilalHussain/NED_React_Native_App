import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const renderCalendarDays = () => {
    const days = [];
    const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    // Render week days
    weekDays.forEach(day => {
      days.push(
        <Text key={`weekday-${day}`} style={styles.calendarweekDay}>
          {day}
        </Text>
      );
    });

    // Add empty spaces for first week
    for (let i = 0; i < firstDay; i++) {
      days.push(<View key={`empty-${i}`} style={styles.calendardayCell} />);
    }

    // Render month days
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday = 
        i === new Date().getDate() &&
        currentDate.getMonth() === new Date().getMonth() &&
        currentDate.getFullYear() === new Date().getFullYear();
      days.push(
        <TouchableOpacity
          key={`day-${i}`}
          style={[styles.calendardayCell, isToday && styles.calendartodayCell]}
        >
          <Text style={[styles.calendardayText, isToday && styles.calendartodayText]}>
            {i}
          </Text>
        </TouchableOpacity>
      );
    }

    return days;
  };

  return (
    <View style={styles.calendarcontainer}>
      <View style={styles.calendarheader}>
        <TouchableOpacity onPress={() => changeMonth(-1)} style={styles.calendarnavButton}>
          <MaterialIcons name="chevron-left" size={24} color="#333" />
        </TouchableOpacity>
        <View>
          <Text style={styles.calendarmonth}>{monthNames[currentDate.getMonth()]}</Text>
          <Text style={styles.calendaryear}>{`TUE ${currentDate.getDate()} ${currentDate.getFullYear()}`}</Text>
        </View>
        <TouchableOpacity onPress={() => changeMonth(1)} style={styles.calendarnavButton}>
          <MaterialIcons name="chevron-right" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <View style={styles.calendarcalendar}>
        {renderCalendarDays()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calendarcontainer: {
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  calendarheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#F9FAFB',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  calendarmonth: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF4444',
    textAlign: 'center',
  },
  calendaryear: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
    textAlign: 'center',
  },
  calendarnavButton: {
    padding: 8,
  },
  calendarcalendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  calendarweekDay: {
    width: '14.28%',
    textAlign: 'center',
    paddingVertical: 8,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#888',
  },
  calendardayCell: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
  },
  calendardayText: {
    fontSize: 14,
    color: '#333',
  },
  calendartodayCell: {
    backgroundColor: '#FF4444',
    borderRadius: 20,
  },
  calendartodayText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Calendar;
