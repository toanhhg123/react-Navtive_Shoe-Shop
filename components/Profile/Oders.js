import { Box, Button, ScrollView, Text, Pressable } from 'native-base';
import React from 'react';
import color from '../../color';

const Oders = () => {
    return (
        <Box h={'full'}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Pressable
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    flexDirection={'row'}
                    bg={color.subGreen}
                    py={5}
                    px={2}
                    my={2}
                >
                    <Text maxW={150} color={color.blue} isTruncated>
                        2132131ff3wef3fwefascadasdasdasdasdasd
                    </Text>
                    <Text bold>PAID</Text>
                    <Text italic>Dec 12 2002</Text>
                    <Button rounded={50} px={7} py={1.5} bg={color.main}>
                        $123
                    </Button>
                </Pressable>
                <Pressable
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    flexDirection={'row'}
                    bg={color.subGreen}
                    py={5}
                    px={2}
                    my={2}
                >
                    <Text maxW={150} color={color.blue} isTruncated>
                        2132131ff3wef3fwefascadasdasdasdasdasd
                    </Text>
                    <Text bold>PAID</Text>
                    <Text italic>Dec 12 2002</Text>
                    <Button rounded={50} px={7} py={1.5} bg={color.red}>
                        $12
                    </Button>
                </Pressable>
            </ScrollView>
        </Box>
    );
};

export default Oders;
