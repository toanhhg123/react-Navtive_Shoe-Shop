import { MaterialIcons } from '@expo/vector-icons';
import {
    Box,
    Button,
    Heading,
    Input,
    Pressable,
    Text,
    VStack,
} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import color from '../color';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({}) => {
    const navigation = useNavigation();
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
                <Heading>Login</Heading>
                <VStack space={5} pt="6">
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
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'bottom' }],
                        })
                    }
                >
                    Login
                </Button>
                <Pressable
                    mt={4}
                    onPress={() => navigation.navigate('register')}
                >
                    <Text color={color.deepGray}>Sign up</Text>
                </Pressable>
            </Box>
        </Box>
    );
};

export default LoginScreen;
