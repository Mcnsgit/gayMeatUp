import React from 'react';
import { Text, View, Button } from 'react-native';

function sideMenu({ onClose }) {
    return   (
        <View>
            <Text>Side Menu Content</Text>
            <Button title="Close Menu" onPress={onClose} />
        </View>
    );
}

export default sideMenu;