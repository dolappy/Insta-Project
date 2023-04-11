import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import List1 from './List1'
import List2 from './List2'
import List3 from './List3'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import Ionic from "react-native-vector-icons/Ionicons";


const TopTab = () => {
    const Stack = createMaterialTopTabNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="profilekk"
                component={List1}
                options={{
                    headerShown: false,
                    tabBarStyle: { height: 52 },
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color }) => (
                        focused ?
                            <MaterialCommunityIcons name="view-gallery" size={28} color="black" />
                            :
                            <MaterialCommunityIcons name="view-gallery-outline" size={24} color="black" />
                    )
                }}
            />
            <Stack.Screen
                name="List"
                component={List2}
                options={{
                    headerShown: false,
                    tabBarStyle: { height: 52 },
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color }) => (
                        focused ?
                            <Ionic name="caret-forward-circle" size={27} color="black" />
                            :
                            <Ionic name="caret-forward-circle-outline" size={25} color="black" />
                    )
                }}
            />
            <Stack.Screen
                name="videos"
                component={List3}
                options={{
                    headerShown: false,
                    tabBarStyle: { height: 52 },
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color }) => (
                        focused ?
                            <MaterialCommunityIcons name="view-gallery" size={28} color="black" />
                            :
                            <MaterialCommunityIcons name="view-gallery-outline" size={24} color="black" />
                    )
                }}
            />
        </Stack.Navigator>

    )
}

export default TopTab

const styles = StyleSheet.create({})