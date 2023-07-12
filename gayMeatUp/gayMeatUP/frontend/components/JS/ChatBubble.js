import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatBubble = ({ message, isSentByUser }) => (
    <View style={[styles.container, isSentByUser ? styles.sent : styles.received]}>
        <Text style={styles.message}>{message}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        maxWidth: '80%',
    },
    sent: {
        alignSelf: 'flex-end',
        backgroundColor: '#DCF8C6',
    },
    received: {
        alignSelf: 'flex-start',
        backgroundColor: '#EAEAEA',
    },
    message: {
        fontSize: 16,
    },
});

export default ChatBubble;
