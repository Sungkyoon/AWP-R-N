import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Inventory List</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
    height: 60,
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
});
