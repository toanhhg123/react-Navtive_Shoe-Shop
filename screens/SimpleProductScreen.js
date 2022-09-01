import { Ionicons, Octicons } from '@expo/vector-icons';
import {
    Box,
    Button,
    Heading,
    HStack,
    Image,
    Input,
    ScrollView,
    Text,
} from 'native-base';
import React from 'react';
import Buttone from '../components/Buttone';
import Rating from '../components/Rating';
import Review from '../components/Review';
import color from './../color';
import { useNavigation, useRoute } from '@react-navigation/native';

const SimpleProductScreen = ({ route }) => {
    const [quantity, setQuantity] = React.useState(1);
    const product = route.params;
    return (
        <Box safeArea flex={1}>
            <ScrollView px={4}>
                <Image
                    source={product.image}
                    w="full"
                    resizeMode="contain"
                    height={300}
                    alt="product img"
                />
                <Heading fontSize={15} bold lineHeight={22}>
                    {product.name}
                </Heading>
                <Rating value={4} />
                <HStack
                    mt={3}
                    justifyContent="space-between"
                    alignItems={'center'}
                >
                    <HStack space={1}>
                        <Button
                            bg={color.main}
                            onPress={() => {
                                if (quantity - 1) setQuantity(quantity - 1);
                            }}
                        >
                            <Octicons
                                name="dash"
                                size={20}
                                color={color.while}
                            />
                        </Button>
                        <Input
                            type="number"
                            w="100"
                            h={'10'}
                            py="0"
                            placeholder="quantity"
                            value={quantity.toString()}
                            onChangeText={(text) => {
                                if (Number(text)) setQuantity(Number(text));
                            }}
                        />
                        <Button
                            bg={color.main}
                            onPress={() => setQuantity(quantity + 1)}
                        >
                            <Ionicons
                                name="add"
                                size={20}
                                color={color.while}
                            />
                        </Button>
                    </HStack>
                    <Text fontSize={20} fontWeight="bold">
                        $32
                    </Text>
                </HStack>
                <Text mt={3} fontSize={12}>
                    {product.description}
                </Text>
                <Buttone mt={10} color={color.while} bg={color.main}>
                    Add to cart
                </Buttone>
                <Review />
            </ScrollView>
        </Box>
    );
};

export default SimpleProductScreen;
