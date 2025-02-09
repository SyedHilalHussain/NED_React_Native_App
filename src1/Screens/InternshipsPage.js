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

import { InternshipCard } from "../Components/InternshipCard";
import { styles } from "./styles";

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
    <View style={styles.InternshipsPagecontainer}>
       <InternshipHeader 
        userInfo={userInfo}
        navigation={navigation}
      />

     

     

      <ScrollView
        style={styles.InternshipsPageinternshipsContainer}
        contentContainerStyle={styles.InternshipsPageinternshipsContent}
      >
        <View style={styles.InternshipsPageinternshipsList}>
          {internships.map((internship, index) => (
            <InternshipCard key={index} {...internship} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};



export default InternshipsPage;