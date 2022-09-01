import { Flex, ScrollView, Pressable, Image, Heading, Text } from 'native-base';
import React from 'react';
import products from '../data/products';
import color from './../color';
import Rating from './Rating';
import { useNavigation } from '@react-navigation/native';
const img1 = require('../assets/images/1.png');

const HomeProduct = () => {
    const navigation = useNavigation();
    return (
        <ScrollView
            flex={1}
            bg={color.subGreen}
            showsVerticalScrollIndicator={false}
        >
            <Flex
                flexDirection={'row'}
                flexWrap="wrap"
                justifyContent={'space-between'}
                px={6}
            >
                {products.map((p, i) => (
                    <Pressable
                        bg={color.while}
                        width={'45%'}
                        key={i}
                        my={3}
                        p={2}
                        onPress={() => navigation.navigate('Simple', p)}
                    >
                        <Image
                            source={p.image}
                            w={'full'}
                            h={'24'}
                            resizeMode="contain"
                            alt={p.name}
                        />
                        <Heading size={'sm'} bold>
                            ${p.price}
                        </Heading>
                        <Text isTruncated mt={1} fontSize={10}>
                            {p.name}
                        </Text>
                        <Rating value={p.rating} />
                    </Pressable>
                ))}
            </Flex>
        </ScrollView>
    );
};

export default HomeProduct;
