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
  FadeInUp, 
  FadeInRight,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withSequence,
  withDelay,
  withTiming,
  Easing
} from 'react-native-reanimated';
import { styles } from '../Screens/styles';
const { width } = Dimensions.get('window');
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const ConfirmationStep = ({ selectedCourses, onGenerateReceipt }) => {
  const totalCredits = selectedCourses.reduce((sum, course) => sum + course.credits, 0);
  const scale = useSharedValue(1);
  const buttonWidth = useSharedValue(width - 32);

  const pulseAnimation = () => {
    scale.value = withSequence(
      withSpring(1.05, { damping: 2 }),
      withSpring(1, { damping: 2 })
    );
  };

  useEffect(() => {
    // Initial entrance animation for the button
    buttonWidth.value = withDelay(
      1000,
      withSpring(width - 32, {
        damping: 15,
        stiffness: 90
      })
    );
  }, []);

  const buttonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    width: buttonWidth.value,
  }));

  const CourseItem = ({ course, index }) => (
    <Animated.View 
      entering={FadeInRight.delay(200 * index).springify()}
      style={styles.ConfirmationStepsummaryItem}
    >
      <BlurView intensity={15} tint="dark" style={styles.ConfirmationStepsummaryItemContent}>
        <View style={styles.ConfirmationStepcourseIconContainer}>
          <Ionicons name="book-outline" size={24} color="#2EB086" />
        </View>
        <View style={styles.ConfirmationStepcourseDetailsContainer}>
          <Text style={styles.ConfirmationStepsummaryItemText}>{course.name}</Text>
          <Text style={styles.ConfirmationStepsummaryItemDetailsText}>
            {course.id} | {course.credits} Credits
          </Text>
        </View>
      </BlurView>
    </Animated.View>
  );

  return (
    <View style={styles.ConfirmationStepcontainer}>
      <AnimatedBlurView 
        intensity={20} 
        tint="dark" 
        style={styles.ConfirmationStepsummaryCard}
        entering={FadeInUp.springify()}
      >
        <Animated.View 
          style={styles.ConfirmationStepheaderContainer}
          entering={FadeInUp.delay(300).springify()}
        >
          <View style={styles.ConfirmationStepsuccessIconContainer}>
            <Ionicons name="checkmark-circle" size={40} color="#2EB086" />
          </View>
          <Text style={styles.ConfirmationStepsummaryTitle}>Registration Complete</Text>
          <Text style={styles.ConfirmationStepsummarySubtitle}>Your courses are confirmed</Text>
        </Animated.View>

        <View style={styles.ConfirmationStepcourseListContainer}>
          {selectedCourses.map((course, index) => (
            <CourseItem key={course.id} course={course} index={index} />
          ))}
        </View>

        <Animated.View 
          entering={FadeInUp.delay(800).springify()}
          style={styles.ConfirmationSteptotalCreditsContainer}
        >
          <BlurView intensity={15} tint="dark" style={styles.ConfirmationSteptotalCreditsContent}>
            <Text style={styles.ConfirmationSteptotalCreditsLabel}>Total Credits</Text>
            <Text style={styles.ConfirmationSteptotalCreditsText}>{totalCredits}</Text>
          </BlurView>
        </Animated.View>
      </AnimatedBlurView>

      <Animated.View style={[styles.ConfirmationStepbuttonContainer, buttonStyle]}>
        <TouchableOpacity 
          style={styles.ConfirmationStepprimaryButton} 
          onPress={() => {
            pulseAnimation();
            onGenerateReceipt();
          }}
        >
          <BlurView intensity={30} tint="dark" style={styles.ConfirmationStepbuttonContent}>
            <Text style={styles.ConfirmationStepbuttonText}>Generate Fee Receipt</Text>
            <Ionicons name="document-text-outline" size={24} color="white" />
          </BlurView>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};



export default ConfirmationStep;