import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { Ionicons } from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const SignOut = ({navigation}) => {
    return (
      <View style={styles.conatiner}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="arrow-back" size={28} color="#FF2871" />
          </TouchableOpacity>
        </View>
        <View style={styles.mainContainer}>
          <LinearGradient
            style={styles.Signout}
            colors={["#FF3C7E", "#FC2C72", "#ff005c", "#FB0029"]}>
            <TouchableOpacity onPress={() => { navigation.replace("Login") }}>
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
                SignOut
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
}

export default SignOut

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
  Signout: {
    height: 50,
    width: 150,
    backgroundColor: "#FF2871",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 170,
    borderRadius: 20,
  },
});
