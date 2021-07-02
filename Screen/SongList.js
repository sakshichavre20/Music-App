import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  Linking,
} from "react-native";
import axios from "axios";

const SongList = ({ navigation, route }) => {
  const { item, token } = route.params;
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    axios(`https://api.spotify.com/v1/playlists/${item.id}/tracks`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((tracksResponse) => {
      console.log(item.id);
      setSongList(tracksResponse.data.items);
    });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: item.images[0].url }}
        style={{
          alignItems: "center",
          opacity: 1,
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
        }}
        blurRadius={15}
      >
        <View style={{ width: "100%", paddingHorizontal: 10 }}>
          <FlatList
            data={songList}
            style={{ paddingTop: 60, alignSelf: "center" }}
            showsVerticalScrollIndicator={false}

            keyExtractor={(item, index) => JSON.stringify(index)}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  // style={{
                  //   flexDirection: "row",
                  //   width: "100%",
                  //   padding: 10,
                  //   alignItems: "center",
                  // }}
                  style={styles.list}
                  onPress={() => {
                    console.log(item.track.external_urls);
                    // navigation.navigate("MusicPlayer", { item })
                    Linking.openURL(item.track.external_urls.spotify);
                  }}
                >
                  <Image
                    source={{ uri: item.track.album.images[0].url }}
                    style={{ height: 50, width: "15%", marginLeft: 10 }}
                  />
                  <View style={{ width: "85%", paddingLeft: 15 }}>
                    <Text
                      style={{ color: "white", width: "85%" }}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {item.track.name}
                    </Text>
                    {/* <Text style={{ color: "white" }}>{item.track.popularity}</Text> */}
                    <Text style={{ color: "white" }}>
                      {item.track.artists[0].name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SongList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
   
    
  },
  list: {
    flexDirection: "row",
    height: 65,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(150,150,150,0.2)",
    marginVertical: 3,
    elevation: 2,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    alignSelf:'center'
  },
});
