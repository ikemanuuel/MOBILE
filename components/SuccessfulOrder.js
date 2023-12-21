// SuccessfulOrder.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const SuccessfulOrder = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.successText}>Order Successful</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.checkOrderButton} onPress={() => navigation.navigate('MyPurchase')}>
            <Text style={styles.checkOrderButtonText}>Check Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100, // Adjust the bottom value to move the button higher
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  checkOrderButton: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  checkOrderButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SuccessfulOrder;