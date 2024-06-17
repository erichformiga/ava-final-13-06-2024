import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/Home";
import theme from "../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

function AppNavigator() {
    return ( 
    <NavigatorContainer>
        <Tab.Navigator>
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons 
                    name="home" 
                    color={color}
                    size={26} 
                    />    
                ),
            }}
            />
            <Tab.Screen
            name="Themes"
            component={Theme}
            options={{
                tabBarLabel: 'Themes',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons 
                    name="theme-light-dark" 
                    color={color}
                    size={26}  
                />   
                ),
            }}
            />
        </Tab.Navigator>
    </NavigatorContainer>
);
}
export default AppNavigator;
