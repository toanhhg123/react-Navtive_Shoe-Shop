import React from 'react';
import {
    Box,
    ScrollView,
    HStack,
    Text,
    Pressable,
    Image,
    Center,
    VStack,
    Button,
} from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import products from '../data/products';
import color from './../color';
import Buttone from './Buttone';
import { useNavigation } from '@react-navigation/native';

const Swiper = () => {
    return (
        <SwipeListView
            rightOpenValue={-50}
            previewRowKey={0}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            data={products}
            renderHiddenItem={renderHiddenItem}
            renderItem={renderItems}
            showsVerticalScrollIndicator={false}
        ></SwipeListView>
    );
};

const renderItems = ({ item }) => {
    return (
        <Pressable
            key={item.name}
            bg={color.while}
            shadow={2}
            mx={6}
            mb={3}
            rounded={10}
            h={100}
            overflow="hidden"
        >
            <HStack>
                <Center width={'1/3'} bg={color.subGreen} p={1}>
                    <Image
                        source={item.image}
                        resizeMode={'contain'}
                        height={'100%'}
                        w={'full'}
                    />
                </Center>
                <HStack flex={1} justifyContent={'space-between'}>
                    <VStack justifyContent={'center'} space={1} flex={1} px={2}>
                        <Text isTruncated bold>
                            {item.name}
                        </Text>
                        <Text color={color.lightBlack} bold>
                            ${item.price}
                        </Text>
                    </VStack>
                    <Center pr={1} flexShrink={0}>
                        <Button bg={color.main}>{10}</Button>
                    </Center>
                </HStack>
            </HStack>
        </Pressable>
    );
};
const renderHiddenItem = (data) => {
    return (
        <Pressable bg={color.black} h={'100'} mx={6} mb={3} rounded={10}>
            <Box>
                <HStack>
                    <Text>item hiden</Text>
                </HStack>
            </Box>
        </Pressable>
    );
};
const CartItems = () => {
    const navigation = useNavigation();
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Swiper />
            <HStack
                rounded={50}
                alignItems="center"
                justifyContent={'space-between'}
                m={6}
                bg={color.while}
                p={1}
            >
                <Text bold color={color.lightBlack} pl={2}>
                    Total
                </Text>
                <Button
                    bg={color.main}
                    px={10}
                    rounded={50}
                    _text={{
                        fontWeight: 'bold',
                    }}
                >
                    $100
                </Button>
            </HStack>

            <Center m={6}>
                <Buttone
                    bg={color.black}
                    color={color.while}
                    mt={10}
                    onPress={() => navigation.navigate('Shipping')}
                >
                    Checkout
                </Buttone>
            </Center>
        </ScrollView>
    );
};

export default CartItems;
