import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

export const ProgressCard = ({ title, value, total, type, icon, onPress }) => {
    const percentage = (value / total) * 100;
    
    const renderProgressIndicator = () => {
      if (type === 'attendance') {
        return (
          <View style={styles.attendanceContainer}>
            <View style={styles.circularProgressWrapper}>
              <LinearGradient
                colors={['rgba(46, 176, 134, 0.1)', 'rgba(46, 176, 134, 0.05)']}
                style={styles.circularBackground}
              />
              <View style={styles.circularProgress}>
                <Text style={styles.attendanceValue}>{percentage.toFixed(1)}%</Text>
                <LinearGradient
                  colors={['#2eb086', '#1a6e52']}
                  style={[styles.progressArc, { transform: [{ rotate: `${percentage * 3.6}deg` }] }]}
                />
              </View>
              <View style={styles.attendanceLabelContainer}>
                <MaterialIcons name="check-circle" size={16} color="#2eb086" />
                <Text style={styles.attendanceLabel}>Present</Text>
              </View>
            </View>
          </View>
        );
      }

      return (
        <View style={styles.courseProgressContainer}>
          <View style={styles.progressBarContainer}>
            <LinearGradient
              colors={['#2eb086', '#1a6e52']}
              style={[styles.progressBar, { width: `${percentage}%` }]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          </View>
          <View style={styles.progressStats}>
            <Text style={styles.progressText}>{value}/{total}</Text>
            <Text style={styles.progressPercentage}>{percentage.toFixed(1)}%</Text>
          </View>
        </View>
      );
    };

    return (
      <TouchableOpacity 
        style={[styles.card, styles.progressCard]}
        onPress={onPress}
        activeOpacity={0.9}
      >
        <LinearGradient
          colors={['rgba(46, 176, 134, 0.1)', 'rgba(46, 176, 134, 0.05)']}
          style={styles.progressGradient}
        >
          <View style={styles.progressHeader}>
            <View style={styles.progressIcon}>
              {icon}
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.cardTitle}>{title}</Text>
              <MaterialIcons name="arrow-forward-ios" size={16} color="#2eb086" />
            </View>
          </View>
          
          {renderProgressIndicator()}

          <View style={styles.cardFooter}>
            <View style={styles.statusIndicator}>
              <View style={[styles.statusDot, { backgroundColor: percentage >= 70 ? '#2eb086' : '#ff4757' }]} />
              <Text style={styles.statusText}>
                {percentage >= 70 ? 'On Track' : 'Needs Attention'}
              </Text>
            </View>
            <Text style={styles.updateTime}>Updated 2h ago</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  progressCard: {
    flex: 1,
    // marginRight: 8,
    backgroundColor: '#1E1E1E',
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'rgba(46, 176, 134, 0.1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  progressGradient: {
    padding: 15,
    borderRadius: 16,
  },
  progressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  progressIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(46, 176, 134, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  attendanceContainer: {
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 18,
  },
  circularProgressWrapper: {
    position: 'relative',
    alignItems: 'center',
  },
  circularBackground: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    opacity: 0.2,
  },
  circularProgress: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 8,
    borderColor: 'rgba(46, 176, 134, 0.1)',
  },
  attendanceValue: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  attendanceLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  attendanceLabel: {
    color: '#888888',
    fontSize: 14,
    marginLeft: 6,
  },
  courseProgressContainer: {
    marginVertical: 15,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#2eb086',
    borderRadius: 4,
  },
  progressStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  progressText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  progressPercentage: {
    color: '#2eb086',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    color: '#888888',
    fontSize: 12,
  },
  updateTime: {
    color: '#888888',
    fontSize: 12,
  },
});