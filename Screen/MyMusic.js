import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

const MyMusic = (props) => {
  return (
    <View style={styles.container}>
      {/* ----------------------------------------HEADER SECTION--------------------------------------- */}
      <View style={styles.header}>
        <View style={{ alignItems: "center", width: "100%" }}>
          <Text style={{ fontWeight: "bold", fontSize: 22, color: "white" }}>
            My Music
          </Text>
        </View>
      </View>
      {/* ----------------------------------------MYDOWNLOADS SECTION--------------------------------- */}
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("MyDownloads")}
        style={{ width: "100%", height: 50 }}
      >
        <View style={styles.list}>
          <View style={styles.starticon}>
            <MaterialCommunityIcons
              name="download-box"
              size={30}
              color="white"
            />
          </View>
          <View style={styles.midpart}>
            <Text style={styles.heading}>MyDownloads</Text>
            <Text style={styles.subheading}>6 songs</Text>
          </View>
          <View style={styles.endicon}>
            <AntDesign name="right" size={24} color="white" />
          </View>
        </View>
      </TouchableOpacity>
      {/* ----------------------------------------MY FAVOURITE SECTION --------------------------------*/}
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("MyFav")}
        style={{ width: "100%", height: 50 }}
      >
        <View style={styles.list}>
          <View style={styles.starticon}>
            <Ionicons name="heart" size={30} color="white" />
          </View>
          <View style={styles.midpart}>
            <Text style={styles.heading}>My Favourite</Text>
            <Text style={styles.subheading}>8 songs</Text>
          </View>
          <View style={styles.endicon}>
            <AntDesign name="right" size={24} color="white" />
          </View>
        </View>
      </TouchableOpacity>
      {/* ------------------------------------------MY LIBRARY SECTION -------------------------------- */}
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("MyLibrary")}
        style={{ width: "100%", height: 50 }}
      >
        <View style={styles.list}>
          <View style={styles.starticon}>
            <MaterialIcons name="library-music" size={30} color="white" />
          </View>
          <View style={styles.midpart}>
            <Text style={styles.heading}>My Library</Text>
            <Text style={styles.subheading}>15 songs</Text>
          </View>
          <View style={styles.endicon}>
            <AntDesign name="right" size={24} color="white" />
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
    paddingTop: 40,
  },
  header: {
    height: 50,
    width: "100%",
    backgroundColor: "#FF2871",
    alignItems: "center",
    flexDirection: "row",
  },
  list: {
    width: "100%",
    height: 50,

    padding: 5,
    flexDirection: "row",
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
  subheading: {
    fontSize: 15,
    color: "white",
  },
  starticon: {
    width: "10%",
    justifyContent: "center",
  },
  midpart: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  endicon: {
    width: "10%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
