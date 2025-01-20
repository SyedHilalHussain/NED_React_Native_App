import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const ACTIONS = [
  { id: 1, icon: 'calendar', type: 'Ionicons', label: 'Schedule' },
  { id: 2, icon: 'library', type: 'Ionicons', label: 'Courses' },
  { id: 3, icon: 'assignment', type: 'MaterialIcons', label: 'Tasks' },
  { id: 4, icon: 'book-reader', type: 'FontAwesome5', label: 'Library' },
];

export const QuickActions = () => {
  const [selectedId, setSelectedId] = useState(null);
  const scaleAnims = ACTIONS.map(() => new Animated.Value(1));

  const handlePress = (index) => {
    setSelectedId(ACTIONS[index].id);
    
    // Animation sequence
    Animated.sequence([
      Animated.timing(scaleAnims[index], {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnims[index], {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const renderIcon = (action, size, color) => {
    switch (action.type) {
      case 'Ionicons':
        return <Ionicons name={action.icon} size={size} color={color} />;
      case 'MaterialIcons':
        return <MaterialIcons name={action.icon} size={size} color={color} />;
      case 'FontAwesome5':
        return <FontAwesome5 name={action.icon} size={size} color={color} />;
      default:
        return null;
    }
  };

  return (
    <LinearGradient
      colors={['#1a1a1a', '#2a2a2a']}
      style={styles.QuickActionscontainer}
    >
      {ACTIONS.map((action, index) => (
        <Animated.View
          key={action.id}
          style={[
            styles.QuickActionsbuttonWrapper,
            { transform: [{ scale: scaleAnims[index] }] }
          ]}
        >
          <TouchableOpacity
            style={[
              styles.QuickActionsactionButton,
              selectedId === action.id && styles.QuickActionsselectedButton
            ]}
            onPress={() => handlePress(index)}
            activeOpacity={0.7}
          >
            {renderIcon(
              action,
              26,
              selectedId === action.id ? '#ffffff' : '#2eb086'
            )}
            <Text
              style={[
                styles.QuickActionsactionText,
                selectedId === action.id && styles.QuickActionsselectedText
              ]}
            >
              {action.label}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      ))}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  QuickActionscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'rgba(46, 176, 134, 0.1)',
    borderWidth: 1,
    marginHorizontal: 18,
    marginVertical:10,
    marginTop:20,
    padding: 10,
    borderRadius: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  QuickActionsbuttonWrapper: {
    alignItems: 'center',
    padding: 4,
  },
  QuickActionsactionButton: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 16,
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
  },
  QuickActionsselectedButton: {
    backgroundColor: '#2eb086',
  },
  QuickActionsactionText: {
    color: '#ffffff',
    marginTop: 8,
    fontSize: 13,
    fontWeight: '500',
  },
  QuickActionsselectedText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});