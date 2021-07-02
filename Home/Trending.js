import React, { useState, useEffect } from "react";
import { ImageBackground } from "react-native";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking
} from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";
import { AntDesign } from "react-native-vector-icons";
import axios from "axios";
import base64 from "react-native-base64";
import { Credentials } from "../Screen/Credentials";

export default function Trending(props) {
  const [playlist, setPlaylist] = useState([]);

  const [songData, setSongData] = useState({});
  const spotify = Credentials();
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
      //console.log(tokenResponse.data.json());
      // setToken(tokenResponse.data.access_token);

      axios("https://api.spotify.com/v1/playlists/37i9dQZF1DWVA1Gq4XHa6U", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + tokenResponse.data.access_token,
        },
      }).then((genreResponse) => {
        // console.log(genreResponse.data.categories.items);
        setPlaylist(genreResponse.data.tracks.items);
        setSongData(genreResponse.data);
      });
    });
  }, [spotify.ClientId, spotify.ClientSecret]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
          paddingLeft: 5,
        }}
      >
        {songData.name}
      </Text>
      <Text
        style={{
          fontSize: 13,
          color: "#a1a1a1",
          paddingLeft: 5,
          maxWidth: "90%",
          paddingBottom: 5,
        }}
      >
        {songData.description}
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => JSON.stringify(index)}
        data={playlist}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              // onPress={() => props.navigation.navigate("MusicPlayer", { item })}
              onPress={() => {
                // console.log(item.track.external_urls);
                // navigation.navigate("MusicPlayer", { item })
                Linking.openURL(item.track.external_urls.spotify);
              }}
            >
              <Surface style={styles.surface}>
                <ImageBackground
                  imageStyle={{ borderRadius: 10 }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                    justifyContent: "flex-end",
                    padding: 7,
                  }}
                  source={{ uri: item.track.album.images[0].url }}
                >
                  <AntDesign name="play" color="white" size={24} />
                </ImageBackground>
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "300" }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.track.name}
                </Text>
              </Surface>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    paddingHorizontal: 5,
    marginBottom: 10,
    backgroundColor: "black",
  },
  surface: {
    width: 110,
    padding: 5,
    backgroundColor: "black",
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 50,
  },
});
{
  /* const [songname, setSongname] = useState([
    {
      name: "Woh Lamhe",
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRosn277vkOVo-PiJyguD3vuHCWYBU3aUqXmg&usqp=CAU",
      },
      id: "1",
      artist: "Atif Aslam",
    },
    {
      name: "Tere Bin",
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8okjJ4RFxdfjYRsgpj2wbYq6LPxtH-GlVsw&usqp=CAU",
      },
      id: "2",
      artist: "Atif Aslam",
    },
    {
      name: "Pehli Dafa",
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDziV9H4YkT_E6yJZEKHr3H5DDaGbsFeZJSg&usqp=CAU",
      },
      id: "3",
      artist: "Atif Aslam",
    },
    {
      name: "Lut Gaye",
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPVPN0AGrSPQbkd0xWBAYxkO00UDI1vEkCOA&usqp=CAU",
      },
      id: "4",
      artist: "Jubin Nautiyal",
    },
    {
      name: "Girls Like You",
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJL-CAiYv-LwTDiqAEBFlsah9hKrdPKurqtQ&usqp=CAU",
      },
      id: "5",
      artist: "Maroon 5",
    },
    {
      name: "Tere Liye",
      img: {
        uri: "https://flipskyey206.weebly.com/uploads/1/2/4/0/124007623/493284827.jpg",
      },
      id: "6",
      artist: "Madan Mohan",
    },
    {
      name: "Thalaivi",
      img: {
        uri: "https://songs5.vlcmusic.com/tiny_image/timthumb.php?q=100&w=250&src=images/27276.png",
      },
      id: "7",
      artist: "Vidya Vox",
    },
  ]);*/
}
