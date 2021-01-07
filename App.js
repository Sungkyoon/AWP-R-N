import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './Components/Header.js';
import InventoryItem from './Components/InventoryItem.js';
import AddItem from './Components/AddItem.js';

export default function App() {
  const [items, setItems] = useState([
    { id: 1, text: 'Trash Bags', amount: 3 },
    { id: 2, text: 'To-Go Container', amount: 5 },
    { id: 3, text: 'Cups', amount: 10 },
    { id: 4, text: 'To-Go Cups', amount: 3 },
    { id: 5, text: 'To-Go Utensils', amount: 4 },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text, num) => {
    if (!text || !num) {
      Alert.alert('Error', 'Please fill out both fields', { text: 'Ok' });
    } else {
      setItems((prevItems) => {
        return [
          { id: Math.random().toString(), text: text, amount: num },
          ...prevItems,
        ];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <InventoryItem item={item} deleteItem={deleteItem} />
        )}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});
