import {
    Box,
    Center,
    HStack,
    Image,
    ScrollView,
    Text,
    VStack,
} from 'native-base';
import React, { useState } from 'react';
import color from '../color';
import Buttone from '../components/Buttone';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const paymentMethods = [
    {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/1280px-PayPal_logo.svg.png',
        alt: 'paypal',
        icon: <Ionicons name="checkmark-circle" size={24} color={color.main} />,
    },
    {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Discover_Card_logo.svg/2560px-Discover_Card_logo.svg.png',
        alt: 'discover',
        icon: <FontAwesome5 name="circle" size={24} color={color.main} />,
    },
    {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Pay_Logo_%282020%29.svg/2560px-Google_Pay_Logo_%282020%29.svg.png',
        alt: 'G Pay',
        icon: <FontAwesome5 name="circle" size={24} color={color.main} />,
    },
];

const PaymentScreen = () => {
    const [checked, setChecked] = useState(0);
    const navigation = useNavigation();
    return (
        <Box flex={1} safeAreaTop bg={color.main} py={5}>
            <Center pb={15}>
                <Text fontSize={15} bold color={color.while}>
                    DELIVERY ADDRESS
                </Text>
            </Center>
            <Box h={'full'} bg={color.gray} px={'5'} pt={4}>
                <ScrollView>
                    <VStack space={6}>
                        {paymentMethods.map((p, i) => (
                            <HStack
                                key={p.alt}
                                alignItems={'center'}
                                justifyContent="space-between"
                                bg={color.while}
                                px={2}
                                rounded={10}
                            >
                                <Image
                                    source={{
                                        uri: p.uri,
                                    }}
                                    alt="img"
                                    w={60}
                                    height={50}
                                    resizeMode="contain"
                                />
                                {i === checked ? (
                                    <Ionicons
                                        onPress={() => setChecked(i)}
                                        name="checkmark-circle"
                                        size={24}
                                        color={color.main}
                                    />
                                ) : (
                                    <FontAwesome5
                                        onPress={() => setChecked(i)}
                                        name="circle"
                                        size={24}
                                        color={color.main}
                                    />
                                )}
                            </HStack>
                        ))}
                    </VStack>
                    <Buttone
                        color={color.while}
                        bg={color.main}
                        mt={8}
                        onPress={() => navigation.navigate('PlaceOrder')}
                    >
                        Continiue
                    </Buttone>

                    <Center mt={6}>
                        <Text italic color={color.paypal}>
                            Payment method is <Text bold>Paypal</Text> by
                            defauld
                        </Text>
                    </Center>
                </ScrollView>
            </Box>
        </Box>
    );
};

export default PaymentScreen;
