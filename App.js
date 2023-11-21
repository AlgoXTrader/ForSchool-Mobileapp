import React, { useState } from 'react';
import { View, TextInput, Text, Image, StyleSheet } from 'react-native';

const App = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (text) => {
    setInputText(text);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/image1.jpg')}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Bir metin giriniz..."
        onChangeText={handleInputChange}
        value={inputText}
      />
      <Text style={styles.output}>{inputText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  output: {
    fontSize: 20,
    margin: 10,
  },
});

export default App;
