import React, { useState } from "react";
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
  AntDesign,
} from "react-native-vector-icons";

const Setting = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);
  return (
    <View style={styles.container}>
      {/* ------------------------- header section starts --------------------------------*/}
      <View style={styles.header}>
        <View style={{ width: "10%" }}>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <Entypo name="menu" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
            Settings
          </Text>
        </View>
        <View style={{ width: "10%" }}></View>
      </View>
      {/* --------------------- main container section starts ----------------------------*/}
      <ScrollView style={{ width: "100%" }}>
        {/* --------------------- Language setting ----------------------------*/}
        <Text style={styles.headingText}>Language Setting</Text>
        {/* -------------------------- Langauge Preference Starts --------------------------------*/}
        <TouchableOpacity
          onPress={() => props.navigation.navigate("LanguagePref")}
        >
          <View style={styles.list}>
            <View style={{ width: "50%", justifyContent: "center" }}>
              <Text style={styles.subtitle}>Language Preference</Text>
              <Text style={{ color: "grey", fontSize: 13 }}>
                Set Your Language
              </Text>
            </View>
            <View style={styles.endicon}>
              <FontAwesome5 name="language" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>
        {/* -------------------------------- Music Quality Starts --------------------------*/}
        <Text style={styles.headingText}>Music Quality</Text>
        {/* ------------------------------------ Equalizer section starts ------------------*/}
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Equalizer")}
        >
          <View style={styles.list}>
            <View style={{ width: "50%", justifyContent: "center" }}>
              <Text style={styles.subtitle}>Equalizer</Text>
              <Text style={{ color: "grey", fontSize: 13 }}>
                Manipulate Frequiencies
              </Text>
            </View>
            <View style={styles.endicon}>
              <MaterialIcons name="equalizer" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>

        {/* --------------------------- Streaming Quality section starts -------------------*/}

        <View style={styles.list}>
          <View
            style={{
              width: "50%",
              justifyContent: "center",
            }}
          >
            <Text style={styles.subtitle}>StreamingQuality</Text>
            <Text style={{ color: "grey", fontSize: 13 }}>
              Set Your Streaming Qulaity
            </Text>
          </View>
          <View
            style={{
              width: "50%",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={() => {}}>
              <MaterialCommunityIcons
                name="quality-high"
                size={24}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <MaterialCommunityIcons
                name="quality-medium"
                size={24}
                color="#FF2871"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <MaterialCommunityIcons
                name="quality-low"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* ---------------------------- Download quality section starts -------------------*/}

        <View style={styles.list}>
          <View
            style={{
              width: "50%",
              justifyContent: "center",
            }}
          >
            <Text style={styles.subtitle}>DownloadQuality</Text>
            <Text style={{ color: "grey", fontSize: 13 }}>
              Set Your Download Quality
            </Text>
          </View>
          <View
            style={{
              width: "50%",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={() => {}}>
              <MaterialCommunityIcons
                name="quality-high"
                size={24}
                color="#FF2871"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <MaterialCommunityIcons
                name="quality-medium"
                size={24}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <MaterialCommunityIcons
                name="quality-low"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* ------------------------ DATA USAGE SECTION STARTS ------------------------------*/}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomColor: "#2d2d2d",
            borderBottomWidth: 0.5,
            borderTopWidth: 0.5,
            borderTopColor: "#2d2d2d",
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: 18,
              color: "white",
              padding: 10,
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
        {/* ----------------------------Data Saver section starts --------------------------*/}

        <View style={styles.list}>
          <View
            style={{ width: "80%", justifyContent: "center", paddingTop: 5 }}
          >
            <Text style={styles.subtitle}>Data Saver</Text>
            <Text style={{ color: "grey", fontSize: 13 }}>
              Sets your music quality Low and disables artist canvases.
            </Text>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              width: "20%",
              justifyContent: "center",
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

        {/* -----------------------Data Usage Warning section starts -----------------------*/}

        <View style={styles.list}>
          <View style={{ width: "50%", justifyContent: "center" }}>
            <Text style={styles.subtitle}>Data Usage Warning</Text>
            <Text style={{ color: "grey", fontSize: 13 }}>
              Warns about excess data usage
            </Text>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              width: "50%",
              justifyContent: "center",
            }}
          >
            <Switch
              trackColor={{ false: "#767577", true: "pink" }}
              thumbColor={isEnabled1 ? "#FF2871" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>
        </View>
        {/* -----------------------Connect to apps section starts --------------------------*/}
        <Text style={styles.headingText}>Connect To Apps</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Navigation")}
        >
          <View style={styles.list}>
            <View style={{ width: "80%", justifyContent: "center" }}>
              <Text style={styles.subtitle}>Navigation</Text>
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
              <Feather name="navigation" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>
        {/* ----------------------- Car play section starts --------------------------------*/}
        <View style={styles.list}>
          <View style={{ width: "80%", justifyContent: "center" }}>
            <Text style={styles.subtitle}>Car Mode</Text>
            <Text style={{ color: "grey", fontSize: 13 }}>
              Turn on your auto play.
            </Text>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              width: "20%",
              justifyContent: "center",
            }}
          >
            <Switch
              trackColor={{ false: "#767577", true: "pink" }}
              thumbColor={isEnabled2 ? "#FF2871" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
        </View>

        {/* ----------------------------Sleep Mode section starts --------------------------*/}

        <View style={styles.list}>
          <View style={{ width: "80%", justifyContent: "center" }}>
            <Text style={styles.subtitle}>Sleep Mode</Text>
            <Text style={{ color: "grey", fontSize: 13 }}>
              Set Timer for your music.
            </Text>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              width: "20%",
              justifyContent: "center",

              flexDirection: "column",
            }}
          >
            <Switch
              trackColor={{ false: "#767577", true: "pink" }}
              thumbColor={isEnabled3 ? "#FF2871" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch3}
              value={isEnabled3}
            />
            <Text style={{ color: "grey", paddingRight: 7 }}>10 min</Text>
          </View>
        </View>

        {/* ------------------------- Help and support -------------------------------------*/}
        <Text style={styles.headingText}>Help And Support</Text>
        {/* ------------------------- Customer Support -------------------------------------*/}
        <TouchableOpacity
          onPress={() => props.navigation.navigate("CustomerSupport")}
        >
          <View style={styles.list}>
            <View style={{ width: "50%", justifyContent: "center" }}>
              <Text style={styles.subtitle}>Customer Support</Text>
              <Text style={{ color: "grey", fontSize: 13 }}>Contact Us</Text>
            </View>
            <View style={styles.endicon}>
              <AntDesign name="customerservice" size={28} color="white" />
            </View>
          </View>
        </TouchableOpacity>
        {/* -------------------------Update Section -------------------------------------*/}
        <TouchableOpacity onPress={() => props.navigation.navigate("Update")}>
          <View style={styles.list}>
            <View style={{ width: "50%", justifyContent: "center" }}>
              <Text style={styles.subtitle}>Updates</Text>
              <Text style={{ color: "grey", fontSize: 13 }}>Check Updates</Text>
            </View>
            <View style={styles.endicon}>
              <MaterialIcons name="update" size={28} color="white" />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 40,
  },

  header: {
    backgroundColor: "#FF2871",
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    height: 50,
  },
  list: {
    width: "100%",
    height: 60,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#111111",
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
  },
  headingText: {
    fontWeight: "600",
    fontSize: 18,
    color: "white",
    padding: 10,
    borderBottomColor: "#2d2d2d",
    borderBottomWidth: 0.7,
    borderTopWidth: 0.7,
    borderTopColor: "#2d2d2d",
  },
  subtitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  endicon: {
    width: "50%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
