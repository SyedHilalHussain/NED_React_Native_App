import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

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
        <Text key={`weekday-${day}`} style={styles.weekDayText}>
          {day}
        </Text>
      );
    });

    // Add empty spaces for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<View key={`empty-${i}`} style={styles.dayButton} />);
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
            styles.dayButton,
            isToday && styles.todayButton,
            isSelectedDate(i) && styles.selectedDay,
          ]}
          onPress={() => handleDateSelect(i)}
        >
          <Text
            style={[
              styles.dayText,
              isToday && styles.todayText,
              isSelectedDate(i) && styles.selectedDayText,
            ]}
          >
            {i}
          </Text>
        </TouchableOpacity>
      );
    }

    // Fill remaining spaces in the last row (6x7 grid)
    while (days.length % 7 !== 0) {
      days.push(<View key={`empty-tail-${days.length}`} style={styles.dayButton} />);
    }

    return days;
  };

  const monthYear = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

  return (
    <TouchableOpacity
      style={styles.overlay}
      activeOpacity={1}
      onPress={onClose}
    >
      <BlurView intensity={20} tint="dark" style={styles.calendarContainer}>
        <TouchableOpacity activeOpacity={1} onPress={(e) => e.stopPropagation()}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={goToPreviousMonth}>
              <Ionicons name="chevron-back" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.monthYearText}>{monthYear}</Text>
            <TouchableOpacity onPress={goToNextMonth}>
              <Ionicons name="chevron-forward" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Calendar */}
          <View style={styles.weekDaysContainer}>{renderCalendarDays()}</View>
        </TouchableOpacity>
      </BlurView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  calendarContainer: {
    width: width - 40,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "rgba(30, 41, 59, 0.7)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  monthYearText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  weekDaysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  weekDayText: {
    width: "14.28%",
    textAlign: "center",
    color: "#94a3b8",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 10,
  },
  dayButton: {
    width: "14.28%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  dayText: {
    color: "#fff",
    fontSize: 16,
  },
  todayButton: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    
  },
  todayText: {
    color: "#fff",
    fontWeight: "600",
    padding: 10,
  },
  selectedDay: {
    backgroundColor: "#007AFF",
    borderRadius: (width - 80) / 14,
  },
  selectedDayText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default CustomCalendar;
