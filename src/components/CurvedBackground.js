import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

export default function CurvedBackground({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        {children}
      </View>

      {/* Unified curved bottom with deeper curve */}
      <View style={styles.curveContainer}>
        <Svg height="45" width={width}>
          {/* White background fill */}
          <Path
            d={`
              M0,0
              L${width},0
              L${width},15
              Q${width/2},45 0,15
              Z
            `}
            fill="#FFFFFF"
          />
          
          {/* Dotted line following the same deeper curve */}
          <Path
            d={`M0,15 Q${width/2},45 ${width},15`}
            stroke="#c9c9c9"
            strokeWidth="3"
            strokeDasharray="6,6"
            fill="none"
          />
        </Svg>

        {/* Green Circle */}
        <View style={styles.circleContainer}>
          <TouchableOpacity style={styles.greenCircle}>
            <View style={styles.arrowsContainer}>
              <Icon 
                name="chevron-left" 
                size={18} 
                color="#FFFFFF" 
                style={styles.leftArrow} 
              />
              <Icon 
                name="chevron-right" 
                size={18} 
                color="#FFFFFF" 
                style={styles.rightArrow} 
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FF',
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 25,
  },
  curveContainer: {
    marginTop: -1,
    height: 55, // Increased height to accommodate deeper curve
    position: 'relative',
  },
  circleContainer: {
    position: 'absolute',
    top: 14,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  greenCircle: {
    width: 35,
    height: 35,
    borderRadius: 16,
    backgroundColor: '#D9534F',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  arrowsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftArrow: {
    marginRight: -4,
  },
  rightArrow: {
    marginLeft: -4,
  }
});