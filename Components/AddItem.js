import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddItem({ addItem }) {
  const [text, setText] = useState('');
  const [num, setNum] = useState('');

  const onChange = (textValue) => setText(textValue);
  const onChangeNum = (numValue) => setNum(numValue);
  return (
    <View>
      <TextInput
        placeholder='Add Item Here...'
        style={styles.input}
        onChangeText={onChange}
      />
      <TextInput
        placeholder='Add Amount Here...'
        style={styles.input}
        onChangeText={onChangeNum}
        keyboardType={'numeric'}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => addItem(text, num)}
      >
        <Text style={styles.buttonText}>
          <Icon name='plus' size={-10} /> Add Item{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    fontSize: 20,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'limegreen',
  },
  button: {
    backgroundColor: 'limegreen',
    padding: 5,
    margin: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
