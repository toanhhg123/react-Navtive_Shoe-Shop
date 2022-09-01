import React from 'react';
import {
    Button,
    Center,
    FlatList,
    HStack,
    Image,
    Text,
    VStack,
    Pressable,
} from 'native-base';
import products from '../data/products';
import color from '../color';
const OrderItems = () => {
    return (
        <FlatList
            data={products}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <Pressable
                    key={item.name}
                    bg={color.while}
                    shadow={2}
                    mb={3}
                    rounded={10}
                    overflow="hidden"
                    h={100}
                >
                    <HStack>
                        <Center width={'1/3'} p={1}>
                            <Image
                                source={item.image}
                                resizeMode={'contain'}
                                height={'100%'}
                                w={'full'}
                            />
                        </Center>
                        <HStack flex={1} justifyContent={'space-between'}>
                            <VStack
                                justifyContent={'center'}
                                space={1}
                                flex={1}
                                px={2}
                            >
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
            )}
        />
    );
};

export default OrderItems;
