import React, { useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import HeaderBackground from "../Components/HeaderBackground ";
import CustomCalendar from "../Components/CustomCalendar";
import { ModernEventCard } from "../Components/ModernEventCard";
import  DateStrip  from "../Components/DateStrip";


const { width, height } = Dimensions.get("window");



const EventsPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [showDateStrip, setShowDateStrip] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const dateStripHeight = useRef(new Animated.Value(0)).current;

  const toggleDateStrip = () => {
    const toValue = showDateStrip ? 0 : 100; // Adjust height as needed
    setShowDateStrip(!showDateStrip);
    Animated.spring(dateStripHeight, {
      toValue,
      useNativeDriver: false,
      friction: 8,
      tension: 50,
    }).start();
  };

  const events = [
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      title: "Tech Innovation Summit 2024",
      date: "Aug 20",
      time: "10:00 AM",
      category: "Conference",
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      title: "AI Workshop Series",
      date: "Aug 22",
      time: "2:00 PM",
      category: "Workshop",
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      title: "AI Workshop Series",
      date: "Aug 22",
      time: "2:00 PM",
      category: "Workshop",
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      title: "AI Workshop Series",
      date: "Aug 22",
      time: "2:00 PM",
      category: "Workshop",
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      title: "AI Workshop Series",
      date: "Aug 22",
      time: "2:00 PM",
      category: "Workshop",
    },
  ];

  return (
    <View style={styles.EventsPagecontainer}>
      <HeaderBackground />

      <View style={styles.EventsPagetopContainer}>
        <BlurView intensity={20} tint="dark" style={styles.EventsPagetoggleContainer}>
          <TouchableOpacity
            style={[
              styles.EventsPagetoggleButton,
              activeTab === "upcoming" && styles.EventsPageactiveToggle,
            ]}
            onPress={() => setActiveTab("upcoming")}
          >
            <Text
              style={[
                styles.EventsPagetoggleText,
                activeTab === "upcoming" && styles.EventsPageactiveToggleText,
              ]}
            >
              UPCOMING
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.EventsPagetoggleButton,
              activeTab === "past" && styles.EventsPageactiveToggle,
            ]}
            onPress={() => setActiveTab("past")}
          >
            <Text
              style={[
                styles.EventsPagetoggleText,
                activeTab === "past" && styles.EventsPageactiveToggleText,
              ]}
            >
              PAST
            </Text>
          </TouchableOpacity>
        </BlurView>

        <TouchableOpacity
          style={styles.EventsPagecalendarToggle}
          onPress={toggleDateStrip}
        >
          <View style={styles.EventsPagetoggleLine} />
        </TouchableOpacity>
      </View>

      <Animated.View style={[styles.EventsPagedateStripWrapper]}>
        {showDateStrip && (
          <DateStrip onCalendarPress={() => setShowCalendar(true)} />
        )}
      </Animated.View>

      <ScrollView
        style={styles.EventsPageeventsContainer}
        contentContainerStyle={styles.EventsPageeventsContent}
      >
        <View style={styles.EventsPageeventsevent}>
          {events.map((event, index) => (
            <ModernEventCard key={index} {...event} />
          ))}
        </View>
      </ScrollView>

      {showCalendar && (
        <CustomCalendar
          onClose={() => setShowCalendar(false)}
          onSelectDate={(date) => {
            setShowCalendar(false);
            // Handle date selection
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  EventsPagecontainer: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  EventsPagetopContainer: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  EventsPagedateStripWrapper: {
    position: "absolute",
    top: 150, // Adjust based on your topContainer height
    left: 0,
    right: 0,
    zIndex: 2,
    overflow: "hidden",
  },
  EventsPagetoggleContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    borderRadius: 25,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  EventsPagetoggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  EventsPageactiveToggle: {
    backgroundColor: "#2EB086",
  },
  EventsPagetoggleText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    opacity: 0.7,
  },
  EventsPageactiveToggleText: {
    opacity: 1,
  },
  EventsPagecalendarToggle: {
    alignItems: "center",
    paddingVertical: 15,
    marginTop: 10,
  },
  EventsPagetoggleLine: {
    width: 40,
    height: 4,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 2,
  },
  EventsPageeventsContainer: {
    flex: 1,
    marginTop: 320, // Should match the top position of dateStripWrapper
  },
  EventsPageeventsContent: {
    paddingTop: 20,
  },
  EventsPageeventsevent: {
    marginHorizontal: 15,
  },

});

export default EventsPage;
