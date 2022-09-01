import { Center, Heading, Text } from 'native-base';
import React from 'react';
import color from '../color';

const OrderInfo = ({ icon, title, subTitle, text, success, danger }) => {
    return (
        <Center
            bg={color.while}
            w={200}
            py={2}
            shadow={4}
            rounded={10}
            mb={2}
            mr={1}
            ml={5}
            px={4}
        >
            <Center w={60} h={60} bg={color.main} rounded={100}>
                {icon}
            </Center>
            <Heading bold fontSize={12} isTruncated mt={3} mb={2}>
                {title || 'heading'}
            </Heading>
            <Text fontSize={13}>{subTitle || 'subtitle'}</Text>
            <Text fontSize={13} italic isTruncated px={2}>
                {text || 'text'}
            </Text>
            {success && (
                <Center py={2} mt={2} rounded={5} w="full" bg={color.blue}>
                    <Text fontSize={12} color={color.while}>
                        Paid on Jan 12 2021
                    </Text>
                </Center>
            )}
            {danger && (
                <Center py={2} mt={2} rounded={5} w="full" bg={color.red}>
                    <Text fontSize={12} color={color.while}>
                        Not Deliver
                    </Text>
                </Center>
            )}
        </Center>
    );
};

export default OrderInfo;
