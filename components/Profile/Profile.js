import { Box, FormControl, ScrollView, Input } from 'native-base';
import React from 'react';
import color from './../../color';
import Buttone from './../Buttone';

const inputs = [
    {
        type: 'text',
        lable: 'USERNAME',
    },
    {
        type: 'email',
        lable: 'Email',
    },
    {
        type: 'password',
        lable: 'PASSWORD',
    },
    {
        type: 'password',
        lable: 'Confirm Password',
    },
];

const Profile = () => {
    return (
        <Box h={'full'} px={5} pt={3}>
            <ScrollView>
                {inputs.map((input, index) => (
                    <FormControl key={input.lable} mb={3}>
                        <FormControl.Label
                            _text={{
                                fontSize: 12,
                                fontWeight: 'bold',
                            }}
                        >
                            {input.lable}
                        </FormControl.Label>
                        <Input
                            borderWidth={0}
                            bg={color.subGreen}
                            py={3}
                            placeholder={input.lable}
                            type={input.type}
                            _focus={{
                                borderColor: color.main,
                                borderWidth: 1,
                                bg: color.subGreen,
                            }}
                        />
                    </FormControl>
                ))}
                <Buttone mt={3} bg={color.main} color={color.while}>
                    UPDATE PROFILE
                </Buttone>
            </ScrollView>
        </Box>
    );
};

export default Profile;
