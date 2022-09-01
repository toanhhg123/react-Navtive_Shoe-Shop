import React from 'react';
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, StatusBar } from 'native-base';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import NotVerifyScreen from './screens/NotVerifyScreen';
import HomeScreen from './screens/HomeScreen';
import SimpleProductScreen from './screens/SimpleProductScreen';
import CartView from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderScreen from './screens/OrderScreen';
import BottomNav from './Navigations/BottomNav';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="login"
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="bottom" component={BottomNav} />
                    <Stack.Screen name="register" component={RegisterScreen} />
                    <Stack.Screen name="login" component={LoginScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
