// Components/MetricsList.js
import React from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const MetricsList = ({ metrics = [], onMetricPress }) => {
  // Animation value for loading bar
  const loadingAnimation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(loadingAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      {metrics.map((metric, index) => {
        const animatedWidth = loadingAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0%', `${metric.percentage}%`],
        });

        return (
          <TouchableOpacity 
            key={index}
            style={styles.metricItem}
            onPress={() => onMetricPress && onMetricPress(metric)}
          >
            <View style={styles.metricContent}>
              <Text style={styles.metricTitle}>{metric.title}</Text>
              <Text style={styles.percentageText}>{metric.percentage}%</Text>
            </View>
            
            <View style={styles.progressBarContainer}>
              <Animated.View 
                style={[
                  styles.progressBar,
                  { width: animatedWidth },
                  metric.color && { backgroundColor: metric.color }
                ]}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    margin: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  metricItem: {
    marginBottom: 27,
  },
  metricContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  metricTitle: {
    fontSize: 14,
    color: '#4A5568',
    fontWeight: '500',
  },
  percentageText: {
    fontSize: 14,
    color: '#718096',
    fontWeight: '600',
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: '#EDF2F7',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#6C63FF',
    borderRadius: 2,
  },
});

export default MetricsList;