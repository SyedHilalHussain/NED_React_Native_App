import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const List = ({ 
  title, 
  date, 
  attendanceMarked, 
  userInfo,
  onAddAttendance, 
  onSendMessage,
  illustration 
}) => {
  const IconComponent = () => (
    <View style={styles.iconCircle}>
      <Icon 
        name={title.toLowerCase().includes('student') ? 'person' : 'work'} 
        size={20} 
        color="#6C63FF" 
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <IconComponent />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>

      {!attendanceMarked ? (
        // Empty State
        <View style={styles.emptyContent}>
          {illustration && (
            <Image
              source={illustration}
              style={styles.illustration}
              resizeMode="contain"
            />
          )}
          
          <View style={styles.messageContainer}>
            <Icon name="search" size={20} color="#6C63FF" style={styles.searchIcon} />
            <Text style={styles.message}>Attendance Not Found.</Text>
          </View>

          <TouchableOpacity 
            style={styles.addButton}
            onPress={onAddAttendance}
          >
            <Icon name="add" size={24} color="#FFFFFF" />
            <Text style={styles.buttonText}>Add Attendance</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Attendance Marked State
        <View style={styles.userContent}>
          <View style={styles.userContainer}>
            <Image 
              source={userInfo.avatar} 
              style={styles.avatar} 
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{userInfo.name}</Text>
              <Text style={styles.userRole}>{userInfo.role}</Text>
            </View>
          </View>
          
          <TouchableOpacity 
            style={styles.messageButton}
            onPress={onSendMessage}
          >
            <Icon name="mail" size={20} color="#FFFFFF" />
            <Text style={styles.messageButtonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    backgroundColor: '#E8EAFF',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  date: {
    fontSize: 16,
    color: '#6C63FF',
  },
  emptyContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  illustration: {
    width: '80%',
    height: 200,
    marginBottom: 20,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  message: {
    fontSize: 16,
    color: '#6C63FF',
  },
  addButton: {
    backgroundColor: '#6C63FF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    width: '80%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  userContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  userRole: {
    fontSize: 14,
    color: '#666666',
  },
  messageButton: {
    backgroundColor: '#FF6B6B',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  messageButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
});

export default List;