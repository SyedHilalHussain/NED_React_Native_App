import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  
} from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";



const DateStrip = ({ onCalendarPress }) => {
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

  // Format month and year
  const getMonthYearString = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  // Get day name
  const getDayName = (date) => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[date.getDay()];
  };

  // Get dates for the current week
  const getDatesForWeek = () => {
    const dates = [];
    const today = new Date(currentDate);
    const firstDayOfWeek = new Date(
      today.setDate(today.getDate() - today.getDay() + 1)
    );

    for (let i = 0; i < 7; i++) {
      const date = new Date(firstDayOfWeek);
      date.setDate(firstDayOfWeek.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  return (
    <BlurView intensity={40} tint="dark" style={styles.DateStripdatescontainer}>
      <View style={styles.DateStripheaderRow}>
        <View style={styles.DateStripcalendarRow}>
          <TouchableOpacity onPress={onCalendarPress}>
            <Ionicons
              name="calendar-outline"
              size={24}
              color="#fff"
              style={styles.DateStripcalendarIcon}
            />
          </TouchableOpacity>
          <Text style={styles.DateStripmonthYearText}>
            {getMonthYearString(currentDate)}
          </Text>
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
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.DateStripdaysContainer}
      >
        {getDatesForWeek().map((date, index) => {
          const isToday = date.toDateString() === new Date().toDateString();
          return (
            <TouchableOpacity key={index} style={styles.DateStripdayColumn}>
              <Text style={[styles.DateStripdayText, isToday && styles.DateStriptodayDayText]}>
                {getDayName(date)}
              </Text>
              <View
                style={[
                  styles.DateStripdateContainer,
                  isToday && styles.DateStriptodayDateContainer,
                ]}
              >
                <Text
                  style={[styles.DateStripdateText, isToday && styles.DateStriptodayDateText]}
                >
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

const styles = StyleSheet.create({
    DateStripdatescontainer: {
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(46, 176, 134, 0.1)",
    // backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  DateStripheaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 15,
  },
  DateStripcalendarRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  DateStripcalendarIcon: {
    marginRight: 8,
  },
  DateStripmonthYearText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  DateStripnavigationButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  DateStripdaysContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  DateStripdayColumn: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    minWidth: 60,
  },
  DateStripdayText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
    opacity: 0.7,
  },
  DateStriptodayDayText: {
    opacity: 1,
  },
  DateStripdateContainer: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  DateStriptodayDateContainer: {
    // backgroundColor: '#007AFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#007AFF",
  },
  DateStripdateText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  DateStriptodayDateText: {
    color: "#fff",
  },


});
export default DateStrip;