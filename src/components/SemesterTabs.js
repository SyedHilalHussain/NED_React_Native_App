import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SemesterTabs = ({ semesters, selectedSemester, onSelect }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {semesters.map((semester, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tab,
            semester === selectedSemester && styles.activeTabContainer,
          ]}
          onPress={() => onSelect(semester)}
        >
          {semester === selectedSemester ? (
            <LinearGradient
              colors={['#D9534F', '#f76e6a']}
              style={styles.activeTab}
            >
              <Text style={styles.activeTabText}>{semester}</Text>
            </LinearGradient>
          ) : (
            <View style={styles.inactiveTab}>
              <Text style={styles.inactiveTabText}>{semester}</Text>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 20,
  },
  tab: {
    borderRadius: 25,
    marginHorizontal: 8,
    overflow: 'hidden', // To ensure gradient stays within bounds
  },
  activeTabContainer: {
    shadowColor: '#43E97B',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5, // For Android shadow
  },
  activeTab: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  activeTabText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  inactiveTab: {
    backgroundColor: '#F0F4FF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  inactiveTabText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#A5A5A5',
    textAlign: 'center',
  },
});

export default SemesterTabs;
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const SemesterTabs = ({ semesters, selectedSemester, onSelect }) => {
//   return (
//     <View style={styles.container}>
//       {semesters.map((semester, index) => (
//         <TouchableOpacity
//           key={index}
//           style={[
//             styles.tab,
//             semester === selectedSemester && styles.activeTab,
//           ]}
//           onPress={() => onSelect(semester)}
//         >
//           {semester === selectedSemester ? (
//             <LinearGradient
//               colors={['#43E97B', '#38F9D7']}
//               style={styles.activeTabBackground}
//             >
//               <Text style={styles.activeTabText}>{semester}</Text>
//             </LinearGradient>
//           ) : (
//             <Text style={styles.tabText}>{semester}</Text>
//           )}
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: '#F0F4FF',
//     borderRadius: 15,
//     padding: 16,
//     overflow: 'hidden',
//     marginHorizontal: 10,
//   },
//   tab: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   activeTab: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 25,
//   },
//   activeTabBackground: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 25,
//     width: '100%',
//     height: '100%',
//   },
//   activeTabText: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   tabText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#A5A5A5',
//   },
// });

// export default SemesterTabs;
