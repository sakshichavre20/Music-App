import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CarouselPodcast from "./../CustomList/CarouselPodcast";

const PodCast = ({ navigation }) => {
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
      <CarouselPodcast />
    </View>
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
