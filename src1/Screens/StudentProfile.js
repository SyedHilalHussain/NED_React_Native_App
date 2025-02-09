import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, Animated, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import HeaderBackground from '../Components/HeaderBackground ';
import { styles } from './styles';
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
      <BlurView intensity={20} tint="dark" style={styles.StudentProfileglassCard}>
    <View style={[styles.StudentProfilestatIconContainer, { backgroundColor: color }]}>
      <MaterialIcons name={icon} size={22} color="#fff" />
    </View>
    <Text style={styles.StudentProfilestatValue}>{value}</Text>
    <Text style={styles.StudentProfilestatTitle}>{title}</Text>
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
    <Animated.View style={[styles.StudentProfileprofileContainer, { opacity: headerOpacity }]}>
      <Animated.View style={[styles.StudentProfileavatarContainer, { transform: [{ scale: imageScale }] }]}>
        <Image source={require('../Assets/profile2.jpg')} style={styles.StudentProfileavatar} />
        <View style={styles.StudentProfilebadgeContainer}>
          <MaterialIcons name="verified" size={20} color="#4ade80" />
        </View>
      </Animated.View>
      <Text style={styles.StudentProfileuserName}>Mr. Fugazi</Text>
      <View style={styles.StudentProfiletagContainer}>
        <MaterialIcons name="computer" size={18} color="#fff" style={styles.StudentProfiletagIcon} />
        <Text style={styles.StudentProfiletagText}>Software Engineering • 7th Semester</Text>
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
    <View style={styles.StudentProfiledetailSection}>
      <TouchableOpacity onPress={onToggle} style={styles.StudentProfilesectionHeader} activeOpacity={0.7}>
        <View style={styles.StudentProfileheaderLeft}>
          <LinearGradient
            colors={['#4ade8040', '#4ade8020']}
            style={styles.StudentProfileheaderIcon}
          >
            <MaterialIcons name={icon} size={24} color="#4ade80" />
          </LinearGradient>
          <Text style={styles.StudentProfileheaderTitle}>{title}</Text>
        </View>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#4ade80" />
        </Animated.View>
      </TouchableOpacity>
      <Animated.View style={[styles.StudentProfilesectionContent, { maxHeight }]}>
        {children}
      </Animated.View>
    </View>
  );
};

const StudentProfile = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [expandedSection, setExpandedSection] = useState(null);

  const stats = [
    { title: 'CGPA', value: '3.45', icon: 'school', color: '#4ade80' },
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
    <View style={styles.StudentProfilecontainer}>
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
      
      <View style={styles.StudentProfilestatsContainer}>
        {stats.map((stat, index) => (
          <AnimatedStatCard key={index} {...stat} index={index} />
        ))}
      </View>


        <View style={styles.StudentProfiledetailsContainer}>
          <DetailSection
            title="Personal Information"
            icon="person"
            isExpanded={expandedSection === 'personal'}
            onToggle={() => setExpandedSection(
              expandedSection === 'personal' ? null : 'personal'
            )}
          >
            {personalInfo.map((info, index) => (
              <View key={index} style={styles.StudentProfileinfoRow}>
                <Text style={styles.StudentProfileinfoLabel}>{info.label}</Text>
                <Text style={styles.StudentProfileinfoValue}>{info.value}</Text>
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


export default StudentProfile;