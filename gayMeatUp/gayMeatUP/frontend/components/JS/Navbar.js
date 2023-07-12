import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Navbar = ({ title, onBackPress }) => (
    <View style={styles.container}>
        {onBackPress && <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
            <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>}
        <Text style={styles.title}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    backButtonText: {
        color: '#007AFF',
        fontSize: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
});

export default Navbar;
