import React, { useState, useEffect } from 'react'; 
import UserProfile from '../components/JS/UserProfile';
function NavigationBar() { 
    const handleMenuClick = () => { 
        // handle menu button click 
    } 
    const handleSearchClick = () => { 
        // handle search button click 
    } 
    return ( 
        <div> 
            <button onClick={handleMenuClick}>Menu</button> 
            <button onClick={handleSearchClick}>Search</button> 
        </div> 
    ); 
} 


function FooterBar() { 
    const handleUsersClick = () => { 
        // handle users button click 
    } 
    const handleMeetClick = () => { 
        // handle meet button click 
    } 
    const handleChatClick = () => { 
        // handle chat button click 
    } 
    return ( 
        <div> 
            <button onClick={handleUsersClick}>Users</button> 
            <button onClick={handleMeetClick}>Meet</button> 
            <button onClick={handleChatClick}>Chat</button> 
        </div> 
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
        <div> 
            <NavigationBar /> 
            <div> 
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
            </div> 
            <FooterBar /> 
        </div> 
    ); 
}

export default HomePage;