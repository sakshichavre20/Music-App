import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import Slider from "@react-native-community/slider";

const MusicPlayer = ({ navigation, route }) => {
  const [status, setStatus] = useState("pause");

  const play_pause = () => {
    if (status === "pause") {
      setStatus("play");
    } else {
      setStatus("pause");
    }
  };

  const { item } = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={item.img}
        blurRadius={10}
      >
        {/*-------------------------------- top section --------------------------------------------- */}
        {/*-------------------------------- header--------------------------------------------- */}
        <View style={styles.header}>
          <View
            style={{
              width: "20%",
              height: "100%",
              justifyContent: "center",
              paddingleft: 20,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-sharp" size={28} color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "60%",
              height: "100%",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              Now Playing{" "}
            </Text>
            <Ionicons name="volume-medium" size={24} color="white" />
          </View>
          <View
            style={{
              width: "20%",
              height: "100%",
              justifyContent: "center",
              alignItems: "flex-end",
              paddingRight: 15,
            }}
          >
            <SimpleLineIcons name="playlist" size={24} color="white" />
          </View>
        </View>
        {/*-------------------------------- mid section --------------------------------------------- */}
        <View style={{ height: "70%", width: "100%", alignItems: "center" }}>
          {/*------------------- Image section ---------------------------- */}
          <View style={styles.imagebackview}>
            <Image source={item.img} style={styles.image} />
          </View>
          {/*------------------- Song name section ---------------------------- */}
          <View style={styles.songnamesec}>
            <View>
              <Text
                style={{ color: "white", fontSize: 24, fontWeight: "bold" }}
              >
                {item.name}
              </Text>
              <Text style={{ color: "white", fontSize: 18, fontWeight: "500" }}>
                {item.artist}
              </Text>
            </View>

            <Ionicons name="heart" size={24} color="white" />
          </View>
          {/*------------------- Slider section ---------------------------- */}
          <Slider
            style={{ width: "85%", height: 10, marginTop: 30 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          {/*------------------- time section ---------------------------- */}
          <View
            style={{
              width: "85%",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text style={styles.time}>O.00</Text>
            <Text style={styles.time}>3.18</Text>
          </View>
        </View>
        {/*-------------------------------- bottom section --------------------------------------------- */}
        <View
          style={{
            height: "20%",
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
            backgroundColor: "black",
            opacity: 0.8,
          }}
        >
          <View style={styles.icon}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="shuffle" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-start",
              paddingLeft: 20,
            }}
          >
            <TouchableOpacity>
              <Ionicons name="play-back" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.playpause}>
            <TouchableOpacity onPress={play_pause}>
              <Ionicons name={status} size={35} color="#434b56" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              paddingRight: 20,
            }}
          >
            <TouchableOpacity>
              <Ionicons name="play-forward" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="replay" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20,
  },
  header: {
    height: "10%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  imgBackground: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  imagebackview: {
    height: 305,
    width: 305,
    borderRadius: 20,
    elevation: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  songnamesec: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 30,
    justifyContent: "space-between",
  },
  time: {
    color: "white",
    fontSize: 15,
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  playpause: {
    height: 70,
    width: 70,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
