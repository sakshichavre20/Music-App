import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from '../Screen/Home';
import Login from './../Screen/Login';
import Signup from './../Screen/Signup';
import Tab3 from '../Screen/Tab3'
import Tab1 from '../Screen/Tab1';
import Tab2 from './../Screen/Tab2';


 const Stack = createStackNavigator();
    function Navigator(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login}/>                      
                    <Stack.Screen name="Signup" component={Signup}/>
                    <Stack.Screen name="Home" component={BottomTab}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

    export default Navigator;