import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Ionicons,
} from "react-native-vector-icons";

const MusicList = ({ name, details }) => {
  return (
    <View style={styles.container}>
      <View
        style={{ width: "90%", flexDirection: "row", alignItems: "center" }}
      >
        <Ionicons name="musical-notes" size={24} color="white" />
        <View style={{ paddingLeft: 20 }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.details}>{details}</Text>
        </View>
      </View>

      <View style={{ width: "10%", alignItems: "flex-end" }}>
        <AntDesign name="heart" size={20} color="white" />
      </View>
    </View>
  );
};

export default MusicList;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    borderBottomColor: "#2D2D2D",
    borderBottomWidth: 0.3,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF2871",
  },
  details: {
    fontSize: 15,
    color: "#929695",
  },
});
