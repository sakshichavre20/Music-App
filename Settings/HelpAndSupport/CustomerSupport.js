import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Ionicons } from "react-native-vector-icons";

const CustomerSupport = (props) => {
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
            Customer Support
          </Text>
        </View>
        <View style={{ width: "10%" }}></View>
      </View>
      {/* -------------------------  Section -------------------------------------*/}
      <Text style={{ color: "white" }}>CustomerSupport</Text>
    </View>
  );
};

export default CustomerSupport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    paddingTop: 30,
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
});
