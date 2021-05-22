import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";

import {
  Ionicons,
  Entypo,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "react-native-vector-icons";

const Setting = (props) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      {/* ------------------header section starts ------------------------*/}
      <View style={styles.header}>
        <View style={{ width: "10%" }}>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <Entypo name="menu" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ width: "80%", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
            Settings
          </Text>
        </View>
        <View style={{ width: "10%" }}></View>
      </View>
      {/* ---------------main container section starts -------------------*/}
      <ScrollView style={{width:'100%'}}>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 18,
            color: "white",
            padding: 5,
          }}
        >
          Language Setting
        </Text>
        {/* ------------------ Langauge Pref Starts --------------------------*/}
        <TouchableOpacity
          onPress={() => props.navigation.navigate("LanguagePref")}
        >
          <View style={styles.list}>
            <View style={{ width: "50%", justifyContent: "center" }}>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                Language Preference
              </Text>
            </View>
            <View
              style={{
                alignItems: "flex-end",
                width: "50%",
                justifyContent: "center",
                paddingRight: 5,
              }}
            >
              <FontAwesome5 name="language" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>
        {/* ------------------ Music Quality Starts --------------------------*/}
        <Text
          style={{
            fontWeight: "600",
            fontSize: 18,
            color: "white",
            padding: 5,
          }}
        >
          Music Quality
        </Text>
        {/* -------------------- Equalizer section starts ------------------*/}
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Equalizer")}
        >
          <View style={styles.list}>
            <View style={{ width: "50%", justifyContent: "center" }}>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                Equalizer
              </Text>
            </View>
            <View
              style={{
                width: "50%",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <MaterialIcons name="equalizer" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>

        {/* -------------- Streaming Quality section starts ----------------*/}
        <TouchableOpacity
          onPress={() => props.navigation.navigate("StreamingQuality")}
        >
          <View style={styles.list}>
            <View
              style={{
                width: "50%",

                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                StreamingQuality
              </Text>
            </View>
            <View
              style={{
                width: "50%",
                justifyContent: "flex-end",
                flexDirection: "row",
              }}
            >
              <MaterialCommunityIcons
                name="quality-high"
                size={24}
                color="white"
              />
              <MaterialCommunityIcons
                name="quality-medium"
                size={24}
                color="#FF2871"
              />
              <MaterialCommunityIcons
                name="quality-low"
                size={24}
                color="white"
              />
            </View>
          </View>
        </TouchableOpacity>
        {/* ---------------Download quality section starts -----------------*/}
        <TouchableOpacity
          onPress={() => props.navigation.navigate("DownloadQuality")}
        >
          <View style={styles.list}>
            <View
              style={{
                width: "50%",

                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                DownloadQuality
              </Text>
            </View>
            <View
              style={{
                width: "50%",
                justifyContent: "flex-end",

                flexDirection: "row",
              }}
            >
              <MaterialCommunityIcons
                name="quality-high"
                size={24}
                color="#FF2871"
              />
              <MaterialCommunityIcons
                name="quality-medium"
                size={24}
                color="white"
              />
              <MaterialCommunityIcons
                name="quality-low"
                size={24}
                color="white"
              />
            </View>
          </View>
        </TouchableOpacity>
        {/* DATA USAGE SECTION STARTS */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 18,
              color: "white",
              padding: 5,
            }}
          >
            Data Usage
          </Text>
          <Text
            style={{ color: "grey", padding: 5, marginTop: 3, marginLeft: 10 }}
          >
            219.08Mb
          </Text>
        </View>
        {/* ---------------Data Saver section starts -----------------*/}

        <View style={styles.list}>
          <View style={{ width: "80%", justifyContent: "center" }}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
              Data Saver
            </Text>
            <Text style={{ color: "grey", fontSize: 13 }}>
              Sets your music quality to Low and disables artist canvases.
            </Text>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              width: "20%",
              justifyContent: "center",
              paddingRight: 5,
            }}
          >
            <Switch
              trackColor={{ false: "#767577", true: "pink" }}
              thumbColor={isEnabled ? "#FF2871" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        {/* ---------------Data Usage Warning section starts -----------------*/}

        <View style={styles.list}>
          <View style={{ width: "50%", justifyContent: "center" }}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
              Data Usage Warning
            </Text>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              width: "50%",
              justifyContent: "center",
              paddingRight: 5,
            }}
          >
            <Switch
              trackColor={{ false: "#767577", true: "pink" }}
              thumbColor={isEnabled ? "#FF2871" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        {/* ---------------Connect to apps section starts -----------------*/}
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "600",
            padding: 5,
          }}
        >
          Connect To Apps
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Navigation')}>
          <View style={styles.list}>
            <View style={{ width: "80%", justifyContent: "center" }}>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                Navigation
              </Text>
              <Text style={{ color: "grey", fontSize: 13 }}>
                Connect to Navigation apps.
              </Text>
            </View>
            <View
              style={{
                alignItems: "flex-end",
                width: "20%",
                justifyContent: "center",
                paddingRight: 5,
              }}
            >
              <Feather name="navigation" size={24} color='white'/>
            </View>
          </View>
        </TouchableOpacity>
        {/* ---------------Connect to apps section starts -----------------*/}
      </ScrollView>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 40
  },
  
  header: {
    backgroundColor: "#FF2871",
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent:'center',
    height: 50
  },
  list:{
    width:'100%',
    borderBottomWidth:2,
    backgroundColor:'#2d2d2d',
    height:60,
    padding:5,
    flexDirection:'row'
  }
});
