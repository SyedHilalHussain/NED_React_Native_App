import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../Screens/styles";
const { width } = Dimensions.get("window");

const CustomCalendar = ({ onClose, onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

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

  const isSelectedDate = (day) => {
    if (!day) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentDate.getMonth() &&
      selectedDate.getFullYear() === currentDate.getFullYear()
    );
  };

  const handleDateSelect = (day) => {
    if (!day) return;
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(newDate);
    if (onSelectDate) {
      onSelectDate(newDate);
    }
  };

  const renderCalendarDays = () => {
    const days = [];

    // Render week days
    daysInWeek.forEach((day) => {
      days.push(
        <Text key={`weekday-${day}`} style={styles.CustomCalendarweekDayText}>
          {day}
        </Text>
      );
    });

    // Add empty spaces for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<View key={`empty-${i}`} style={styles.CustomCalendardayButton} />);
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
          style={[
            styles.CustomCalendardayButton,
            isToday && styles.CustomCalendartodayButton,
            isSelectedDate(i) && styles.CustomCalendarselectedDay,
          ]}
          onPress={() => handleDateSelect(i)}
        >
          <Text
            style={[
              styles.CustomCalendardayText,
              isToday && styles.CustomCalendartodayText,
              isSelectedDate(i) && styles.CustomCalendarselectedDayText,
            ]}
          >
            {i}
          </Text>
        </TouchableOpacity>
      );
    }

    // Fill remaining spaces in the last row (6x7 grid)
    while (days.length % 7 !== 0) {
      days.push(<View key={`empty-tail-${days.length}`} style={styles.CustomCalendardayButton} />);
    }

    return days;
  };

  const monthYear = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

  return (
    <TouchableOpacity
      style={styles.CustomCalendaroverlay}
      activeOpacity={1}
      onPress={onClose}
    >
      <BlurView intensity={20} tint="dark" style={styles.CustomCalendarcalendarContainer}>
        <TouchableOpacity activeOpacity={1} onPress={(e) => e.stopPropagation()}>
          {/* Header */}
          <View style={styles.CustomCalendarheader}>
            <TouchableOpacity onPress={goToPreviousMonth}>
              <Ionicons name="chevron-back" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.CustomCalendarmonthYearText}>{monthYear}</Text>
            <TouchableOpacity onPress={goToNextMonth}>
              <Ionicons name="chevron-forward" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Calendar */}
          <View style={styles.CustomCalendarweekDaysContainer}>{renderCalendarDays()}</View>
        </TouchableOpacity>
      </BlurView>
    </TouchableOpacity>
  );
};



export default CustomCalendar;
