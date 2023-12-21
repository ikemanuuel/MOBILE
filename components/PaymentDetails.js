// PaymentDetails.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { calculateTotal } from './Cart'; // Import the calculateTotal function

const PaymentDetails = ({ route, navigation }) => {
  const { cartItems } = route.params;
  const [paymentMethod, setPaymentMethod] = useState('Gcash');

  const handlePlaceOrder = () => {
    const selectedItems = cartItems.filter((item) => item.selected);
    const totalAmount = calculateTotal(selectedItems);
    console.log('Placing order with total amount:', totalAmount);

    // Optionally, navigate to SuccessfulOrder screen
    navigation.navigate('Successful Order');
  };

  const selectedItems = cartItems.filter((item) => item.selected);

  const groupedItems = selectedItems.reduce((groups, item) => {
    const existingItem = groups.find((group) => group.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      groups.push({ ...item, quantity: 1 });
    }
    return groups;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Select Payment Method</Text>
      </View>
      <RNPickerSelect
        onValueChange={(value) => setPaymentMethod(value)}
        items={[
          { label: 'Gcash', value: 'Gcash' },
          { label: 'Over-the-counter', value: 'Over-the-counter' },
        ]}
        value={paymentMethod}
        style={pickerSelectStyles}
      />
      <FlatList
        data={groupedItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>
              {item.quantity} Item{item.quantity > 1 ? 's' : ''}
            </Text>
            <Text style={styles.itemText}>P {item.price.toFixed(2)}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
        <Text style={styles.placeOrderButtonText}>Place Order</Text>
      </TouchableOpacity>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          Order Total ({groupedItems.length} Item{groupedItems.length > 1 ? 's' : ''}): P {calculateTotal(selectedItems)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FAB417',
  },
  headerContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemText: {
    fontSize: 16,
    color: 'black',
  },
  summaryContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    paddingTop: 30,
    marginBottom: 120,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  placeOrderButton: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 16,
  },
  placeOrderButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#D9D9D9',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#D9D9D9',
  },
});

export default PaymentDetails;