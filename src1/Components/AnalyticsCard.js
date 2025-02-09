import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { MaterialIcons, FontAwesome5, Feather } from "@expo/vector-icons";

import { LineChart } from "react-native-chart-kit";
import { styles } from "../Screens/styles";

export const AnalyticsCard = ({ title, data, labels, icon }) => (
  <View style={styles.AnalyticsCardanalyticsCard}>
    <View style={styles.AnalyticsCardanalyticsHeader}>
      <View style={styles.AnalyticsCardanalyticsTitleContainer}>
        <View style={styles.AnalyticsCardanalyticsIcon}>{icon}</View>
        <Text style={styles.AnalyticsCardanalyticsTitle}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.AnalyticsCardanalyticsMoreButton}>
        <Feather name="more-vertical" size={20} color="#ffffff" />
      </TouchableOpacity>
    </View>
    <LineChart
      data={{
        labels: labels,
        datasets: [
          {
            data: data,
            color: (opacity = 1) => `rgba(46, 176, 134, ${opacity})`,
            strokeWidth: 2,
          },
        ],
        
      }}
      width={350}
      height={200}
      // fromZero={true} // Start Y-axis from 0
      
      chartConfig={{
        paddingLeft: 0, // Add this line
        paddingRight: 0, // Optional, for consistency
        backgroundColor: "#1e1e1e",
        backgroundGradientFrom: "#1e1e1e",
        backgroundGradientTo: "#1e1e1e",
        decimalPlaces: title === "CGPA" ? 1 : 0,
        
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: { borderRadius: 16,
          
         },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#2eb086",
        },
        propsForBackgroundLines: {
          strokeDasharray: "",
          stroke: "rgba(255, 255, 255, 0.1)",
          
        },
        paddingLeft: 0,
        paddingRight: 0,
        yAxisInterval: 1,
        yLabelsOffset: 0,
        count: labels.length,
    formatXLabel: (label) => label,
    formatYLabel: () => '',
      }}
      bezier
      style={styles.AnalyticsCardanalyticsChart}
    
          
    />
  </View>
);

