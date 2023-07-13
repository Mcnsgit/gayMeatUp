import React, { useState } from 'react';
import { TextInput, Button, View } from 'react-native';

function SearchInput({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
        setQuery('');
    };

    return (
        <View>
            <TextInput
                value={query}
                onChangeText={setQuery}
                placeholder={'Search...'}
            />
            <Button title="Search" onPress={handleSearch} />
        </View>
    );
}
export default SearchInput;