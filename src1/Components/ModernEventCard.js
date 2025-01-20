
import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export  const ModernEventCard = ({ image, title, date, time, category }) => (
    <TouchableOpacity style={styles.modernEventCard}>
      <Image
        source={{ uri: image }}
        style={styles.eventBgImage}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.eventOverlay}>
        <View style={styles.eventCategory}>
          <Text style={styles.categoryText}>{category}</Text>
        </View>
        <Text style={styles.modernEventTitle}>{title}</Text>
        <View style={styles.eventTimeInfo}>
          <Ionicons name="calendar-outline" size={16} color="#ffffff" />
          <Text style={styles.eventTimeText}>{date}</Text>
          <Ionicons name="time-outline" size={16} color="#ffffff" style={styles.timeIcon} />
          <Text style={styles.eventTimeText}>{time}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );


  const styles = StyleSheet.create({

    modernEventCard: {
        height: 200,
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 12,
        width: 350,
      },
      eventBgImage: {
        width: '100%',
        height: '100%',
      },
      eventOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        height: '100%',
        justifyContent: 'flex-end',
      },
      eventCategory: {
        backgroundColor: 'rgba(46, 176, 134, 0.3)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 8,
      },
      categoryText: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: '500',
      },
      modernEventTitle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      eventTimeInfo: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      eventTimeText: {
        color: '#ffffff',
        fontSize: 14,
        marginLeft: 4,
        marginRight: 12,
      },
      timeIcon: {
        marginLeft: 8,
      },


   })