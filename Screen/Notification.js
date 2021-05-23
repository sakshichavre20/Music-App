import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";
const Notification = ({ navigation }) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="arrow-back" size={28} color="#FF2871" />
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <Text style={{ color: "white" }}>Notification</Text>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 50,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
});
