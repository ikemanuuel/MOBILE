import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notification Screen</Text>
      {/* Add your notification content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAB417', // Set the background color as needed
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black', // Set the text color as needed
  },
});

export default Notification;