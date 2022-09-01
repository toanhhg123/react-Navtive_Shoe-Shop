import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './../screens/HomeScreen';
import { Center, Pressable, Text } from 'native-base';
import {
    Entypo,
    FontAwesome,
    FontAwesome5,
    MaterialCommunityIcons,
} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import color from './../color';
import ProfileScreen from './../screens/ProfileScreen';
import CartView from '../screens/CartScreen';
import StackNav from './StackNav';

const Tab = createBottomTabNavigator();

const BottomNav = ({ navigation, route }) => {
    return (
        <Tab.Navigator
            backBehavior="main"
            initialRouteName="main"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: { ...styles.tab },
                headerShown: false,
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tab.Screen
                name="main"
                component={StackNav}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Center>
                            {focused ? (
                                <Entypo
                                    name="home"
                                    size={24}
                                    color={color.main}
                                />
                            ) : (
                                <AntDesign
                                    name="home"
                                    size={24}
                                    color="black"
                                />
                            )}
                        </Center>
                    ),
                }}
            />
            <Tab.Screen
                name="cart"
                component={CartView}
                options={{
                    headerShown: false,
                    tabBarButton: (props) => {
                        return (
                            <Pressable
                                {...props}
                                onPress={props.onPress}
                                style={{}}
                                h={70}
                                w={70}
                                rounded="full"
                                bg={color.main}
                                top={-30}
                            >
                                {props.children}
                            </Pressable>
                        );
                    },
                    tabBarIcon: ({ focused }) => (
                        <Center>
                            {focused ? (
                                <FontAwesome5
                                    name="shopping-basket"
                                    size={24}
                                    color={color.while}
                                />
                            ) : (
                                <MaterialCommunityIcons
                                    name="shopping-outline"
                                    size={24}
                                    color={color.while}
                                />
                            )}
                        </Center>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Center>
                            {focused ? (
                                <FontAwesome
                                    name="user"
                                    size={24}
                                    color={color.main}
                                />
                            ) : (
                                <AntDesign
                                    name="user"
                                    size={24}
                                    color="black"
                                />
                            )}
                        </Center>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tab: {
        elevation: 0,
        backgroundColor: color.while,
        height: 60,
    },
});
export default BottomNav;
