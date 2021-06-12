import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ImageBackground,
  Image,
} from "react-native";

const MusicCatogList = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      {/* {item.list.map((item) => (
        <View key={item.id}>
          <TouchableOpacity
            onPress={() => navigation.navigate("MusicPlayer", { item })}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
     */}
      <ImageBackground
        source={item.img}
        style={{
          flex: 1,
          alignItems: "center",
          opacity: 1,
          justifyContent: "space-between",
        }}
        blurRadius={5}
      >
        <View
          style={{
            width: "100%",
            height: "20%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 50,
              fontWeight: "bold",
            }}
          >
            {item.name}
          </Text>
        </View>
        <View style={styles.songbg}>
          <FlatList
            data={item.list}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("MusicPlayer", { item })}
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
                    {/* Icon */}
                    <View style={{ justifyContent: "center", padding: 10 }}>
                      <Image
                        source={item.img}
                        style={{ height: 50, width: 50, borderRadius: 5 }}
                      />
                    </View>
                    <View style={{ height: "100%", justifyContent: "center" }}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: "700",
                          color: "white",
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "600",
                          color: "white",
                        }}
                      >
                        {item.artist}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "20%",
                      justifyContent: "center",
                      alignItems: "flex-end",
                      paddingRight: 15,
                    }}
                  ></View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default MusicCatogList;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    paddingTop: 50,
  },
  list: {
    flexDirection: "row",
    height: 70,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(150,150,150,0.1)",
    marginVertical: 5,
    elevation: 2,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  songbg: {
    height: "80%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
