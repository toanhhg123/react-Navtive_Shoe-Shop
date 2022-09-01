import { Box, Center, Image, VStack } from 'native-base';
import React from 'react';
import Buttone from '../components/Buttone';
import color from './../color';

const NotVerifyScreen = () => {
    return (
        <Box flex={1} bg={color.main} safeArea>
            <Center w={'full'} h={250}>
                <Image
                    source={require('../assets/favicon.png')}
                    alt="Logo"
                    size={'lg'}
                ></Image>
            </Center>
            <VStack space={6} p={6} alignItems={'center'}>
                <Buttone bg={color.black} color={color.while}>
                    Register
                </Buttone>
                <Buttone bg={color.while} color={color.black}>
                    Login
                </Buttone>
            </VStack>
        </Box>
    );
};

export default NotVerifyScreen;
