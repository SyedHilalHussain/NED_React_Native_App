import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function NewsSection() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const newsData = [
    {
      date: 'October 30, 2024',
      title: 'News related to Holiday',
      description: 'Holiday on account of successful completion of Convocation 2024.',
      buttonText: 'Download PDF',
      color: '#4CAF50',
    },
    {
      date: 'October 25, 2025',
      title: 'News Related to Exam',
      description: '',
      buttonText: '',
      color: '#FFA726',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>News</Text>
      {newsData.map((item, index) => (
        <View key={index} style={styles.card}>
          <View style={[styles.sideBar, { backgroundColor: item.color }]} />
          <View style={styles.content}>
            <View style={styles.cardHeader}>
              <View style={styles.headerText}>
                <Text style={[styles.date, { color: item.color }]}>{item.date}</Text>
                <Text style={styles.subtitle}>{item.title}</Text>
              </View>
              <TouchableOpacity
                onPress={() => toggleExpand(index)}
                style={styles.expandButton}
              >
                <View style={styles.iconContainer}>
                  <Icon
                    name={expanded[index] ? 'keyboard-arrow-up' : 'add'}
                    size={20}
                    color="#4CAF50"
                  />
                </View>
              </TouchableOpacity>
            </View>
            {expanded[index] && (
              <View style={styles.expandedContent}>
                {item.description ? (
                  <Text style={styles.description}>{item.description}</Text>
                ) : null}
                {item.buttonText ? (
                  <TouchableOpacity style={styles.downloadButton}>
                    <Text style={styles.downloadText}>Download Pdf</Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            )}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    
  
  },
  sideBar: {
    width: 6,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerText: {
    flex: 1,
    marginRight: 12,
  },
  expandButton: {
    padding: 4,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E8F5E9', // Light green background
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
    lineHeight: 20,
  },
  expandedContent: {
    marginTop: 12,
  },
  downloadButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#EEF2FF', // Light purple/blue background
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24, // More rounded corners
  },
  downloadText: {
    color: '#4CAF50',
    fontWeight: '500',
    fontSize: 13,
  },
});