// DateStrip.js
import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { useDateContext } from './DateContext';
import { styles } from "../Screens/styles";
const DateStrip = ({ onCalendarPress }) => {
  const { selectedDate, setSelectedDate } = useDateContext();
  const [currentDate, setCurrentDate] = useState(new Date());

  const goToPreviousMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const goToNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const getMonthYearString = (date) => {
    const months = ["January", "February", "March", "April", "May", "June", 
                   "July", "August", "September", "October", "November", "December"];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const getDayName = (date) => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[date.getDay()];
  };

  const getDatesForWeek = () => {
    const dates = [];
    const today = new Date(currentDate);
    const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1));

    for (let i = 0; i < 7; i++) {
      const date = new Date(firstDayOfWeek);
      date.setDate(firstDayOfWeek.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const isSelectedDate = (date) => {
    return selectedDate.toDateString() === date.toDateString();
  };

  return (
    <BlurView intensity={40} tint="dark" style={styles.DateStripdatescontainer}>
      <View style={styles.DateStripheaderRow}>
        <View style={styles.DateStripcalendarRow}>
          <TouchableOpacity onPress={onCalendarPress}>
            <Ionicons name="calendar-outline" size={24} color="#fff" style={styles.DateStripcalendarIcon} />
          </TouchableOpacity>
          <Text style={styles.DateStripmonthYearText}>{getMonthYearString(currentDate)}</Text>
        </View>
        <View style={styles.DateStripnavigationButtons}>
          <TouchableOpacity onPress={goToPreviousMonth}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={goToNextMonth}>
            <Ionicons name="chevron-forward" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.DateStripdaysContainer}>
        {getDatesForWeek().map((date, index) => {
          const isToday = date.toDateString() === new Date().toDateString();
          const isSelected = isSelectedDate(date);
          return (
            <TouchableOpacity key={index} style={styles.DateStripdayColumn} onPress={() => setSelectedDate(date)}>
              <Text style={[styles.DateStripdayText, isToday && styles.DateStriptodayDayText, isSelected && styles.DateStripselectedDayText]}>
                {getDayName(date)}
              </Text>
              <View style={[styles.DateStripdateContainer, isToday && styles.DateStriptodayDateContainer, isSelected && styles.DateStripselectedDateContainer]}>
                <Text style={[styles.DateStripdateText, isToday && styles.DateStriptodayDateText, isSelected && styles.DateStripselectedDateText]}>
                  {date.getDate()}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </BlurView>
  );
};



export default DateStrip;