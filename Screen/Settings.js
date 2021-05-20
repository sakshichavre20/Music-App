import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";

const Setting = (props) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <view style={{ width: "10%" }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
            <Ionicons name="arrow-back" size={25} color="white" />
          </TouchableOpacity>
        </view>
        <View style={{ width: "80%", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
            {" "}
            Setting{" "}
          </Text>
        </View>
        <View style={{ width: "10%" }}></View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.list}>
          <TouchableOpacity
            style={{ width: "100%", height: 50, backgroundColor: "#2d2d2d" }}
            onPress={() => props.navigation.navigate("Equalizer")}
          >
            <View
              style={{ width: "100%", height: 50, backgroundColor: "#2d2d2d" }}
            >
              <Text style={{ color: "white" }}>Equalizer</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <TouchableOpacity
            style={{ width: "100%", height: 50, backgroundColor: "#2d2d2d" }}
            onPress={() => props.navigation.navigate("LanguagePref")}
          >
            <View
              style={{ width: "100%", height: 50, backgroundColor: "#2d2d2d" }}
            >
              <Text style={{ color: "white" }}>LanguagePref</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <TouchableOpacity
            style={{ width: "100%", height: 50, backgroundColor: "#2d2d2d" }}
            onPress={() => props.navigation.navigate("DownloadQuality")}
          >
            <View
              style={{ width: "100%", height: 50, backgroundColor: "#2d2d2d" }}
            >
              <Text style={{ color: "white" }}>DownloadQuality</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <TouchableOpacity
            style={{ width: "100%", height: 50, backgroundColor: "#2d2d2d" }}
            onPress={() => props.navigation.navigate("StreamingQuality")}
          >
            <View
              style={{ width: "100%", height: 50, backgroundColor: "#2d2d2d" }}
            >
              <Text style={{ color: "white" }}>StreamingQuality</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "black",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    backgroundColor: "#FF2871",
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent:'center',
    height: 50
  },
  list:{
    width:'100%',
    borderBottomWidth:2,
  }
});
