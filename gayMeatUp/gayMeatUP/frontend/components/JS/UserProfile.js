import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Avatar from './JS/Avatar';
import Button from './Button';

const UserProfile = ({ name, age, bio, avatarSource, onEditProfile }) => (
    <View style={styles.container}>
        <Avatar source={avatarSource} />
        <Text style={styles.name}>{name}, {age}</Text>
        <Text style={styles.bio}>{bio}</Text>
        <Button title="Edit Profile" onPress={onEditProfile} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    bio: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default UserProfile;
