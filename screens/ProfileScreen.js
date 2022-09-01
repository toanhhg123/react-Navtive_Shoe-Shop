import { View, Text, Box, Center, Image, Heading } from 'native-base';
import React from 'react';
import Tabs from '../components/Profile/Tabs';
import color from './../color';

const ProfileScreen = () => {
    return (
        <Box flex={1}>
            <Center bg={color.main} pt={10} pb={6}>
                <Image
                    source={require('../assets/images/user.png')}
                    w={24}
                    h={24}
                    resizeMode="contain"
                    alt="alt"
                />
                <Heading color={color.while} fontSize={15} mt={3}>
                    Admin Rol
                </Heading>
                <Text color={color.gray} italic>
                    Joined Dec 12 2022
                </Text>
            </Center>
            <Tabs />
        </Box>
    );
};

export default ProfileScreen;
