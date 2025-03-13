import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlicksPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Flicks Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});

export default FlicksPage;
