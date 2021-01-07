import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function InventoryItem({ item, deleteItem }) {
  return (
    <TouchableOpacity style={styles.inventoryItem}>
      <View style={styles.inventoryItemView}>
        <Text style={styles.inventoryItemText}>
          {item.text} : {item.amount}
        </Text>
        <Icon
          name='remove'
          size={20}
          color='red'
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  inventoryItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    borderWidth: 1,
  },
  inventoryItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inventoryItemText: {
    marginTop: 10,
    fontSize: 20,
  },
  inventoryAmountText: {
    fontSize: 20,
    alignItems: 'center',
  },
});
