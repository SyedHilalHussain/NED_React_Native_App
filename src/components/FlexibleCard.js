// FlexibleCard.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FlexibleCard = ({ variant = 'course', data }) => {
  const [expanded, setExpanded] = useState(false);

  const renderCourseHeader = () => (
    <>
      <View style={styles.codeContainer}>
        <Text style={styles.codeText}>{data.code}</Text>
      </View>
      
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{data.name}</Text>
        <Text style={styles.creditsText}>{data.credits}</Text>
      </View>
      
      <TouchableOpacity
        onPress={() => setExpanded(!expanded)}
        style={styles.expandButton}
      >
        <View style={[styles.iconContainer, { backgroundColor: `${data.color}20` }]}>
          <Icon
            name={expanded ? 'keyboard-arrow-up' : 'add'}
            size={20}
            color={data.color}
          />
        </View>
      </TouchableOpacity>
    </>
  );

  const renderExamHeader = () => (
    <>
      <View style={styles.examTimeContainer}>
        <Text style={styles.timeText}>{data.startTime}</Text>
        <View style={styles.timeDivider} />
        <Text style={styles.timeText}>{data.endTime}</Text>
      </View>
      
      <View style={styles.examInfoContainer}>
        <Text style={styles.examCodeText}>{data.courseCode}</Text>
        <Text style={styles.examTitleText}>{data.courseTitle}</Text>
        <View style={styles.roomContainer}>
          <Icon name="room" size={16} color="#757575" />
          <Text style={styles.roomText}>{data.room}</Text>
        </View>
      </View>
    </>
  );

  const renderCourseContent = () => (
    <View style={styles.expandedContent}>
      <View style={styles.row}>
        <Text style={styles.label}>CLO</Text>
        <Text style={styles.label}>Mid Marks</Text>
        <Text style={styles.label}>Marks</Text>
        <Text style={styles.label}>Per%</Text>
        <Text style={styles.label}>Status</Text>
      </View>
      
      {data.clos?.map((clo, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.value}>{clo.name}</Text>
          <Text style={styles.value}>{clo.midMarks}</Text>
          <Text style={styles.value}>{clo.marks}</Text>
          <Text style={styles.value}>{clo.percentage}%</Text>
          <View style={styles.statusContainer}>
            <Icon 
              name={clo.status ? "check-circle" : "cancel"} 
              size={20} 
              color={clo.status ? "#4CAF50" : "#F44336"} 
            />
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.colorBar, { backgroundColor: data.color }]} />
      
      <View style={styles.content}>
        <TouchableOpacity 
          style={[
            styles.header,
            variant === 'exam' && styles.examHeader
          ]} 
          onPress={() => variant === 'course' && setExpanded(!expanded)}
          activeOpacity={0.7}
        >
          {variant === 'course' ? renderCourseHeader() : renderExamHeader()}
        </TouchableOpacity>

        {variant === 'course' && expanded && renderCourseContent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
  },
  colorBar: {
    width: 6,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  examHeader: {
    paddingVertical: 8,
  },
  codeContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 12,
  },
  codeText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#424242',
  },
  titleContainer: {
    flex: 1,
    marginRight: 12,
  },
  titleText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#212121',
    marginBottom: 4,
  },
  creditsText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#757575',
  },
  expandButton: {
    padding: 4,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Exam specific styles
  examTimeContainer: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#757575',
  },
  timeDivider: {
    height: 1,
    width: 20,
    backgroundColor: '#E0E0E0',
    marginVertical: 8,
  },
  examInfoContainer: {
    flex: 1,
    marginLeft: 16,
  },
  examCodeText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#212121',
  },
  examTitleText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#424242',
    marginTop: 4,
  },
  roomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  roomText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#757575',
    marginLeft: 4,
  },
  // Course expanded content styles
  expandedContent: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
    paddingTop: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  label: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#9E9E9E',
    textAlign: 'center',
  },
  value: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#424242',
    textAlign: 'center',
  },
  statusContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default FlexibleCard;