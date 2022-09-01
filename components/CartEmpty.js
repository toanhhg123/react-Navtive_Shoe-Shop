import React from 'react';
import { Box, Center, Text } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import color from './../color';
import Buttone from './Buttone';

export default function CartEmpty() {
    return (
        <Box flex={1} p={4}>
            <Center flex={1}>
                <Center w={200} h={200} rounded={'full'} bg={color.while}>
                    <FontAwesome
                        name="shopping-basket"
                        size={64}
                        color={color.main}
                    />
                </Center>
                <Text color={color.main} bold mt={5}>
                    Cart Is Empty
                </Text>
            </Center>
            <Buttone color={color.while} bg={color.black}>
                Start Shopping
            </Buttone>
        </Box>
    );
}
