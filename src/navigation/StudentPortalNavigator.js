
// // studentportalnavigator
// import React, { useState } from 'react';
// import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import HomeScreen from '../screens/HomeScreen';
// import CoursesScreen from '../screens/CoursesScreen';
// import ExamScheduleScreen from '../screens/ExamScheduleScreen';
// import ResultsScreen from '../screens/ResultsScreen';
// import ProfileScreen from '../screens/ProfileScreen';

// const { width } = Dimensions.get('window');
// const scale = (size) => (width / 375) * size;
// const Tab = createBottomTabNavigator();

// export default function StudentPortalNavigator({ initialRouteName = 'Home', onScreenChange }) {
//   return (
  
//    <Tab.Navigator
//         initialRouteName={initialRouteName}
//         screenOptions={{
//           headerShown: false,
//           tabBarStyle: styles.container
//         }}
//         tabBar={props => (
//           <CustomTabBar 
//             {...props} 
//             onScreenChange={onScreenChange}
//           />
//         )}
//       >
//       <Tab.Screen 
//         name="Home" 
//         component={HomeScreen}
//         options={{
//           tabBarIcon: 'book-outline'
//         }}
//       />
//       <Tab.Screen
//         name="Courses"
//         component={CoursesScreen}
//         options={{
//           tabBarIcon: 'albums'
//         }}
//       />
//       <Tab.Screen
//         name="Exam Schedule"
//         component={ExamScheduleScreen}
//         options={{
//           tabBarIcon: 'calendar-outline'
//         }}
//       />
//       <Tab.Screen
//         name="Results"
//         component={ResultsScreen}
//         options={{
//           tabBarIcon: 'trophy-outline'
//         }}
//       />
    
//     </Tab.Navigator>
   
//   );
// }

// const CustomTabBar = ({ state, descriptors, navigation }) => {
//   return (
//     <View style={styles.container}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         return (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.tab,
//               isFocused ? styles.activeTabContainer : null,
//             ]}
//             onPress={onPress}
//           >
//             <View
//               style={[
//                 styles.iconWrapper,
//                 isFocused ? styles.activeIconWrapper : null,
//               ]}
//             >
//               <Ionicons
//                 name={options.tabBarIcon}
//                 size={scale(24)}
//                 color={isFocused ? '#FFFFFF' : '#4CAF50'}
//               />
//             </View>
//             <Text
//               style={[
//                 styles.label,
//                 isFocused ? styles.activeLabel : null,
//               ]}
//             >
//               {route.name}
//             </Text>
//             {isFocused ? <View style={styles.underline} /> : null}
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     paddingVertical: scale(12),
//     borderRadius: scale(25),
//     position: 'absolute',
//     bottom: scale(15),
//     left: scale(20),
//     right: scale(20),
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: scale(10),
//     elevation: 5,
//   },
//   tab: {
//     alignItems: 'center',
//     position: 'relative',
//   },
//   iconWrapper: {
//     width: scale(40),
//     height: scale(40),
//     borderRadius: scale(20),
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//     borderWidth: scale(2),
//     borderColor: '#F0F4FF',
//   },
//   activeIconWrapper: {
//     backgroundColor: '#4CD964',
//     borderColor: '#4CD964',
//   },
//   activeTabContainer: {
//     shadowColor: '#4CD964',
//     shadowOpacity: 0.5,
//     shadowRadius: scale(6),
//     shadowOffset: { width: 0, height: scale(3) },
//     elevation: 5,
//   },
//   label: {
//     fontSize: scale(12),
//     color: '#4CAF50',
//     marginTop: scale(4),
//   },
//   activeLabel: {
//     color: '#4CD964',
//   },
//   underline: {
//     width: scale(30),
//     height: scale(3),
//     backgroundColor: '#4CD964',
//     position: 'absolute',
//     bottom: -scale(8),
//     borderRadius: scale(2),
//   },
// });