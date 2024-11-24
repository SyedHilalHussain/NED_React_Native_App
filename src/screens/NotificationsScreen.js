import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Header from '../components/Header';
import NotificationCard from '../components/NotificationCard';

// Responsive scaling utility
const { width } = Dimensions.get('window');
const scale = (size) => (width / 375) * size;

const NotificationsScreen = ({route, navigation}) => {
  const notifications = [
    {
      id: 1,
      name: 'Sir Noman Ahmed – SRE',
      message:
        'The Sessional Marks have been uploaded. Kindly check your marks and inform me immediately if there are any issues.',
      time: '45 minutes ago',
      image: require('../assets/images/istockphoto-1171169127-612x612.jpg'), // Replace with the correct image
    },
    {
      id: 2,
      name: 'Sir Noman Ahmed – SRE',
      message:
        'The Sessional Marks have been uploaded. Kindly check your marks and inform me immediately if there are any issues.',
      time: '45 minutes ago',
      image: require('../assets/images/istockphoto-1171169127-612x612.jpg'),
    },
    {
      id: 3,
      name: 'Sir Noman Ahmed – SRE',
      message:
        'The Sessional Marks have been uploaded. Kindly check your marks and inform me immediately if there are any issues.',
      time: '45 minutes ago',
      image: require('../assets/images/istockphoto-1171169127-612x612.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title={route.name}
            onBackPress={() => navigation.goBack()} />

      {/* Notifications List */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            name={notification.name}
            message={notification.message}
            time={notification.time}
            image={notification.image}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FD',
  },
  scrollView: {
    marginTop: scale(10), // Add spacing to avoid overlap with the header
    paddingHorizontal: scale(15),
    paddingBottom: scale(100), // To avoid overlap with BottomNavigation
  },
});

export default NotificationsScreen;
