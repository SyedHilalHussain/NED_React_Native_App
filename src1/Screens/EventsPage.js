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
import { styles } from "./styles";

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

export default EventsPage;
