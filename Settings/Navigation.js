import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Switch,
  Image,
} from "react-native";

import { Ionicons } from "react-native-vector-icons";

const Navigation = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
            Connect To Apps
          </Text>
        </View>
        <View style={{ width: "10%" }}></View>
      </View>
      {/* ------------------------- Main Container -------------------------------------*/}
      {/* ------------------------- Navigation Information -------------------------------------*/}
      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Text style={styles.heading}>Navigation</Text>
        <Text style={styles.caption}>
          BE SAFE. DO NOT TOGGLE WITH THE NAVIGATION APP PROPMTS BELOW WHILE
          DRIVING A MOTOR VEHICHLE
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <View style={{ width: "90%", paddingLeft: 5 }}>
          <Text style={{ color: "white", fontSize: 15, padding: 10 }}>
            Get a reminder to use navigation when you're in your car.
          </Text>
        </View>
        <View
          Style={{
            width: "10%",
            alignItems: "flex-end",
            paddingRight: 20,
          }}
        >
          <Switch
            trackColor={{ false: "#767577", true: "pink" }}
            thumbColor={isEnabled ? "#FF2871" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      {/* ------------------------- Google Maps -------------------------------------*/}
      <View style={styles.googlemap}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={styles.googleimg}
            source={require("../assets/map.jpg")}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            Google Maps
          </Text>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            textAlign: "center",
            marginTop: 5,
          }}
        >
          Play music and podcasts in Google Maps
        </Text>
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={styles.connect}>
            <TouchableOpacity>
              <Text style={{ color: "white", fontWeight: "600" }}>
                {" "}
                Connect
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* ------------------------------------ Waze ---------------------------------------------------*/}
      <View style={styles.googlemap}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={styles.googleimg}
            source={require("../assets/waze.jpeg")}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            Waze
          </Text>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            textAlign: "center",
            marginTop: 5,
          }}
        >
          Control your music while navigating
        </Text>
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={styles.connect}>
            <TouchableOpacity>
              <Text style={{ color: "white" }}> Get the app</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 40,
    alignItems: "center",
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
  heading: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  caption: {
    fontSize: 15,
    color: "grey",
    textAlign: "center",
    marginTop: 20,
  },
  googlemap: {
    height: 165,
    width: "95%",
    backgroundColor: "#172026",
    marginTop: 10,
    borderRadius: 10,
  },
  googleimg: {
    height: 70,
    width: 70,
    borderRadius: 5,
    margin: 5,
  },
  connect: {
    backgroundColor: "#172026",
    borderColor: "white",
    borderWidth: 1,
    height: 40,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
  },
});
