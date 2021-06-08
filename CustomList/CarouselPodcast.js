import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
const CarouselPodcast = (props) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const [data, setData] = React.useState([
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
  ]);
  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        layoutCardOffset={100}
        ref={isCarousel}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 50,
              }}
            >
              <ImageBackground
                blurRadius={2}
                source={item.img}
                style={{
                  width: windowWidth * 0.7,
                  height: 200,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                imageStyle={{ borderRadius: 30 }}
              >
                <Text
                  style={{ fontSize: 50, fontWeight: "bold", color: "white" }}
                >
                  {item.name}
                </Text>
              </ImageBackground>
            </View>
          );
        }}
        sliderWidth={windowWidth}
        itemWidth={windowWidth * 0.7}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        enableSnap={true}
        loop={true}
        autoplay={true}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        autoplayInterval={2000}
        autoplayDelay={1000}
      />
    </View>
  );
};

export default CarouselPodcast;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
    width: "100%",
    height: "50%",
    alignSelf: "center",
  },
});
