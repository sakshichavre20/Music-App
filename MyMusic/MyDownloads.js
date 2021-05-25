import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Ionicons } from "react-native-vector-icons";
import MusicList from "../CustomList/MusicList";

const MyDownloads = (props) => {
  return (
    <View style={styles.container}>
      {/* ------------------------- Header Section -------------------------------------*/}
      <View style={styles.header}>
        <View style={{ width: "10%" }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("MyMusic")}
          >
            <Ionicons name="arrow-back-sharp" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
            Downloads
          </Text>
        </View>
        <View style={{ width: "10%" }}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="search-sharp" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* -------------------------  Section -------------------------------------*/}
      <ScrollView style={{ width: "100%" }}>
        <TouchableOpacity onPress={() => {}}>
          <MusicList name="Lut Gaye" details="Jubin Nautiyal" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <MusicList name="Woh Lamhe" details="Atif Aslam" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <MusicList name="Tere Bin" details="Atif Aslam" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <MusicList name="Pehli Dafa" details="Atif Aslam" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <MusicList name="Lut Gaye" details="Jubin Nautiyal" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <MusicList name="Woh Lamhe" details="Atif Aslam" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <MusicList name="Tere Bin" details="Atif Aslam" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <MusicList name="Pehli Dafa" details="Atif Aslam" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default MyDownloads;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    paddingTop: 40,
  },
  header: {
    backgroundColor: "#FF2871",
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    height: 50,
    width: "100%",
  },
});
