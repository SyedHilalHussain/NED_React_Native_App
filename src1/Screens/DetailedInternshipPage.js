import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import HeaderBackground from '../Components/HeaderBackground ';
import { styles } from './styles';

const DetailedInternshipPage = ({ navigation, route }) => {
  // Animation values
  const scrollY = useRef(new Animated.Value(0)).current;
  const headerOpacity = useRef(new Animated.Value(1)).current;
  
  // Header animations based on scroll
  const headerTranslate = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  const internshipData = {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png",
    position: "UI Designer Intern",
    company: "Microsoft",
    location: "Jakarta",
    duration: "3 Months",
    type: "Full-time",
    stipend: "Competitive",
    deadline: "March 30, 2024",
    requirements: [
      "Proven to ever work as a UI/UX Designer or similar role",
      "Understanding about visual design and UI fundamentals",
      "Up-to date knowledge of design software like Adobe Illustrator and Photoshop"
    ],
    benefits: [
      "BPJS Health Insurance and bonus",
      "Professional mentorship",
      "Flexible working hours",
      "Learning and development opportunities"
    ],
    description: "We are looking for a talented UI Designer intern to join our creative team. You'll work on exciting projects and collaborate with experienced designers..."
  };

  return (
    <View style={styles.DetailedInternshipcontainer}>
      <HeaderBackground />
      
      {/* Animated Header */}
      
      <View style={[
        styles.DetailedInternshipfixedHeader,
       
      ]}>
       
         
            {/* Company Info Section */}
            <View  style={styles.DetailedInternshipcompanyCard}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.DetailedInternshipbackButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
            <Image 
              source={{ uri: internshipData.companyLogo }}
              style={styles.DetailedInternshipcompanyLogo}
            />
            <Text style={styles.DetailedInternshipposition}>{internshipData.position}</Text>
            <Text style={styles.DetailedInternshipcompany}>{internshipData.company}</Text>
            
            <View style={styles.DetailedInternshiptags}>
              <View style={styles.DetailedInternshiptag}>
                <Ionicons name="location-outline" size={16} color="#fff" />
                <Text style={styles.DetailedInternshiptagText}>{internshipData.location}</Text>
              </View>
              <View style={styles.DetailedInternshiptag}>
                <Ionicons name="time-outline" size={16} color="#fff" />
                <Text style={styles.DetailedInternshiptagText}>{internshipData.duration}</Text>
              </View>
              <View style={styles.DetailedInternshiptag}>
                <Ionicons name="business-outline" size={16} color="#fff" />
                <Text style={styles.DetailedInternshiptagText}>{internshipData.type}</Text>
              </View>
            </View>
          </View>
          <View style={styles.DetailedInternshipheaderButtons}>
            <TouchableOpacity style={styles.DetailedInternshipheaderButton}>
              <Text style={styles.DetailedInternshipheaderButtonText}>About Company</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.DetailedInternshipheaderButton, styles.DetailedInternshipactiveHeaderButton]}>
              <Text style={[styles.DetailedInternshipheaderButtonText, styles.DetailedInternshipactiveHeaderButtonText]}>
                Description
              </Text>
            </TouchableOpacity>
          </View>
        {/* </View> */}
      </View>
      <ScrollView
             style={styles.DetailedInternshipeventsContainer}
             contentContainerStyle={styles.DetailedInternshipeventsContent}
           >
    
        <View style={styles.DetailedInternshipcontent}>
        

          {/* Requirements Section */}
          <BlurView intensity={20} tint="dark" style={styles.DetailedInternshipsection}>
            <Text style={styles.DetailedInternshipsectionTitle}>Requirements</Text>
            {internshipData.requirements.map((req, index) => (
              <View key={index} style={styles.DetailedInternshiprequirementItem}>
                <View style={styles.DetailedInternshipbullet} />
                <Text style={styles.DetailedInternshiprequirementText}>{req}</Text>
              </View>
            ))}
          </BlurView>

          {/* Benefits Section */}
          <BlurView intensity={20} tint="dark" style={styles.DetailedInternshipsection}>
            <Text style={styles.DetailedInternshipsectionTitle}>Benefits</Text>
            {internshipData.benefits.map((benefit, index) => (
              <View key={index} style={styles.DetailedInternshipbenefitItem}>
                <Ionicons name="checkmark-circle" size={20} color="#2EB086" />
                <Text style={styles.DetailedInternshipbenefitText}>{benefit}</Text>
              </View>
            ))}
          </BlurView>

          {/* Description Section */}
          <BlurView intensity={20} tint="dark" style={styles.DetailedInternshipsection}>
            <Text style={styles.DetailedInternshipsectionTitle}>About the Role</Text>
            <Text style={styles.DetailedInternshipdescriptionText}>{internshipData.description}</Text>
          </BlurView>
        </View>
      </ScrollView>

      {/* Apply Button */}
      <BlurView intensity={20} tint="dark" style={styles.DetailedInternshipapplyContainer}>
        <View style={styles.DetailedInternshipdeadlineInfo}>
          <Text style={styles.DetailedInternshipdeadlineLabel}>Apply before</Text>
          <Text style={styles.DetailedInternshipdeadlineDate}>{internshipData.deadline}</Text>
        </View>
        <TouchableOpacity style={styles.DetailedInternshipapplyButton}>
          <Text style={styles.DetailedInternshipapplyButtonText}>Apply Now</Text>
        </TouchableOpacity>
      </BlurView>
    </View>
  );
};



export default DetailedInternshipPage;