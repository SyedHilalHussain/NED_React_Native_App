
import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../Screens/styles';

export  const ModernEventCard = ({ image, title, date, time, category }) => (
    <TouchableOpacity style={styles.ModernEventCardmodernEventCard}>
      <Image
        source={{ uri: image }}
        style={styles.ModernEventCardeventBgImage}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.ModernEventCardeventOverlay}>
        <View style={styles.ModernEventCardeventCategory}>
          <Text style={styles.ModernEventCardcategoryText}>{category}</Text>
        </View>
        <Text style={styles.ModernEventCardmodernEventTitle}>{title}</Text>
        <View style={styles.ModernEventCardeventTimeInfo}>
          <Ionicons name="calendar-outline" size={16} color="#ffffff" />
          <Text style={styles.ModernEventCardeventTimeText}>{date}</Text>
          <Ionicons name="time-outline" size={16} color="#ffffff" style={styles.ModernEventCardtimeIcon} />
          <Text style={styles.ModernEventCardeventTimeText}>{time}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );


