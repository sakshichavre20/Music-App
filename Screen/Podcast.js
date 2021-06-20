import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PodCastCarousel from "./../CustomList/PodCastCarousel";
import { LinearGradient } from "expo-linear-gradient";
import PopularRadioList from "./../CustomList/PopularRadioList";
import MotivationList from "./../CustomList/MotivationList";
const PodCast = (props) => {
  return (
    <LinearGradient
      style={styles.login}
      colors={["#FF3C7E", "black"]}
      style={styles.container}
    >
      {/* ----------------------------------------HEADER SECTION--------------------------------------- */}
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "white",
          marginTop: 40,
        }}
      >
        Podcasts
      </Text>
      <PodCastCarousel />
      <PopularRadioList navigation={props.navigation} />
      <MotivationList navigation={props.navigation} />
    </LinearGradient>
  );
};

export default PodCast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  header: {
    height: 50,
    width: "100%",
    backgroundColor: "#FF2871",
    alignItems: "center",
    flexDirection: "row",
  },
});
