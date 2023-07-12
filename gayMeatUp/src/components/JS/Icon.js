import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Icon = ({ name, size, color }) => (
    <View style={styles.container}>
        <Ionicons name={name} size={size} color={color} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Icon;
