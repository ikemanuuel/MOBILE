// CartItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

const CartItem = ({ item, onCheckboxChange, onQuantityChange, onDeleteItem }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemDetails}>
        <CheckBox
          checked={item.selected}
          onPress={onCheckboxChange}
          checkedColor="black"
          containerStyle={styles.checkboxContainer}
        />
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.quantityDeleteContainer}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={() => onQuantityChange(-1)}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={() => onQuantityChange(1)}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={onDeleteItem}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#FAB417',
    padding: 0.1,
  },
  checkboxText: {
    fontSize: 10, // Set the font size to 18
  },
  itemInfo: {
    flexDirection: 'column', // Arrange the item name and price in a column
    marginLeft: 10, // Add some margin to separate checkbox and item info
  },
  itemName: {
    fontSize: 13, // Set the font size to 18
    color: 'black',
  },
  itemPrice: {
    fontSize: 15, // Set the font size to 18
    color: 'black',
  },
  quantityDeleteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 15, // Set the font size to 18
  },
  quantityText: {
    fontSize: 13, // Set the font size to 18
    marginHorizontal: 8,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 4,
    marginRight: 'auto', // Align the delete button to the right
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 15, // Set the font size to 18
  },
});

export default CartItem;