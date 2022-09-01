import {
    Center,
    HStack,
    Modal,
    Text,
    VStack,
    Button,
    Pressable,
    Image,
} from 'native-base';
import Buttone from './Buttone';
import color from './../color';
import { useState } from 'react';

const orderInfos = [
    {
        title: 'Products',
        price: 12.77,
        color: 'black',
    },
    {
        title: 'Shipping',
        price: 34.0,
        color: 'black',
    },
    {
        title: 'Tax',
        price: 12.77,
        color: 'black',
    },
    {
        title: 'Total Amount',
        price: 1450.77,
        color: 'main',
    },
];
export default function PlaceOrderModel() {
    const [show, setShow] = useState(false);
    return (
        <Center pt={4}>
            <Buttone
                onPress={() => setShow(true)}
                bg={color.black}
                color={color.while}
            >
                SHOW TOTAL
            </Buttone>
            <Modal avoidKeyboard isOpen={show} onClose={() => setShow(false)}>
                <Modal.Content maxWidth={350}>
                    <Modal.Header>Order</Modal.Header>
                    <Modal.CloseButton />
                    <Modal.Body>
                        <VStack space={7}>
                            {orderInfos.map((order, i) => (
                                <HStack
                                    key={i}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                >
                                    <Text fontWeight={'medium'}>
                                        {order.title}
                                    </Text>
                                    <Text bold color={color[order.color]}>
                                        ${order.price}
                                    </Text>
                                </HStack>
                            ))}
                        </VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Pressable w={'full'} py={3} bg={color.paypal} mb={3}>
                            <Image
                                w={'full'}
                                h={30}
                                source={{
                                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/1280px-PayPal_logo.svg.png',
                                }}
                                resizeMode="contain"
                            />
                        </Pressable>
                        <Button
                            _text={{
                                fontWeight: 'bold',
                            }}
                            flex={1}
                            bg={color.main}
                            onPress={() => setShow(false)}
                        >
                            PLACE AND ORDER
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    );
}
