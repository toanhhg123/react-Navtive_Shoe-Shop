import { View, Text, Box, Center, Image, Heading } from 'native-base';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import CartEmpty from './../components/CartEmpty';
import color from './../color';
import CartItems from '../components/CartItems';

const CartView = () => {
    return (
        <Box flex={1} safeAreaTop bg={color.gray}>
            <Center>
                <Heading fontSize={20}>Cart</Heading>
            </Center>
            {/* <CartEmpty /> */}
            <CartItems />
        </Box>
    );
};

export default CartView;
