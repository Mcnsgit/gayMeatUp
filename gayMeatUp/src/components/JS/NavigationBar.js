import React, { useState } from 'react';
import { View, Button } from 'react-native';
import SideMenu from '../components/JS/sideMenu';
import SearchInput from '../components/JS/searchInput';

function NavigationBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!isMenuOpen);
    }

    const handleSearchClick = () => {
        setSearchOpen(!isSearchOpen);
    }

    return (
        <View>
            <Button title="Menu" onPress={handleMenuClick} />

            {/* Conditional rendering of side menu */}
            {isMenuOpen && <SideMenu onClose={handleMenuClick} />}

            <Button title="Search" onPress={handleSearchClick} />

            {/* Conditional rendering of search input */}
            {isSearchOpen && <SearchInput onSearch={console.log} />}
        </View>
    );
}

export default NavigationBar;
