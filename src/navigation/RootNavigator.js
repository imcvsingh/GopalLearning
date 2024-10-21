import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../Screens/SplashScreen/SplashScreen";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen/SignUpScreen";

const Stack = createStackNavigator();
const RootNavigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options= {{headerShown:false}}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options= {{headerShown:false}}/>
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} options= {{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default RootNavigator;