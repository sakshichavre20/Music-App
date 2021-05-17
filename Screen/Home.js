import React,{useLayoutEffect} from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import {StatusBar} from 'expo-status-bar';
import {
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "react-native-vector-icons";

import MusicList from '../CustomList/MusicList'



const Home = ({navigation}) => {
    return (
      <View style={styles.conatiner}>
        <StatusBar style="light" />
        <View style={styles.header}>
          <View style={{ width: "10%" }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={28} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ width: "80%", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 23, fontWeight: "bold" }}>
              Music
            </Text>
          </View>
          <View
            style={{
              width: "10%",
              alignItems: "flex-end",
              position: "absolute",
            }}
          ></View>
        </View>
        {/*HEADER section ends*/}
        <View style={styles.search}>
          <FontAwesome name="search" size={24} color="#929695" />
          <TextInput placeholder="Search" style={styles.input} />
          <View style={{ width: "10%", justifyContent: "flex-end",}}>
            <MaterialIcons name="keyboard-voice" size={28} color="#929695" />
          </View>
        </View>
        {/*SEARCH section ends*/}
        <ScrollView style={{ width: "100%" }}>
          <MusicList name="Lut Gaye" details="Jubin Nautiyal" />
          <MusicList name="Woh Lamhe" details="Atif Aslam" />
          <MusicList name="Tere Bin" details="Atif Aslam" />
          <MusicList name="Pehli Dafa" details="Atif Aslam" />
        </ScrollView>
      </View>
    );
}

export default Home

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#FF2871",
    height: 50,
    width: "100%",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  search: {
    backgroundColor: "white",
    width: "80%",
    height: 40,
    alignItems: "center",
    margin: 13,
    flexDirection: "row",
    borderRadius: 20,
    paddingHorizontal:15
  },
  input: {
    width: "82%",
    paddingLeft:10,
    fontSize:18,
  },
});

