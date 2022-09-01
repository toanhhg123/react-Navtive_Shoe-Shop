import { Center, Text } from 'native-base';
import React from 'react';

export default function Message({ bg, color, children, size }) {
    return (
        <Center bg={bg} p={4} rounded={5}>
            <Text fontSize={size} color={color}>
                {children}
            </Text>
        </Center>
    );
}
