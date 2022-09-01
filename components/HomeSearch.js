import { Box, HStack, Input, Pressable } from 'native-base';
import React from 'react';
import color from './../color';
import { FontAwesome } from '@expo/vector-icons';

const HomeSearch = () => {
    return (
        <HStack safeAreaTop bg={color.main} px={6} py={4}>
            <Input
                h={12}
                w={'85%'}
                bg={color.while}
                _focus={{
                    bg: color.while,
                }}
                type={'search'}
                placeholder={'nike, puma, adidas,.....'}
            />
            <Pressable flex={1} justifyContent="center" alignItems={'flex-end'}>
                <FontAwesome
                    name="shopping-basket"
                    size={24}
                    color={color.while}
                />
                <Box
                    rounded={'full'}
                    _text={{
                        color: color.while,
                    }}
                    background={color.red}
                    px={1}
                    position="absolute"
                    top={1}
                    right={-6}
                >
                    0
                </Box>
            </Pressable>
        </HStack>
    );
};

export default HomeSearch;
