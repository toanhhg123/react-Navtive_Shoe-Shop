import { HStack, Text } from 'native-base';
import React from 'react';
import color from './../color';
import { FontAwesome } from '@expo/vector-icons';

const Rating = ({ value, text }) => {
    const size = 8;
    const colorRate = color.orange;
    return (
        <HStack space={0.6} mt="1" alignItems={'center'}>
            <FontAwesome
                name={value > 0 ? 'star' : value > 0.5 ? 'star-half' : 'star-o'}
                size={size}
                color={colorRate}
            />
            <FontAwesome
                name={value > 1 ? 'star' : value > 1.5 ? 'star-half' : 'star-o'}
                size={size}
                color={colorRate}
            />
            <FontAwesome
                name={value > 2 ? 'star' : value > 2.5 ? 'star-half' : 'star-o'}
                size={size}
                color={colorRate}
            />
            <FontAwesome
                name={value > 3 ? 'star' : value > 3.5 ? 'star-half' : 'star-o'}
                size={size}
                color={colorRate}
            />
            <FontAwesome
                name={value > 4 ? 'star' : value > 4.5 ? 'star-half' : 'star-o'}
                size={size}
                color={colorRate}
            />
            {text && (
                <Text fontSize={12} ml={2}>
                    {text}
                </Text>
            )}
        </HStack>
    );
};

export default Rating;
