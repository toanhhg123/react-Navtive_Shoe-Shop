import {
    Box,
    Heading,
    VStack,
    Text,
    FormControl,
    Select,
    CheckIcon,
    TextArea,
} from 'native-base';
import React, { useState } from 'react';
import color from './../color';
import Buttone from './Buttone';
import Message from './Notifications/Message';
import Rating from './Rating';

const Review = () => {
    const [rating, setRating] = useState('');
    console.log(rating);
    return (
        <Box my={9}>
            <Heading bold fontSize={15} mb={2}>
                Review
            </Heading>

            <VStack p={3} bg={color.gray} space={1}>
                <Heading fontSize={15}>Rol Le</Heading>
                <Rating value={4} />
                <Text color={color.lightBlack} fontSize={12} bold>
                    Jan 12 2022
                </Text>
                <Message bg={color.while} size={12}>
                    highly customizable and consistent across android, iOS &
                    web. That's not all though, read on for the full benefits of
                    using v3
                </Message>
            </VStack>

            <Box mt={6}>
                <Heading bold fontSize={15} mb={2}>
                    Review
                </Heading>
                <VStack space={6} mt={6}>
                    <FormControl>
                        <FormControl.Label
                            _text={{
                                fontSize: '12px',
                                fontWeight: 'bold',
                            }}
                        >
                            Ratting
                        </FormControl.Label>
                        <Select
                            minWidth="200"
                            accessibilityLabel="Choice Ratting"
                            placeholder="Choose Ratting"
                            bg={color.gray}
                            _selectedItem={{
                                bg: color.gray,
                                endIcon: <CheckIcon size={5} />,
                            }}
                            borderWidth={'0'}
                            py={3}
                            onValueChange={(value) => setRating(value)}
                        >
                            <Select.Item label="1 -- poor" value="1" />
                            <Select.Item label="2 -- Fair" value="2" />
                            <Select.Item label="3 -- Good" value="3" />
                        </Select>
                    </FormControl>

                    <FormControl>
                        <FormControl.Label
                            _text={{
                                fontSize: '12px',
                                fontWeight: 'bold',
                            }}
                        >
                            Comment
                        </FormControl.Label>
                        <TextArea
                            alignItems={'flex-start'}
                            placeholder="product is good ...."
                            h={20}
                            w="full"
                            bg={color.subGreen}
                            color={color.lightBlack}
                            borderWidth={0}
                            py={4}
                            _focus={{}}
                        />
                    </FormControl>

                    <Buttone bg={color.main} color={color.while}>
                        SUBMIT
                    </Buttone>
                    <Message bg={color.black} color={color.while} size={12}>
                        please Login to write review
                    </Message>
                </VStack>
            </Box>
        </Box>
    );
};

export default Review;
