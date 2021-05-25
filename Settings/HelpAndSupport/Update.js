import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import { Ionicons, MaterialIcons } from "react-native-vector-icons";

const Update = (props) => {
  return (
    <View style={styles.container}>
      {/* ------------------------- Header Section -------------------------------------*/}
      <View style={styles.header}>
        <View style={{ width: "10%" }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Setting")}
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
            Updates
          </Text>
        </View>
        <View style={{ width: "10%" }}></View>
      </View>
      {/* ------------------------- Bell Section -------------------------------------*/}

      <Image source={require("../../assets/Bell.jpeg")} style={styles.bell} />
      {/* ------------------------- update Section -------------------------------------*/}
      <View style={{ width: "100%", padding: 10 }}>
        <Text style={{ fontWeight: "600", color: "white", fontSize: 17 }}>
          Software Update Information
        </Text>
        <Text style={styles.update_info}>. Version:A12345ASDF67890</Text>
        <Text style={styles.update_info}>. Size : 20.21MB</Text>
        <Text style={styles.update_info}>
          . Security Patch Level 1st May 2021
        </Text>
      </View>
      {/* ------------------------- Whats new Section -------------------------------------*/}
      <View style={{ width: "100%", padding: 10 }}>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Text
            style={{
              fontWeight: "600",
              color: "white",
              fontSize: 17,
              paddingRight: 5,
              alignItems: "center",
            }}
          >
            What's New
          </Text>
          <MaterialIcons name="celebration" size={22} color="white" />
        </View>

        <Text style={styles.update_info}>. Updated Podcast</Text>
        <Text style={styles.update_info}>. New navigation features</Text>
        <Text style={styles.update_info}>. Improved Streaming Quality</Text>
      </View>
      {/* ------------------------- Learn more Section -------------------------------------*/}
      <View style={{ width: "100%", padding: 10 }}>
        <Text style={{ fontWeight: "600", color: "white", fontSize: 17 }}>
          Learn More At
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.update_info}> https://horemmuisck.com</Text>
        </TouchableOpacity>
      </View>
      {/* ------------------------- Section -------------------------------------*/}
    </View>
  );
};

export default Update;

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
    marginBottom: 10,
  },
  bell: {
    height: 200,
    width: 200,
    marginTop: 30,
    marginBottom: 20,
  },
  update_info: {
    fontWeight: "400",
    color: "grey",
    fontSize: 15,
    marginLeft: 10,
  },
});
