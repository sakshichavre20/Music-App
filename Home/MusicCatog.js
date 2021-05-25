import React, { Component } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";

export class MusicCatog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let categories = [
      {
        name: "Rock",
        img: {
          uri: "https://media.istockphoto.com/vectors/rock-sign-gesture-with-lightning-for-your-design-vector-id1183921035?k=6&m=1183921035&s=612x612&w=0&h=G3I98hjzUA81MJCr_yGAHU8ucvym2NzmJvjxbi-2qfo=",
        },
        id: "1",
      },
      {
        name: "HipHop",
        img: {
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0L954huwkRF2kY0lmaK44GC8_Quh4Tb321g&usqp=CAU",
        },
        id: "2",
      },
      {
        name: "Jazz",
        img: {
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiOmCkAbkj94rBphAvkLpU7Ap2x8lzVRK-Eg&usqp=CAU",
        },
        id: "3",
      },
      {
        name: "Classical",
        img: {
          uri: "https://st2.depositphotos.com/1037178/7666/v/600/depositphotos_76667529-stock-illustration-veena-indian-music-instrument-vector.jpg",
        },
        id: "4",
      },
      {
        name: "Metal",
        img: {
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4XnTQR-lTOPvWIyXwdpM9kgR4jKtVdu1uw&usqp=CAU",
        },
        id: "5",
      },
    ];
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
          Categories
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={categories}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity>
                <Surface style={styles.surface}>
                  <Image
                    style={{ width: 105, height: 105, borderRadius: 10 }}
                    source={item.img}
                  />
                  <Text
                    style={{ color: "white", fontSize: 18, fontWeight: "700" }}
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
}

const styles = StyleSheet.create({
  container: {
    height: 175,
    width: "100%",
    marginBottom: 50,
    paddingHorizontal: 5,
  },
  surface: {
    width: 130,
    padding: 5,
    backgroundColor: "#2d2d2d",
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default MusicCatog;
