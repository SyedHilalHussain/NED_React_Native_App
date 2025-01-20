import React from 'react';
import { ScrollView, StyleSheet, View, Dimensions } from 'react-native';
import Header from '../components/Header';
import GreetingCard from '../components/GreetingCard';
import AttendanceRow from '../components/AttendanceRow';
import StudentDetails from '../components/StudentDetails';
import NewsSection from '../components/NewsSection';
import CurvedBackground from '../components/CurvedBackground';
import NavComponent from '../components/NavComponent';
import { useNavigation } from '@react-navigation/native';



const { width } = Dimensions.get('window'); // Get screen width for scaling
const scale = (size) => (width / 375) * size; // Scaling utility for responsive design

export default function HomeScreen({ route }) {
  const navigation = useNavigation();

  const handleScreenChange = (screenName) => {
    navigation.navigate(screenName);
  };
 
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Curved Background */}
        <CurvedBackground>
         <Header
  title={route.name}
  showProfile={true}
  navigation={navigation}
/>

          {/* <GreetingCard navigation={navigation} /> */}
          {/* <AttendanceRow navigation={navigation} /> */}
        </CurvedBackground>

        {/* Gray-Blue Background Section */}
        <View style={styles.grayBackground}>
          <StudentDetails navigation={navigation} />
          <NewsSection />
        </View>
       
      </ScrollView>
      <View style={styles.navContainer}>
        <NavComponent
          activeScreen={route.name}
          onScreenChange={handleScreenChange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FF',
  },
  scrollContent: {
    flexGrow: 1,
  },
  grayBackground: {
    backgroundColor: '#F5F9FF',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  
  navContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: scale(65),
  },
});
