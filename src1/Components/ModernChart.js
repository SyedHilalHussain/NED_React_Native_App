import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { ChevronRight } from 'lucide-react';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const ModernChart = ({ title, type = 'line', data, onDetailsPress }) => {
  const screenWidth = Dimensions.get('window').width - 30; // Increased padding

  const chartConfig = {
    backgroundColor: 'transparent',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(134, 134, 134, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '4',
      strokeWidth: '2',
      stroke: '#ffffff',
    },
    propsForBackgroundLines: {
      strokeDasharray: '', // Solid lines
      strokeWidth: 0.5,
      stroke: 'rgba(134, 134, 134, 0.1)',
    },
  };

  const renderChart = () => {
    if (type === 'line') {
      return (
        <LineChart
          data={data}
          width={screenWidth}
          height={180}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
          withHorizontalLabels={true}
          withVerticalLabels={true}
          withDots={true}
          withShadow={false}
          withInnerLines={true}
          withOuterLines={false}
        />
      );
    } else {
      return (
        <BarChart
          data={data}
          width={screenWidth}
          height={180}
          chartConfig={chartConfig}
          style={styles.chart}
          withHorizontalLabels={true}
          showBarTops={false}
          flatColor={true}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons 
          name="chevron-forward"  // Use Ionicons' 'chevron-forward' icon
          size={20}
          color="#6B7280"
          onPress={onDetailsPress} // Use onPress for handling the click event
        />
      </View>
      {renderChart()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 12,
    borderRadius: 24,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6B7280',
    fontFamily: 'System',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default ModernChart;