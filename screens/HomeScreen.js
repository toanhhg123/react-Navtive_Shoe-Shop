import { View, Text, Box } from 'native-base';
import React from 'react';
import HomeProduct from '../components/HomeProduct';
import HomeSearch from '../components/HomeSearch';
import color from './../color';

const HomeScreen = () => {
    return (
        <Box flex={1} bg={color.while}>
            <HomeSearch />
            <HomeProduct />
        </Box>
    );
};

export default HomeScreen;
