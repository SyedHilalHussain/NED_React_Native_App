import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const DotPattern = () => {
  return (
    <View style={styles.dotContainer}>
      {[...Array(20)].map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              top: Math.random() * 140,
              left: Math.random() * 320,
              opacity: Math.random() * 0.4 + 0.2, // Adjust opacity
            },
          ]}
        />
      ))}
    </View>
  );
};

export default function GreetingCard({navigation}) {
  return (
    <View style={styles.cardWrapper}>
      <LinearGradient
        colors={['#d2e2f7', '#669bed']} // Adjusted to match the design
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        {/* Large Dots */}
        <View style={styles.largeDotLeft}></View>
        <View style={styles.largeDotRight}></View>

        <DotPattern />
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.greeting}>Hello, Azib</Text>
            <Text style={styles.subtitle}>Welcome to Asan Campus</Text>
            <LinearGradient
              colors={['#d2f2fc', '#05c3fc']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.button}
            >
               <TouchableOpacity onPress={() => navigation.navigate('ResultsScreen')} style={styles.button}>
          <Text style={styles.buttonText}>Check</Text>
        </TouchableOpacity>
            </LinearGradient>
          </View>

          <View style={styles.circleWrapper}>
            <LinearGradient
              colors={['#dce6fa', '#05c3fc']}
              style={styles.circleGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.circleContent}>
                <Text style={styles.scoreText}>3.5</Text>
                <Text style={styles.scoreLabel}>cgpa</Text>
              </View>
            </LinearGradient>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    margin: 16,
    borderRadius: 24,
    overflow: 'hidden',
  },
  card: {
    padding: 20,
    height: 140,
    position: 'relative',
  },
  dotContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  dot: {
    position: 'absolute',
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
  },
  largeDotLeft: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    opacity: 0.2,
    left: -20,
    bottom: 10,
  },
  largeDotRight: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    opacity: 0.2,
    right: -20,
    top: 80,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
    zIndex: 2,
  },
  textContainer: {
    flex: 1,
    paddingRight: 60,
  },
  greeting: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4A5568',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 16,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  circleWrapper: {
    position: 'absolute',
    right: 10,
    top: 0,
  },
  circleGradient: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContent: {
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4A5568',
  },
  scoreLabel: {
    fontSize: 12,
    color: '#718096',
    marginTop: 2,
  },
});
