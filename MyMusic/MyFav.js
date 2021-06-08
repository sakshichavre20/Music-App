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
import MyFavlist from "../CustomList/MyFavlist";

const MyFav = (props) => {
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
            Favourite
          </Text>
        </View>
        <View style={{ width: "10%" }}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="search-sharp" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      {/* -------------------------  Section -------------------------------------*/}
      <MyFavlist navigation={props.navigation} />
    </View>
  );
};

export default MyFav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
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
