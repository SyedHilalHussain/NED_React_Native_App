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

const styles = StyleSheet.create({
    DetailedInternshipcontainer: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  DetailedInternshipfixedHeader: {
    position: "absolute",
    // top: 50,
    left: 0,
    right: 0,
    zIndex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    paddingTop: 10,
    marginBottom:200,
    paddingBottom: 50,
   

  },
 
  DetailedInternshipheaderButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  DetailedInternshipheaderButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(46, 176, 134, 0.2)',
  },
  DetailedInternshipactiveHeaderButton: {
    backgroundColor: '#2EB086',
  },
  DetailedInternshipheaderButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  DetailedInternshipactiveHeaderButtonText: {
    opacity: 1,
  },
  DetailedInternshipscrollView: {
    flex: 1,
  },
  DetailedInternshipcontent: {
    padding: 16,
    
    gap: 16,
  },
  DetailedInternshipcompanyCard: {
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
   
   
  },
  DetailedInternshipbackButton: { // New style for back button
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    backgroundColor:'rgba(46, 176, 134, 0.4)',
    borderRadius: 20,
    padding:5,
    
},
  DetailedInternshipcompanyLogo: {
    width: 80,
    height: 80,
    // borderRadius: 20,
    marginBottom: 16,
  },
  DetailedInternshipposition: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  DetailedInternshipcompany: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 16,
  },
  DetailedInternshiptags: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
  },
  DetailedInternshiptag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(46, 176, 134, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  DetailedInternshiptagText: {
    color: '#fff',
    fontSize: 14,
  },
  DetailedInternshipsection: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  DetailedInternshipsectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  DetailedInternshiprequirementItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  DetailedInternshipbullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#2EB086',
    marginTop: 8,
    marginRight: 12,
  },
  DetailedInternshiprequirementText: {
    flex: 1,
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 15,
    lineHeight: 22,
  },
  DetailedInternshipbenefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  DetailedInternshipbenefitText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 15,
  },
  DetailedInternshipdescriptionText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 15,
    lineHeight: 24,
  },
  DetailedInternshipapplyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(46, 176, 134, 0.2)',
  },
  DetailedInternshipdeadlineInfo: {
    flex: 1,
  },
  DetailedInternshipdeadlineLabel: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 12,
  },
  DetailedInternshipdeadlineDate: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  DetailedInternshipapplyButton: {
    backgroundColor: '#2EB086',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  DetailedInternshipapplyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  DetailedInternshipeventsContainer: {
    flex: 1,
    marginTop: 310, // Should match the top position of dateStripWrapper
  
  },
  DetailedInternshipeventsContent: {
    paddingTop: 0,
  },
});

export default DetailedInternshipPage;