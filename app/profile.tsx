import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Sample video thumbnails (Replace these with actual video links)
const videoThumbnails = [
  { id: '1', uri: 'https://via.placeholder.com/100' },
  { id: '2', uri: 'https://via.placeholder.com/100' },
  { id: '3', uri: 'https://via.placeholder.com/100' },
  { id: '4', uri: 'https://via.placeholder.com/100' },
  { id: '5', uri: 'https://via.placeholder.com/100' },
  { id: '6', uri: 'https://via.placeholder.com/100' },
];

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      {/* Profile Picture & Username Overlay */}
      <View style={styles.profileSection}>
        <View style={styles.profilePicContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image
            style={styles.profilePic}
          />
          <Text style={styles.username}>@Username</Text>
        </View>
      </View>

      {/* User Bio */}
      <Text style={styles.bio}>Extreme sports enthusiast | Trick master 🛹</Text>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="pencil-outline" size={20} color="white" />
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="settings-outline" size={20} color="white" />
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Ionicons name="log-out-outline" size={20} color="red" />
          <Text style={[styles.buttonText, { color: 'red' }]}>Log Out</Text>
        </TouchableOpacity>
      </View>

      {/* Video Grid Section */}
      <FlatList
        data={videoThumbnails}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.videoGrid}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.videoThumbnail}>
            <Image source={{ uri: item.uri }} style={styles.videoImage} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black Background
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e63946', // Red Title
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 15,
  },
  profilePicContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'white',
    position: 'relative', // Ensures the @username is positioned on top
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
  username: {
    position: 'absolute',
    bottom: -15, // Places username slightly below the profile pic
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 14,
    color: '#ccc', // Light gray for readability
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  actions: {
    width: '80%',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'red',
  },
  videoGrid: {
    paddingTop: 10,
  },
  videoThumbnail: {
    margin: 5,
    width: 100,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
  },
  videoImage: {
    width: '100%',
    height: '100%',
  },
});
