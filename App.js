import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
} from "react-native-vector-icons";
//importing pages
import Login from "./Screen/Login";
import Signup from "./Screen/Signup";
import Account from "./Screen/Account";
import Setting from "./Screen/Settings";
import Home from "./Screen/Home";
import { DrawerContent } from "./Components/CustomDrawer";
import PodCast from "./Screen/Podcast";
import MyMusic from "./Screen/MyMusic";
import Equalizer from "./Settings/Equalizer";
import LanguagePref from "./Settings/LanguagePref";
import StreamingQuality from "./Settings/StreamingQuality";
import DownloadQuality from "./Settings/DownloadQuality";
import MyFav from "./MyMusic/MyFav";
import MyDownloads from "./MyMusic/MyDownloads";
import MyLibraray from "./MyMusic/MyLibraray";
import Navigation from "./Settings/Navigation";
import CustomerSupport from "./Settings/HelpAndSupport/CustomerSupport";
import Update from "./Settings/HelpAndSupport/Update";
import MusicPlayer from "./Screen/MusicPlayer";
import MusicCatogList from "./Screen/MusicCatogList";
import SongList from "./Screen/SongList";

{
  /* ---------------------------Screen Stack ------------------------------------------- */
}

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
          name="HomeScreen"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Equalizer"
          component={Equalizer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LanguagePref"
          component={LanguagePref}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StreamingQuality"
          component={StreamingQuality}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DownloadQuality"
          component={DownloadQuality}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MyDownloads"
          component={MyDownloads}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MyFav"
          component={MyFav}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MyLibrary"
          component={MyLibraray}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CustomerSupport"
          component={CustomerSupport}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Update"
          component={Update}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MusicPlayer"
          component={MusicPlayer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MusicCatogList"
          component={MusicCatogList}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SongList"
          component={SongList}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* --------------------------------Bottom Stack ------------------------------------------- */

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
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Podcast"
        component={PodCast}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="podcast" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyMusic"
        component={MyMusic}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-musical-notes-sharp" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
/* --------------------------------Drawer Stack Stack ------------------------------------------- */
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Music" component={BottomTab} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Account" component={Account} />
    </Drawer.Navigator>
  );
}
