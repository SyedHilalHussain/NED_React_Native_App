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

export const AnalyticsCard = ({ title, data, labels, icon }) => (
  <View style={styles.analyticsCard}>
    <View style={styles.analyticsHeader}>
      <View style={styles.analyticsTitleContainer}>
        <View style={styles.analyticsIcon}>{icon}</View>
        <Text style={styles.analyticsTitle}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.analyticsMoreButton}>
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
      style={styles.analyticsChart}
    
          
    />
  </View>
);

const styles = StyleSheet.create({
  analyticsCard: {
    backgroundColor: "#1e1e1e",
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
  },
  analyticsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  analyticsTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  analyticsIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(46, 176, 134, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  analyticsTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  analyticsChart: {
    backgroundColor: '#1e1e1e',
    marginLeft:-10,
    borderRadius: 16,
    padding: 0,
    marginBottom: 15,
    paddingLeft: -200,  // Add this
    overflow: 'hidden',  // Add thi
  },
});
