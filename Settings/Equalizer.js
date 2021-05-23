import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";

const Equalizer = (props) => {
  const [checked, setChecked] = React.useState("first");

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
            Equalizer
          </Text>
        </View>
        <View style={{ width: "10%" }}></View>
      </View>
      {/* ------------------------- Main Container -------------------------------------*/}
      {/* --------------------------------- USE OF RADIO BUTTON ------------------------------------------- */}
      {/* --------------------------------- NORMAL RADIO BUTTON ------------------------------------------- */}
      <View style={styles.option}>
        <RadioButton
          value="first"
          status={checked === "first" ? "checked" : "unchecked"}
          onPress={() => setChecked("first")}
          uncheckedColor="white"
          color="#FF2871"
        />
        <Text style={styles.optionname}>Normal</Text>
      </View>
      {/* --------------------------------- POP RADIO BUTTON ------------------------------------------- */}
      <View style={styles.option}>
        <RadioButton
          value="second"
          status={checked === "second" ? "checked" : "unchecked"}
          onPress={() => setChecked("second")}
          uncheckedColor="white"
          color="#FF2871"
        />
        <Text style={styles.optionname}>Pop</Text>
      </View>
      {/* --------------------------------- CLASSIC RADIO BUTTON ------------------------------------------- */}
      <View style={styles.option}>
        <RadioButton
          value="third"
          status={checked === "third" ? "checked" : "unchecked"}
          onPress={() => setChecked("third")}
          uncheckedColor="white"
          color="#FF2871"
        />
        <Text style={styles.optionname}>Classic</Text>
      </View>
      {/* --------------------------------- JAZZ RADIO BUTTON ------------------------------------------- */}
      <View style={styles.option}>
        <RadioButton
          value="fourth"
          status={checked === "fourth" ? "checked" : "unchecked"}
          onPress={() => setChecked("fourth")}
          uncheckedColor="white"
          color="#FF2871"
        />
        <Text style={styles.optionname}>Jazz</Text>
      </View>
      {/* --------------------------------- ROCK RADIO BUTTON ------------------------------------------- */}
      <View style={styles.option}>
        <RadioButton
          value="fifth"
          status={checked === "fifth" ? "checked" : "unchecked"}
          onPress={() => setChecked("fifth")}
          uncheckedColor="white"
          color="#FF2871"
        />
        <Text style={styles.optionname}>Rock</Text>
      </View>
    </View>
  );
};

export default Equalizer;

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
  },
  option: {
    width: "100%",
    height: 50,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  optionname: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
});
