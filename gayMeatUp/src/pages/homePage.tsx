import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import UserProfile from '../components/JS/UserProfile';
import sideMenu from '../components/JS/sideMenu';
import SearchInput from '../components/JS/searchInput';

function NavigationBar() { 
    // Create a new state variables "isMenuOpen" and "isSearchOpen"
    const [isMenuOpen, setMenuOpen] = useState(false);  
    const [isSearchOpen, setSearchOpen] = useState(false); 

    const handleMenuClick = () => {
        console.log("Menu button clicked");

        // Toggle the side menu
        setMenuOpen(!isMenuOpen);
    }

    const handleSearchClick = () => {
        console.log("Search button clicked");
        
        // Toggle the search input
        setSearchOpen(!isSearchOpen);    
    }

    return ( 
        <View> 
            <Button title="Menu" onPress={handleMenuClick} /> 
            
            {/* Conditional rendering of side menu */}
            {isMenuOpen && <sideMenu onClose={() => setMenuOpen(false)} /> }
            
            <Button title="Search" onPress={handleSearchClick} />
            
            {/* Conditional rendering of search input */}
            {isSearchOpen && <Text>Search Input Here!</Text>}           
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
