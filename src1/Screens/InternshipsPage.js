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
import { InternshipHeader } from "../Components/InternshipHeader";
import DateStrip from "../Components/DateStrip";
import { InternshipCard } from "../Components/InternshipCard";

const InternshipsPage = ({navigation}) => {
    const userInfo = {
        name: "John Doe",
        profileImage: require("../Assets/profile.jpg"), // Replace with your image path
      };

  const internships = [
    {
      company: "Microsoft",
      position: "Software Engineering Intern",
      deadline: "Aug 30, 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png",
    },
    {
      company: "IBM",
      position: "Cloud Developer Intern",
      deadline: "Sep 15, 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png",
    },
    {
      company: "Google",
      position: "Data Scientist Intern",
      deadline: "Oct 1, 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png",
    },
    {
      company: "Amazon",
      position: "Machine Learning Intern",
      deadline: "Oct 10, 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png",
    },
  ];

  return (
    <View style={styles.container}>
       <InternshipHeader 
        userInfo={userInfo}
        navigation={navigation}
      />

     

     

      <ScrollView
        style={styles.internshipsContainer}
        contentContainerStyle={styles.internshipsContent}
      >
        <View style={styles.internshipsList}>
          {internships.map((internship, index) => (
            <InternshipCard key={index} {...internship} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  dateStripWrapper: {
    position: "absolute",
    top: 150,
    left: 0,
    right: 0,
    zIndex: 2,
    overflow: "hidden",
  },
  toggleContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    borderRadius: 25,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  activeToggle: {
    backgroundColor: "#2EB086",
  },
  toggleText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    opacity: 0.7,
  },
  activeToggleText: {
    opacity: 1,
  },
  calendarToggle: {
    alignItems: "center",
    paddingVertical: 15,
    marginTop: 10,
  },
  toggleLine: {
    width: 40,
    height: 4,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 2,
  },
  internshipsContainer: {
    flex: 1,
    marginTop: 50,
  },
  internshipsContent: {
    paddingTop: 20,
  },
  internshipsList: {
    marginHorizontal: 15,
  },
});

export default InternshipsPage;