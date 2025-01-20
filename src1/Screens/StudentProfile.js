import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, Animated, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import HeaderBackground from '../Components/HeaderBackground ';
const AnimatedStatCard = ({ title, value, icon, color, index }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      delay: index * 150,
      tension: 50,
      friction: 6,
      useNativeDriver: true
    }).start();
  }, []);

  return (
    <Animated.View style={[{ transform: [{ scale: scaleAnim }] }]}>
      <BlurView intensity={20} tint="dark" style={styles.glassCard}>
    <View style={[styles.statIconContainer, { backgroundColor: color }]}>
      <MaterialIcons name={icon} size={22} color="#fff" />
    </View>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statTitle}>{title}</Text>
  </BlurView>
    </Animated.View>
  );
};

const ProfileSection = ({ scrollY }) => {
  const imageScale = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.8],
    extrapolate: 'clamp'
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.3],
    extrapolate: 'clamp'
  });

  return (
    <Animated.View style={[styles.profileContainer, { opacity: headerOpacity }]}>
      <Animated.View style={[styles.avatarContainer, { transform: [{ scale: imageScale }] }]}>
        <Image source={require('../Assets/profile2.jpg')} style={styles.avatar} />
        <View style={styles.badgeContainer}>
          <MaterialIcons name="verified" size={20} color="#4ade80" />
        </View>
      </Animated.View>
      <Text style={styles.userName}>Mr. Fugazi</Text>
      <View style={styles.tagContainer}>
        <MaterialIcons name="computer" size={18} color="#fff" style={styles.tagIcon} />
        <Text style={styles.tagText}>Software Engineering • 7th Semester</Text>
      </View>
    </Animated.View>
  );
};

const DetailSection = ({ title, icon, children, isExpanded, onToggle }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const contentHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(rotateAnim, {
        toValue: isExpanded ? 1 : 0,
        tension: 40,
        friction: 7,
        useNativeDriver: true
      }),
      Animated.timing(contentHeight, {
        toValue: isExpanded ? 1 : 0,
        duration: 300,
        useNativeDriver: false
      })
    ]).start();
  }, [isExpanded]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  });

  const maxHeight = contentHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200]
  });

  return (
    <View style={styles.detailSection}>
      <TouchableOpacity onPress={onToggle} style={styles.sectionHeader} activeOpacity={0.7}>
        <View style={styles.headerLeft}>
          <LinearGradient
            colors={['#4ade8040', '#4ade8020']}
            style={styles.headerIcon}
          >
            <MaterialIcons name={icon} size={24} color="#4ade80" />
          </LinearGradient>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#4ade80" />
        </Animated.View>
      </TouchableOpacity>
      <Animated.View style={[styles.sectionContent, { maxHeight }]}>
        {children}
      </Animated.View>
    </View>
  );
};

const StudentProfile = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [expandedSection, setExpandedSection] = useState(null);

  const stats = [
    { title: 'CGPA', value: '3.85', icon: 'school', color: '#4ade80' },
    { title: 'Credits', value: '136', icon: 'star', color: '#0ea5e9' },
    { title: 'Rank', value: 'Top 5%', icon: 'trending-up', color: '#8b5cf6' }
  ];

  const personalInfo = [
    { label: 'Email', value: 'mr.fugazi@university.edu' },
    { label: 'Student ID', value: '2021-SE-123' },
    { label: 'Phone', value: '+1 234 567 8900' },
    { label: 'Address', value: '123 University Ave, City' }
  ];

  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    
    {/* Background Image */}
   
    
   
    
    <Animated.ScrollView
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
    >
        <HeaderBackground 
        imageSource={require('../Assets/bg.jpg')}
        overlayOpacity={0.5}
      />
     {/* Profile Section  */}
      <ProfileSection scrollY={scrollY} />
      
      <View style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <AnimatedStatCard key={index} {...stat} index={index} />
        ))}
      </View>


        <View style={styles.detailsContainer}>
          <DetailSection
            title="Personal Information"
            icon="person"
            isExpanded={expandedSection === 'personal'}
            onToggle={() => setExpandedSection(
              expandedSection === 'personal' ? null : 'personal'
            )}
          >
            {personalInfo.map((info, index) => (
              <View key={index} style={styles.infoRow}>
                <Text style={styles.infoLabel}>{info.label}</Text>
                <Text style={styles.infoValue}>{info.value}</Text>
              </View>
            ))}
          </DetailSection>

          <DetailSection
            title="Academic Details"
            icon="school"
            isExpanded={expandedSection === 'academic'}
            onToggle={() => setExpandedSection(
              expandedSection === 'academic' ? null : 'academic'
            )}
          >
            {/* Add academic details content here */}
          </DetailSection>
        </View>
      </Animated.ScrollView>
    </View>
  );
};
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: height * 0.4,
        top: 0,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        overflow: 'hidden',
      },
      overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: height * 0.4,
        backgroundColor: 'rgba(0,0,0,0.5)', // Adds a slight dark overlay for better text visibility
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      },
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  headerGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.4,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileContainer: {
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#4ade80',
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#4ade80',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  tagIcon: {
    marginRight: 8,
  },
  tagText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginTop: -20,
  },
  glassCard: {
    width: width / 3.5,
    aspectRatio: 1,
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    backgroundColor: '#1e293b',
    overflow: 'hidden',
  },
  statCard: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    width: width * 0.28,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
  },
//   statIconBg: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 12,
//   },
//   statValue: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 4,
//   },
//   statLabel: {
//     fontSize: 12,
//     color: '#94a3b8',
//     fontWeight: '500',
//   },
  detailsContainer: {
    padding: 16,
    marginTop: 20,
  },
  detailSection: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  sectionContent: {
    overflow: 'hidden',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  infoLabel: {
    fontSize: 14,
    color: '#94a3b8',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },
});
export default StudentProfile;