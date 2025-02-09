import React, { useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import Animated, { 
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  withSequence,
  withDelay,
  FadeIn,
  SlideInRight
} from 'react-native-reanimated';
import { styles } from '../Screens/styles';
const { width } = Dimensions.get('window');

const MOCK_USER_DATA = {
  name: "John Doe",
  email: "john.doe@university.edu",
  studentId: "12345",
  department: "Computer Science",
  semester: "Fall 2025",
  standing: "Good Standing",
  enrollmentStatus: "Full-Time",
  creditsCompleted: 85
};

const VerificationStep = ({ onProceed }) => {
  const verificationProgress = useSharedValue(0);
  const ringRotation = useSharedValue(0);
  const cardScale = useSharedValue(0.95);

  useEffect(() => {
    verificationProgress.value = withTiming(1, { duration: 1500 });
    ringRotation.value = withSequence(
      withTiming(360, { duration: 1000 }),
      withSpring(0)
    );
    cardScale.value = withSpring(1);
  }, []);

  const progressStyle = useAnimatedStyle(() => ({
    transform: [{ scale: cardScale.value }]
  }));

  const ringStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${ringRotation.value}deg` }]
  }));

  const VerificationItem = ({ icon, title, value, verified, delay = 0 }) => (
    <Animated.View 
      entering={SlideInRight.delay(delay).springify()}
      style={styles.VerificationStepverificationItem}
    >
      <BlurView intensity={15} tint="dark" style={styles.VerificationStepverificationContent}>
        <View style={styles.VerificationStepverificationIcon}>
          <Ionicons name={icon} size={24} color="#2EB086" />
          {verified && (
            <View style={styles.VerificationStepverifiedBadge}>
              <Ionicons name="checkmark-circle" size={14} color="#2EB086" />
            </View>
          )}
        </View>
        <View style={styles.VerificationStepverificationText}>
          <Text style={styles.VerificationStepverificationTitle}>{title}</Text>
          <Text style={styles.VerificationStepverificationValue}>{value}</Text>
        </View>
      </BlurView>
    </Animated.View>
  );

  return (
    <View style={styles.VerificationStepcontainer}>
      <Animated.View style={[styles.VerificationStepcardContainer, progressStyle]}>
        <BlurView intensity={20} tint="dark" style={styles.VerificationStepverificationCard}>
          {/* Academic Status Ring */}
          <Animated.View style={[styles.VerificationStepstatusRing, ringStyle]}>
            <View style={styles.VerificationStepinnerRing}>
              <Ionicons name="shield-checkmark" size={40} color="#2EB086" />
              <Text style={styles.VerificationStepstatusText}>Verified</Text>
              <Text style={styles.VerificationStepsemesterText}>{MOCK_USER_DATA.semester}</Text>
            </View>
          </Animated.View>

          {/* Verification Items */}
          <View style={styles.VerificationStepverificationList}>
            <VerificationItem 
              icon="person-outline" 
              title="Student ID"
              value={MOCK_USER_DATA.studentId}
              verified={true}
              delay={200}
            />
            <VerificationItem 
              icon="school-outline" 
              title="Department"
              value={MOCK_USER_DATA.department}
              verified={true}
              delay={400}
            />
            <VerificationItem 
              icon="trending-up-outline" 
              title="Academic Standing"
              value={MOCK_USER_DATA.standing}
              verified={true}
              delay={600}
            />
            <VerificationItem 
              icon="library-outline" 
              title="Credits Completed"
              value={`${MOCK_USER_DATA.creditsCompleted} Credits`}
              verified={true}
              delay={800}
            />
          </View>

          {/* Proceed Button */}
          <Animated.View 
            entering={FadeIn.delay(1000).springify()}
            style={styles.VerificationStepbuttonContainer}
          >
            <TouchableOpacity 
              style={styles.VerificationStepprimaryButton} 
              onPress={onProceed}
            >
              <BlurView intensity={30} tint="dark" style={styles.VerificationStepbuttonContent}>
                <Text style={styles.VerificationStepbuttonText}>Proceed to Course Selection</Text>
                <Ionicons name="arrow-forward" size={24} color="white" />
              </BlurView>
            </TouchableOpacity>
          </Animated.View>
        </BlurView>
      </Animated.View>
    </View>
  );
};



export default VerificationStep;