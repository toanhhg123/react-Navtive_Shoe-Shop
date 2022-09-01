import { AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import {
    Box,
    Button,
    Heading,
    Input,
    Pressable,
    Text,
    VStack,
} from 'native-base';
import React from 'react';
import color from '../color';
const RegisterScreen = ({ navigation }) => {
    return (
        <Box flex={1} bg={color.main} position="relative">
            <Box
                position={'absolute'}
                bg={color.while}
                w={'60%'}
                height={'100%'}
                left={'5%'}
            ></Box>
            <Box
                position="absolute"
                justifyContent={'center'}
                height={'100%'}
                w="100%"
                px="6"
            >
                <Heading>Register</Heading>
                <VStack space={5} pt="6">
                    <Input
                        InputLeftElement={
                            <FontAwesome
                                name="user"
                                size={24}
                                color={color.main}
                            />
                        }
                        variant={'underlined'}
                        placeholder="rolle"
                        w={'70%'}
                        borderBottomColor={color.underline}
                        pl={2}
                    />
                    <Input
                        InputLeftElement={
                            <MaterialIcons
                                name="email"
                                size={24}
                                color={color.main}
                            />
                        }
                        variant={'underlined'}
                        placeholder="example@gmail.com"
                        w={'70%'}
                        borderBottomColor={color.underline}
                        pl={2}
                    />
                    <Input
                        InputLeftElement={
                            <AntDesign
                                name="eye"
                                size={24}
                                color={color.main}
                            />
                        }
                        variant={'underlined'}
                        placeholder="*******"
                        type="password"
                        w={'70%'}
                        borderBottomColor={color.underline}
                        pl={2}
                    />
                </VStack>
                <Button
                    _pressed={{
                        bg: color.main,
                    }}
                    mt={30}
                    w={'40%'}
                    rounded={50}
                    bg={color.main}
                    onPress={() => navigation.navigate('bottom')}
                >
                    Register
                </Button>
                <Pressable mt={4} onPress={() => navigation.goBack()}>
                    <Text color={color.deepGray}>Login</Text>
                </Pressable>
            </Box>
        </Box>
    );
};

export default RegisterScreen;
