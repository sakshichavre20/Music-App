import React, { useState, useEffect } from "react";
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
import SoundPlayer from "react-native-sound-player";
import { Audio, Video } from "expo-av";
import axios from "axios";
import { Credentials } from "./Credentials";
import base64 from "react-native-base64";

const MusicPlayer = ({ navigation, route }) => {
  const spotify = Credentials();

  const [track, setTrack] = useState();
  const [token, setToken] = useState("");

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          base64.encode(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);

      axios(`https://api.spotify.com/v1/tracks/${item.track.id}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + tokenResponse.data.access_token,
        },
      }).then((trackResponse) => {
         //console.log("trackresponce ========>", trackResponse.data.uri);
        setTrack(trackResponse.data.uri);
      });
    });
  }, [spotify.ClientId, spotify.ClientSecret]);

  const [sound, setSound] = useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound
      .createAsync
      // require("../assets/minimal.mp3")
      // {uri.item}
      ();

    setSound(sound);

    console.log("Playing Sound");
    (await sound.playAsync()) && sound.setVolumeAsync(1);
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.pauseAsync();
        }
      : undefined;
  }, [sound]);

  const [status, setStatus] = useState("play");

  const play_pause = () => {
    if (status === "play") {
      setStatus("pause"), playSound();
    } else {
      setStatus("play"), console.log("Unloading Sound");
      sound.pauseAsync();
    }
  };
  // const [status, setStatus] = useState("pause");
  // const play_pause = () => {
  //   if (status === "pause") {
  //     setStatus("play");
  //   } else {
  //     setStatus("pause");
  //   }
  // };

  const { item } = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={{ uri: item.track.album.images[0].url }}
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
            <Image
              source={{ uri: item.track.album.images[0].url }}
              style={styles.image}
            />
          </View>
          {/*------------------- Song name section ---------------------------- */}
          <View style={styles.songnamesec}>
            <View style={{ width: "90%" }}>
              <Text
                style={{ color: "white", fontSize: 24, fontWeight: "bold" }}
              >
                {item.track.name}
              </Text>
              <Text style={{ color: "white", fontSize: 18, fontWeight: "500" }}>
                {item.track.artists[0].name}
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
            opacity: 0.7,
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
