import { Box, ScrollView, Heading } from 'native-base';
import React from 'react';
import color from '../color';
import OrderInfo from '../components/OrderInfo';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import PlaceOrderModel from '../components/PlaceOrderModel';
import OrderItems from '../components/OrderItems';
<FontAwesome5 name="shipping-fast" size={24} color="black" />;
const PlaceOrderScreen = () => {
    return (
        <Box flex={1} bg={color.subGreen} safeArea pt={6}>
            <Box>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <OrderInfo
                        title={'CUTOMER'}
                        subTitle={'Shipping: rol le'}
                        text={'admin@gmail.com'}
                        success
                        icon={
                            <FontAwesome name="user" size={30} color="white" />
                        }
                    />
                    <OrderInfo
                        title={'Shippng Info'}
                        subTitle={'Shipping:Admin doe'}
                        text={'user@gmail.com'}
                        danger
                        icon={
                            <FontAwesome5
                                name="shipping-fast"
                                size={30}
                                color="white"
                            />
                        }
                    />

                    <OrderInfo
                        title={'CUTOMER'}
                        subTitle={'address: '}
                        text={'f7 VinhLoc-a , Binh chanh , Ho Chi Minh City'}
                        success
                        icon={
                            <Entypo name="location" size={30} color="white" />
                        }
                    />
                </ScrollView>
            </Box>
            <Box flex={1} pt={3} px={6}>
                <Heading bold fontSize={15} my={4}>
                    Products
                </Heading>
                <OrderItems />
                <PlaceOrderModel />
            </Box>
        </Box>
    );
};

export default PlaceOrderScreen;
