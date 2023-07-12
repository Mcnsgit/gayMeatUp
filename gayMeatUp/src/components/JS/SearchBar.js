import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ placeholder, value, onChangeText }) => (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EAEAEA',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },
    input: {
        fontSize: 16,
    },
});

export default SearchBar;