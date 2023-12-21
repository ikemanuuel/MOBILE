// Cart.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import CartItem from './CartItem'; // Import the CartItem component

export const calculateTotal = (items) => {
  return items.reduce(
    (total, item) => (item.selected ? total + item.price * item.quantity : total),
    0
  ).toFixed(2);
};

const Cart = () => {
  const navigation = useNavigation();
  const navigationState = useNavigationState((state) => state);

  const handleCheckOutClick = () => {
    console.log('Handling checkout click');
    navigation.navigate('Payment Details', { cartItems: cartItems });
  };


  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'P.E Uniform - L', price: 690, quantity: 1, selected: false },
    { id: 2, name: 'Polo Uniform - L', price: 550, quantity: 1, selected: false },
    // Add more items as needed
  ]);


  const handleQuantityChange = (itemId, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const handleCheckboxChange = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleDeleteItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onCheckboxChange={() => handleCheckboxChange(item.id)}
            onQuantityChange={(change) => handleQuantityChange(item.id, change)}
            onDeleteItem={() => handleDeleteItem(item.id)}
          />
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotal(cartItems)}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckOutClick}>
        <Text style={styles.checkoutButtonText}>Check Out</Text>
      </TouchableOpacity>
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
    alignItems: 'center',
    marginTop: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    paddingHorizontal: 60,
    color: 'black',
    marginTop: 1,
  },
  totalContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    paddingTop: 30,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  checkoutButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cart;