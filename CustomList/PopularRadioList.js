import React, { useState } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";
import { AntDesign } from "react-native-vector-icons";

export default function PopularRadioList(props) {
  const [songname, setSongname] = useState([
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
  ]);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
          paddingLeft: 15,
        }}
      >
        Popular Radio
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={true}
        keyExtractor={(item) => item.id}
        data={songname}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate("MusicPlayer", { item })}
            >
              <Surface style={styles.surface}>
                <View
                  style={{
                    width: 105,
                    height: 105,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    elevation: 50,
                    borderRadius: 130,
                  }}
                >
                  <ImageBackground
                    imageStyle={{ borderRadius: 200 }}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                      justifyContent: "flex-end",
                      padding: 7,
                    }}
                    source={item.img}
                  ></ImageBackground>
                </View>
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "300" }}
                >
                  {item.name}
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
    height: 190,
    width: "100%",
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  surface: {
    width: 120,
    padding: 5,
    backgroundColor: "transparent",
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
