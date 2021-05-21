import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialIcons,
} from "react-native-vector-icons";


const MyMusic = (props) => {
  return (
    <View style={styles.container}>
      {/* HEADER SECTION */}
      <View style={styles.header}>
        <View style={{ alignItems: "center", width: "100%" }}>
          <Text style={{ fontWeight: "bold", fontSize: 22, color: "white" }}>
            My Music
          </Text>
        </View>
      </View>
      {/* MYDOWNLOADS SECTION */}
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("MyDownloads")}
        style={{ width: "100%", height: 50 }}
      >
        <View style={styles.list}>
          <View style={{ width: "10%", justifyContent: "center" }}>
            <Ionicons name="play-circle-outline" size={37} color="white" />
          </View>
          <View
            style={{
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", color:'white' }}>MyDownloads</Text>
            <Text style={{ fontSize: 15, color: "white" }}>6 songs</Text>
          </View>
          <View
            style={{
              width: "10%",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <AntDesign name="right" size={30} color="white"/>
          </View>
        </View>
      </TouchableOpacity>
      {/* MYFAVOURITE SECTION */}
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("MyFav")}
        style={{ width: "100%", height: 50 }}
      >
        <View style={styles.list}>
          <View style={{ width: "10%", justifyContent: "center" }}>
            <MaterialIcons name='favorite-outline' size={30} color='white'/>
          </View>
          <View
            style={{
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" , color:'white' }}>
              My Favourite
            </Text>
            <Text style={{ fontSize: 15, color: "white" }}>8 songs</Text>
          </View>
          <View
            style={{
              width: "10%",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <AntDesign name="right" size={30} color='white' />
          </View>
        </View>
      </TouchableOpacity>
      {/*  MY LIBRARY SECTION  */}
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("MyLibrary")}
        style={{ width: "100%", height: 50 }}
      >
        <View style={styles.list}>
          <View style={{ width: "10%", justifyContent: "center" }}>
            <MaterialIcons name="library-music" size={30} color='white'/>
          </View>
          <View
            style={{
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" , color:'white'}}>My Library</Text>
            <Text style={{ fontSize: 15, color: "white" }}>15 songs</Text>
          </View>
          <View
            style={{
              width: "10%",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <AntDesign name="right" size={30} color='white'/>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MyMusic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  header: {
    height: 60,
    width: "100%",
    backgroundColor: "#FF2871",
    alignItems: "center",
    flexDirection: "row",
  },
  list: {
    width: "100%",
    height: 50,
    backgroundColor: "#2d2d2d",
    padding: 5,
    flexDirection: "row",
    borderBottomWidth: 0.2,
  },
});
