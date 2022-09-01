import { Dimensions, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Profile from './Profile';
import Oders from './Oders';
import { StyleSheet } from 'react-native';
import color from './../../color';
import { Pressable, Text } from 'native-base';
const renderSceneMap = SceneMap({
    first: Profile,
    second: Oders,
});
const initialLayout = {
    width: Dimensions.get('window').width,
};
const Tabs = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key: 'first',
            title: 'Profile',
        },
        {
            key: 'second',
            title: 'Orders',
        },
    ]);
    const RenderTabsBar = (props) => {
        return (
            <TabBar
                {...props}
                activeColor={color.main}
                tabStyle={styles.tabStyle}
                inactiveColor={color.while}
                indicatorStyle={{ backgroundColor: color.black }}
                renderLabel={({ route, color }) => (
                    <Pressable>
                        <Text style={{ color, ...styles.text }}>
                            {route.title}
                        </Text>
                    </Pressable>
                )}
            />
        );
    };
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderSceneMap}
            renderTabBar={RenderTabsBar}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
        />
    );
};

const styles = StyleSheet.create({
    tabStyle: {
        backgroundColor: '#000',
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold',
    },
});

export default Tabs;
