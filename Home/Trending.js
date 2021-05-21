import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";
import { AntDesign } from "react-native-vector-icons";


export class Trending extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let categories = [
      {
        name: "Woh Lamhe",
        img: {
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRosn277vkOVo-PiJyguD3vuHCWYBU3aUqXmg&usqp=CAU",
        },
        id: "1",
      },
      {
        name: "Tere Bin",
        img: {
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8okjJ4RFxdfjYRsgpj2wbYq6LPxtH-GlVsw&usqp=CAU",
        },
        id: "2",
      },
      {
        name: "Pehli Dafa",
        img: {
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDziV9H4YkT_E6yJZEKHr3H5DDaGbsFeZJSg&usqp=CAU",
        },
        id: "3",
      },
      {
        name: "Lut Gaye",
        img: {
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPVPN0AGrSPQbkd0xWBAYxkO00UDI1vEkCOA&usqp=CAU",
        },
        id: "4",
      },
      {
        name: "Girls Like You",
        img: {
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJL-CAiYv-LwTDiqAEBFlsah9hKrdPKurqtQ&usqp=CAU",
        },
        id: "5",
      },
      {
        name: "Tere Liye",
        img: {
          uri: "https://flipskyey206.weebly.com/uploads/1/2/4/0/124007623/493284827.jpg",
        },
        id: "6",
      },
      {
        name: "Thalaivi",
        img: {
          uri: "https://songs5.vlcmusic.com/tiny_image/timthumb.php?q=100&w=250&src=images/27276.png",
        },
        id: "7",
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
          Trending
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={true}
          keyExtractor={(item) => item.id}
          data={categories}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <Surface style={styles.surface}>
                <ImageBackground
                  imageStyle={{ borderRadius: 10 }}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 10,
                    justifyContent: "flex-end",
                    padding: 7,
                  }}
                  source={item.img}
                >
                  <AntDesign name="play" color="white" size={24} />
                </ImageBackground>
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "300" }}
                >
                  {item.name}
                </Text>
              </Surface>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 190,
    width: "100%",
    paddingHorizontal: 5,
    marginBottom: 50,
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

export default Trending;
