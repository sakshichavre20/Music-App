import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import MusicCatogList from "./../Screen/MusicCatogList";
import axios from "axios";
import { Credentials } from "../Screen/Credentials";
import base64 from "react-native-base64";

const CategoryCarousel = (props) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  const spotify = Credentials();

  const [token, setToken] = useState("");

  const [genres, setGenres] = useState([]);

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

      axios("https://api.spotify.com/v1/browse/categories?locale=sv_US", {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
      }).then((genreResponse) => {
        // console.log(genreResponse.data.categories.items);
        setGenres(genreResponse.data.categories.items);
      });
    });
  }, [spotify.ClientId, spotify.ClientSecret]);

  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        layoutCardOffset={20}
        ref={isCarousel}
        data={genres}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 10,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() =>
                  props.navigation.navigate("MusicCatogList", { item, token })
                }
              >
                <ImageBackground
                  blurRadius={0}
                  source={{ uri: item.icons[0].url }}
                  style={{
                    width: windowWidth * 0.7,
                    height: 150,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  imageStyle={{ borderRadius: 30 }}
                >
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                      color: "white",
                      marginTop: 95,
                    }}
                  >
                    {item.name}
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
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
      {/* <Pagination
        dotsLength={genres.length}
        dotColor="#FF2871"
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 3,
          height: 3,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "red",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotColor="white"
        inactiveDotScale={1}
        tappableDots={true}
        containerStyle={{}}
      /> */}
    </View>
  );
};

export default CategoryCarousel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
    width: "100%",
    height: 190,
    alignSelf: "center",
  },
});

{
  /* const [data, setData] = React.useState([
    {
      name: "Rock",
      img: {
        uri: "https://www.top10hq.com/wp-content/uploads/2015/04/60s-british-rock-music.jpg",
      },
      list: [
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
      ],
      id: "1",
    },
    {
      name: "HipHop",
      img: {
        uri: "https://www.udiscovermusic.com/wp-content/uploads/2016/02/Hip-Hop-In-20-Songs-artwork-web-optimised-1000.jpg",
      },
      id: "2",
      list: [
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
      ],
    },
    {
      name: "Jazz",
      img: {
        uri: "https://cdn-images.audioaddict.com/1/b/e/b/e/8/1bebe8759e23ab6a1b92e1d46e2e7f12.png",
      },
      id: "3",
      list: [
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
      ],
    },
    {
      name: "Classical",
      img: {
        uri: "https://images.thrillophilia.com/image/upload/s--PAtBIhcq--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/141/705/original/1548157147_3.jpg.jpg?1548157147",
      },
      id: "4",
      list: [
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
      ],
    },
    {
      name: "Metal",
      img: {
        uri: "https://www.superprof.co.in/blog/wp-content/uploads/2018/06/drums.jpg",
      },
      id: "5",
      list: [
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
      ],
    },
  ]);*/
}
