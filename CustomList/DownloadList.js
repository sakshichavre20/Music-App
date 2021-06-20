import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

export default function DownloadList(props) {
  const [color, setColor] = useState(false);

  {
    /* const like = () => {
    if (liked) {
      setColor("red");
    } else {
      setColor("se");
    }
  };*/
  }
  const [songname, setSongname] = useState([
    {
      name: "Woh Lamhe",
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRosn277vkOVo-PiJyguD3vuHCWYBU3aUqXmg&usqp=CAU",
      },
      id: "1",
      artist: "Atif Aslam",
      liked: true,
    },
    {
      name: "Tere Bin",
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8okjJ4RFxdfjYRsgpj2wbYq6LPxtH-GlVsw&usqp=CAU",
      },
      id: "2",
      artist: "Atif Aslam",
      liked: false,
    },
    {
      name: "Pehli Dafa",
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDziV9H4YkT_E6yJZEKHr3H5DDaGbsFeZJSg&usqp=CAU",
      },
      id: "3",
      artist: "Atif Aslam",
      liked: true,
    },
    {
      name: "Lut Gaye",
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPVPN0AGrSPQbkd0xWBAYxkO00UDI1vEkCOA&usqp=CAU",
      },
      id: "4",
      artist: "Jubin Nautiyal",
      liked: true,
    },
    {
      name: "Girls Like You",
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJL-CAiYv-LwTDiqAEBFlsah9hKrdPKurqtQ&usqp=CAU",
      },
      id: "5",
      artist: "Maroon 5",
      liked: false,
    },
    {
      name: "Tere Liye",
      img: {
        uri: "https://flipskyey206.weebly.com/uploads/1/2/4/0/124007623/493284827.jpg",
      },
      id: "6",
      artist: "Madan Mohan",
      liked: true,
    },
    {
      name: "Thalaivi",
      img: {
        uri: "https://songs5.vlcmusic.com/tiny_image/timthumb.php?q=100&w=250&src=images/27276.png",
      },
      id: "7",
      artist: "Vidya Vox",
      liked: false,
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={songname}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate("MusicPlayer", { item })}
              style={styles.list}
            >
              <View
                style={{
                  flexDirection: "row",
                  height: "100%",
                  width: "80%",
                  alignItems: "center",
                }}
              >
                <View style={{ justifyContent: "center", padding: 10 }}>
                  <FontAwesome name="music" size={24} color="white" />
                </View>
                <View
                  style={{
                    height: "100%",
                    justifyContent: "center",
                    paddingLeft: 20,
                  }}
                >
                  <Text style={{ color: "white" }}>{item.name}</Text>
                  <Text style={{ color: "#FF2871" }}>{item.artist}</Text>
                </View>
              </View>
              <View
                style={{
                  height: "100%",
                  width: "20%",
                  alignItems: "flex-end",
                  paddingRight: 10,
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name="ios-heart"
                  size={24}
                  color={item.liked ? "red" : "white"}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  list: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
  },
});
