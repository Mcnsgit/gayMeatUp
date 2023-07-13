import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import UserProfile from '../components/JS/UserProfile';

function NavigationBar() { 

    const handleMenuClick = () => { 
        console.log("Menu button clicked");
        // Here would go the logic to open the drawer or side menu
    }

    const handleSearchClick = () => { 
        console.log("Search button clicked");
        // Here would go the logic to open the search input or navigate to the search screen
    }

    return ( 
        <View> 
            <Button title="Menu" onPress={handleMenuClick} /> 
            <Button title="Search" onPress={handleSearchClick} /> 
        </View> 
    ); 
} 

function FooterBar() { 

    const handleUsersClick = () => { 
        console.log("Users button clicked");
        // Here would go the logic to navigate to the users screen
    };

    const handleMeetClick = () => { 
        console.log("Meet button clicked");
        // Here would go the logic to navigate to the meet screen
    };

    const handleChatClick = () => { 
        console.log("Chat button clicked");
        // Here would go the logic to navigate to the chat screen
    }

    return ( 
        <View> 
            <Button title="Users" onPress={handleUsersClick} /> 
            <Button title="Meet" onPress={handleMeetClick} /> 
            <Button title="Chat" onPress={handleChatClick} /> 
        </View> 
    ); 
}


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
