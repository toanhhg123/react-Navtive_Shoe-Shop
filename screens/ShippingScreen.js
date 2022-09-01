import {
    Box,
    Text,
    Heading,
    Center,
    ScrollView,
    VStack,
    FormControl,
    Input,
} from 'native-base';
import React from 'react';
import Buttone from '../components/Buttone';
import color from '../color';
import { useNavigation } from '@react-navigation/native';

const shippingInputs = [
    {
        label: 'Enter City',
        type: 'text',
    },
    {
        label: 'Enter Country',
        type: 'text',
    },
    {
        label: 'Enter Postal Code',
        type: 'text',
    },
    {
        label: 'Enter Address',
        type: 'text',
    },
];

const ShippingScreen = () => {
    const navigation = useNavigation();
    return (
        <Box flex={1} safeAreaTop bg={color.main} py={5}>
            <Center pb={15}>
                <Text fontSize={15} bold color={color.while}>
                    DELIVERY ADDRESS
                </Text>
            </Center>
            <Box h={'full'} bg={color.while} px={'5'} pt={4}>
                <ScrollView>
                    <VStack space={6}>
                        {shippingInputs.map((input) => (
                            <FormControl key={input.label}>
                                <FormControl.Label
                                    _text={{
                                        color: color.lightBlack,
                                    }}
                                    mb={2}
                                >
                                    {input.label}
                                </FormControl.Label>
                                <Input
                                    borderWidth={0.2}
                                    bg={color.subGreen}
                                    placeholder={input.label + '....'}
                                    py={4}
                                    borderColor={color.main}
                                    type={input.type}
                                />
                            </FormControl>
                        ))}
                    </VStack>
                    <Buttone
                        color={color.while}
                        bg={color.main}
                        mt={8}
                        onPress={() => navigation.navigate('Checkout')}
                    >
                        Continiue
                    </Buttone>
                </ScrollView>
            </Box>
        </Box>
    );
};

export default ShippingScreen;
