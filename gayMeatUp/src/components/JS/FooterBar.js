import React from 'react';
import { Text, View, Button } from 'react-native';

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







export default FooterBar

