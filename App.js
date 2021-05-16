import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons , Ionicons} from 'react-native-vector-icons'
//importing pages 
import Login from './Screen/Login';
import Signup from './Screen/Signup';
import Account from './Screen/Account';
import Setting from './Screen/Settings';
import Home from './Screen/Home';
import Notification from './Screen/Notification';
import Security from './Screen/Security';
import SignOut from './Screen/SignOut';



const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 const Tab = createMaterialBottomTabNavigator();
 function BottomTab() {
   return (
     <Tab.Navigator
       activeColor="#FF2871"
       barStyle={{ backgroundColor: "black" }}
       shifting={true}
     >
       <Tab.Screen
         name="Home"
         component={DrawerNavigator}
         options={{
           tabBarIcon: ({ color }) => (
             <MaterialCommunityIcons name="home" color={color} size={26} />
           ),
         }}
       />
       <Tab.Screen
         name="Account"
         component={Account}
         options={{
           tabBarIcon: ({ color }) => (
             <MaterialCommunityIcons
               name="account-circle"
               color={color}
               size={26}
             />
           ),
         }}
       />
       <Tab.Screen
         name="Setting"
         component={Setting}
         options={{
           tabBarIcon: ({ color }) => (
             <Ionicons name="settings" color={color} size={25} />
           ),
         }}
       />
     </Tab.Navigator>
   );
 }

 const Drawer = createDrawerNavigator();
 function DrawerNavigator () {
 return (
   <Drawer.Navigator initialRouteName="Home">
     <Drawer.Screen name="Home" component={Home} />
     <Drawer.Screen name="Notification" component={Notification} />
     <Drawer.Screen name="Security" component={Security} />
     <Drawer.Screen name="SignOut" component={SignOut}/>
   </Drawer.Navigator>
 );
 }
