// src/pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import { Text, View, Button, GestureResponderEvent } from 'react-native';
import UserProfile from '../components/JS/UserProfile';
import NavigationBar from '../components/JS/NavigationBar';
import FooterBar from '../components/JS/footerBar';
function HomePage() { 
    const [users, setUsers] = useState([]); 
    const fetchUsers = async () => { 
        try { 
            const response = await fetch('/api/users'); 
            const data = await response.json(); 
            setUsers(data); 
        } catch (error) { 
            // handle error 
        } 
    } 
    useEffect(() => { 
        fetchUsers(); 
    }, []); 
    return ( 
        <View> 
            <NavigationBar /> 
            <View> 
                {users.map((user: {
                    id: React.Key | null | undefined;
                    name: string;
                    age: number;
                    bio: string;
                    avatarSource: string;
                    onEditProfile: () => void;
                }) => ( 
                    <UserProfile key={user.id} user={user} /> 
                ))} 
            </View> 
            <FooterBar /> 
        </View> 
    ); 
}

export default HomePage;
