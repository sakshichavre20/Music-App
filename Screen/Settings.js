import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  Ionicons,
  Entypo,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

const Setting = (props) => {
  return (
    <View style={styles.container}>
{/* ------------------header section starts ------------------------*/}
      <View style={styles.header}>
        <View style={{ width: "10%" }}>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <Entypo name="menu" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ width: "80%", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
            Settings
          </Text>
        </View>
        <View style={{ width: "10%" }}></View>
      </View>
{/* ---------------main container section starts -------------------*/}
      <View style={styles.mainContainer}>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 18,
            color: "white",
            padding: 5,
          }}
        >
          Language Setting
        </Text>
{/* ------------------ Langauge Pref Starts --------------------------*/}
        <TouchableOpacity
          onPress={() => props.navigation.navigate("LanguagePref")}
        >
          <View style={styles.list}>
            <View style={{ width: "50%", justifyContent: "center" }}>
              <Text style={{ color: "white" }}>LanguagePref</Text>
            </View>
            <View
              style={{
                alignItems: "flex-end",
                width: "50%",
                justifyContent: "center",
                paddingRight:5
              }}
            >
              <FontAwesome5 name="language" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>

        <Text
          style={{
            fontWeight: "600",
            fontSize: 18,
            color: "white",
            padding: 5,
          }}
        >
          Music Quality
        </Text>
{/* -------------------- Equalizer section starts ------------------*/}
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Equalizer")}
        >
          <View style={styles.list}>
            <View style={{ width: "50%", justifyContent: "center" }}>
              <Text style={{ color: "white" }}>Equalizer</Text>
            </View>
            <View
              style={{
                width: "50%",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <MaterialIcons name="equalizer" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>

{/* -------------- Streaming Quality section starts ----------------*/}
        <TouchableOpacity
          onPress={() => props.navigation.navigate("StreamingQuality")}
        >
          <View style={styles.list}>
            <View
              style={{
                width: "50%",

                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white" }}>StreamingQuality</Text>
            </View>
            <View
              style={{
                width: "50%",
                justifyContent: "flex-end",
                flexDirection: "row",
              }}
            >
              <MaterialCommunityIcons
                name="quality-high"
                size={24}
                color="white"
              />
              <MaterialCommunityIcons
                name="quality-medium"
                size={24}
                color="white"
              />
              <MaterialCommunityIcons
                name="quality-low"
                size={24}
                color="white"
              />
            </View>
          </View>
        </TouchableOpacity>
{/* ---------------Download quality section starts -----------------*/}
        <TouchableOpacity
          onPress={() => props.navigation.navigate("DownloadQuality")}
        >
          <View style={styles.list}>
            <View
              style={{
                width: "50%",

                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white" }}>DownloadQuality</Text>
            </View>
            <View
              style={{
                width: "50%",
                justifyContent: "flex-end",

                flexDirection: "row",
              }}
            >
              <MaterialCommunityIcons
                name="quality-high"
                size={24}
                color="white"
              />
              <MaterialCommunityIcons
                name="quality-medium"
                size={24}
                color="white"
              />
              <MaterialCommunityIcons
                name="quality-low"
                size={24}
                color="white"
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  mainContainer: {
    flex: 1,
    
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
    backgroundColor:'#2d2d2d',
    height:50,
    padding:10,
    flexDirection:'row'
  }
});
