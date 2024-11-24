import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header({ title, showProfile, onBackPress, onProfilePress, navigation }) {
  return (
    <View style={styles.container}>
      {/* Back Icon */}
      {onBackPress ? (
        <>
        <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
          <Ionicons name="chevron-back-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        </>
      ): null}

      {/* Title */}
      

      {/* Profile or Empty Placeholder */}
      {showProfile ?(<> <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={styles.iconContainer}>
          <Ionicons style={styles.notificationicon} name="notifications-sharp" size={24} color="#D9534F" />
        </TouchableOpacity>
        
        <Text style={styles.title}>{title}</Text>
        
        
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.iconContainer}>
          <Image
            source={{ uri: 'https://avatar.iran.liara.run/public/boy?username=Ash' }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        </>
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
  },
  iconContainer: {
    padding: 8,
    
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 16,
  },
  placeholder: {
    width: 32,
    height: 32,
  },
  notificationicon: {
    fontSize: 26,
    
  }
});
