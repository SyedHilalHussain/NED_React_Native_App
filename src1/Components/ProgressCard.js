import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../Screens/styles';

export const ProgressCard = ({ title, value, total, type, icon, onPress }) => {
    const percentage = (value / total) * 100;
    
    const renderProgressIndicator = () => {
      if (type === 'attendance') {
        return (
          <View style={styles.ProgressCardattendanceContainer}>
            <View style={styles.ProgressCardcircularProgressWrapper}>
              <LinearGradient
                colors={['rgba(46, 176, 134, 0.1)', 'rgba(46, 176, 134, 0.05)']}
                style={styles.ProgressCardcircularBackground}
              />
              <View style={styles.ProgressCardcircularProgress}>
                <Text style={styles.ProgressCardattendanceValue}>{percentage.toFixed(1)}%</Text>
                <LinearGradient
                  colors={['#2eb086', '#1a6e52']}
                  style={[styles.ProgressCardprogressArc, { transform: [{ rotate: `${percentage * 3.6}deg` }] }]}
                />
              </View>
              <View style={styles.ProgressCardattendanceLabelContainer}>
                <MaterialIcons name="check-circle" size={16} color="#2eb086" />
                <Text style={styles.ProgressCardattendanceLabel}>Present</Text>
              </View>
            </View>
          </View>
        );
      }

      return (
        <View style={styles.ProgressCardcourseProgressContainer}>
          <View style={styles.ProgressCardprogressBarContainer}>
            <LinearGradient
              colors={['#2eb086', '#1a6e52']}
              style={[styles.ProgressCardprogressBar, { width: `${percentage}%` }]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          </View>
          <View style={styles.ProgressCardprogressStats}>
            <Text style={styles.ProgressCardprogressText}>{value}/{total}</Text>
            <Text style={styles.ProgressCardprogressPercentage}>{percentage.toFixed(1)}%</Text>
          </View>
        </View>
      );
    };

    return (
      <TouchableOpacity 
        style={[styles.ProgressCardcard, styles.ProgressCardprogressCard]}
        onPress={onPress}
        activeOpacity={0.9}
      >
        <LinearGradient
          colors={['rgba(46, 176, 134, 0.1)', 'rgba(46, 176, 134, 0.05)']}
          style={styles.ProgressCardprogressGradient}
        >
          <View style={styles.ProgressCardprogressHeader}>
            <View style={styles.ProgressCardprogressIcon}>
              {icon}
            </View>
            <View style={styles.ProgressCardtitleContainer}>
              <Text style={styles.ProgressCardcardTitle}>{title}</Text>
              <MaterialIcons name="arrow-forward-ios" size={16} color="#2eb086" />
            </View>
          </View>
          
          {renderProgressIndicator()}

          <View style={styles.ProgressCardcardFooter}>
            <View style={styles.ProgressCardstatusIndicator}>
              <View style={[styles.ProgressCardstatusDot, { backgroundColor: percentage >= 70 ? '#2eb086' : '#ff4757' }]} />
              <Text style={styles.ProgressCardstatusText}>
                {percentage >= 70 ? 'On Track' : 'Needs Attention'}
              </Text>
            </View>
            <Text style={styles.ProgressCardupdateTime}>Updated 2h ago</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
};
